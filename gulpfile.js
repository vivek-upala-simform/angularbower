'use strict';

// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  wrench = require('wrench'),
  connect = require('gulp-connect');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function(){
  gulp.start('build');
});

gulp.task('connect', function(){
  connect.server({
    root: 'dist',
    port: 4000
  });
});