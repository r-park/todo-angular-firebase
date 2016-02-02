'use strict';

const browserSync   = require('browser-sync');
const del           = require('del');
const gulp          = require('gulp');
const gutil         = require('gulp-util');
const historyApi    = require('connect-history-api-fallback');
const karma         = require('karma');
const tslint        = require('gulp-tslint');
const webpack       = require('webpack');
const WebpackServer = require('webpack-dev-server');


//=========================================================
//  PATHS
//---------------------------------------------------------
const paths = {
  src: {
    ts: 'src/**/*.ts'
  },

  target: 'target'
};


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {
  browserSync: {
    files: [paths.target + '/**/*'],
    notify: false,
    open: false,
    port: 3000,
    reloadDelay: 500,
    server: {
      baseDir: paths.target
    }
  },

  karma: {
    configFile: __dirname + '/karma.conf.js'
  },

  tslint: {
    report: {
      options: {emitError: true},
      type: 'verbose'
    }
  },

  webpack: {
    dev: './webpack.dev',
    dist: './webpack.dist'
  }
};


//=========================================================
//  TASKS
//---------------------------------------------------------
gulp.task('clean.target', () => del(paths.target));


gulp.task('lint', () => {
  return gulp.src(paths.src.ts)
    .pipe(tslint())
    .pipe(tslint.report(
      config.tslint.report.type,
      config.tslint.report.options
    ));
});


gulp.task('serve', done => {
  config.browserSync.server.middleware = [historyApi()];
  browserSync.create()
    .init(config.browserSync, done);
});


gulp.task('serve.dev', done => {
  let conf = require(config.webpack.dev);
  let compiler = webpack(conf);
  let server = new WebpackServer(compiler, conf.devServer);

  server.listen(conf.devServer.port, 'localhost', () => {
    gutil.log(gutil.colors.gray('-------------------------------------------'));
    gutil.log('WebpackDevServer:', gutil.colors.magenta(`http://localhost:${conf.devServer.port}`));
    gutil.log(gutil.colors.gray('-------------------------------------------'));
    done();
  });
});


gulp.task('ts', done => {
  let conf = require(config.webpack.dist);
  webpack(conf).run((error, stats) => {
    if (error) throw new gutil.PluginError('webpack', error);
    gutil.log(stats.toString(conf.stats));
    done();
  });
});


//===========================
//  BUILD
//---------------------------
gulp.task('build', gulp.series(
  'clean.target',
  'ts'
));


//===========================
//  DEVELOP
//---------------------------
gulp.task('default', gulp.task('serve.dev'));


//===========================
//  TEST
//---------------------------
function karmaServer(options, done) {
  let server = new karma.Server(options, error => {
    if (error) process.exit(error);
    done();
  });
  server.start();
}


gulp.task('test', done => {
  config.karma.singleRun = true;
  karmaServer(config.karma, done);
});


gulp.task('test.watch', done => {
  karmaServer(config.karma, done);
});


//===========================
//  RELEASE
//---------------------------
gulp.task('dist', gulp.series(
  'lint',
  'test',
  'build'
));
