var autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync'),
    del          = require('del'),
    exec         = require('child_process').exec,
    gulp         = require('gulp'),
    karma        = require('karma'),
    modRewrite   = require('connect-modrewrite'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    tslint       = require('gulp-tslint'),
    typescript   = require('gulp-typescript');


/*=========================================================
  PATHS
---------------------------------------------------------*/
var paths = {
  angular: {
    src: [
      'node_modules/angular2/**/*.{js,map}',
      '!node_modules/angular2/{es6/**,node_modules/**,ts/**}'
    ],
    target: 'target/lib/angular2'
  },

  lib: {
    src: [
      'node_modules/angular2/bundles/{angular2.dev,router.dev}.{js,js.map}',
      'node_modules/es6-module-loader/dist/es6-module-loader.{js,js.map}',
      'node_modules/firebase/lib/firebase-web.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.{js,js.map}',
      'node_modules/zone.js/dist/zone.min.js'
    ],
    target: 'target/lib'
  },

  rxjs: {
    src: [
      'node_modules/@reactivex/rxjs/dist/cjs/**/*.js'
    ],
    target: 'target/lib/@reactivex/rxjs/dist/cjs'
  },

  src: {
    css: 'src/**/*.css',
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    sass: 'src/**/*.scss',
    ts: 'src/**/*.ts'
  },

  target: 'target',

  typings: {
    entries: [
      'typings/tsd/tsd.d.ts',
      'typings/custom/custom.d.ts'
    ],
    watch: 'typings/**/*.ts'
  }
};


/*=========================================================
  CONFIG
---------------------------------------------------------*/
var config = {
  autoprefixer: {
    browsers: ['last 3 versions', 'Firefox ESR', 'Opera 12.1']
  },

  browserSync: {
    browser: ['google chrome'],
    files: [paths.target + '/**/*'],
    notify: false,
    port: 7000,
    reloadDelay: 200,
    server: {
      baseDir: paths.target,
      middleware: [
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    }
  },

  karma: {
    configFile: __dirname + '/karma.conf.js'
  },

  sass: {
    errLogToConsole: true,
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  ts: {
    configFile: 'tsconfig.json'
  },

  tslint: {
    report: {
      options: {emitError: true},
      type: 'verbose'
    }
  }
};


/*=========================================================
  TASKS
---------------------------------------------------------*/
gulp.task('clean.target', function(){
  return del(paths.target);
});


gulp.task('copy.angular', function(){
  return gulp
    .src(paths.angular.src)
    .pipe(gulp.dest(paths.angular.target));
});


gulp.task('copy.html', function(){
  return gulp
    .src(paths.src.html)
    .pipe(gulp.dest(paths.target));
});


gulp.task('copy.js', function(){
  return gulp
    .src(paths.src.js)
    .pipe(gulp.dest(paths.target));
});


gulp.task('copy.lib', function(){
  return gulp
    .src(paths.lib.src)
    .pipe(gulp.dest(paths.lib.target));
});


gulp.task('copy.rxjs', function(){
  return gulp
    .src(paths.rxjs.src)
    .pipe(gulp.dest(paths.rxjs.target));
});


gulp.task('lint', function(){
  return gulp
    .src(paths.src.ts)
    .pipe(tslint())
    .pipe(tslint.report(
      config.tslint.report.type,
      config.tslint.report.options
    ));
});


gulp.task('sass', function(){
  return gulp
    .src(paths.src.sass)
    .pipe(sass(config.sass))
    .pipe(postcss([
      autoprefixer(config.autoprefixer)
    ]))
    .pipe(gulp.dest(paths.target));
});


gulp.task('server', function(done){
  browserSync
    .create()
    .init(config.browserSync, done);
});


var tsProject = typescript.createProject(config.ts.configFile);

gulp.task('ts', function(){
  return gulp
    .src([paths.src.ts].concat(paths.typings.entries))
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.target));
});


/*===========================
  BUILD
---------------------------*/
gulp.task('build', gulp.series(
  'clean.target',
  'copy.angular',
  'copy.html',
  'copy.js',
  'copy.lib',
  'copy.rxjs',
  'sass',
  'ts'
));


/*===========================
  DEVELOP
---------------------------*/
gulp.task('dev', gulp.series('build', 'server', function watch(){
  gulp.watch(paths.src.html, gulp.task('copy.html'));
  gulp.watch(paths.src.js, gulp.task('copy.js'));
  gulp.watch(paths.src.sass, gulp.task('sass'));
  gulp.watch([paths.src.ts, paths.typings.watch], gulp.task('ts'));
}));


/*===========================
  TEST
---------------------------*/
function karmaServer(options, done) {
  var server = new karma.Server(options, function(error){
    if (error) process.exit(error);
    done();
  });
  server.start();
}


gulp.task('karma', function(done){
  karmaServer(config.karma, done);
});


gulp.task('karma.single', function(done){
  config.karma.singleRun = true;
  karmaServer(config.karma, done);
});


gulp.task('karma.run', function(done){
  var cmd = process.platform === 'win32' ? 'node_modules\\.bin\\karma run karma.conf.js' : 'node node_modules/.bin/karma run karma.conf.js';
  exec(cmd, function(error, stdout){
    // Ignore errors in the interactive (non-ci) mode.
    // Karma server will print all test failures.
    done();
  });
});


gulp.task('test', gulp.series('lint', 'build', 'karma.single'));


gulp.task('test.watch', gulp.parallel(gulp.series('lint', 'build', 'karma'), function(){
  gulp.watch(paths.src.ts, gulp.series('ts', 'karma.run'));
}));


/*===========================
  RUN
---------------------------*/
gulp.task('default', gulp.series('build', 'server'));
