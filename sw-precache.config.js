module.exports = {
  navigateFallback: '/index.html',

  // @see https://github.com/Polymer/polymer-build/issues/35
  navigateFallbackWhitelist: [
    /^(?!\/__)/
  ],

  root: 'dist',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /^https:\/\/maxcdn\.bootstrapcdn\.com\//,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /^https:\/\/use\.typekit\.net\//,
      handler: 'cacheFirst'
    }
  ],
  staticFileGlobs: [
    'dist/assets/**/*',
    'dist/*.css',
    'dist/*.html',
    'dist/*.js'
  ],
  stripPrefix: 'dist/'
};
