
'use strict';

var 
  path = require('path'),
  gulp = require('gulp'),
  conf = require('./conf'),
  ngConstant = require('gulp-ng-constant');


gulp.task('env:local', function() {
  gulp.src(path.join(conf.paths.src, '/app/env/local/app.config.json'))
    .pipe(ngConstant())
    .pipe(gulp.dest(path.join(conf.paths.src, 'app/')));
});

gulp.task('env:dev', function() {
  gulp.src(path.join(conf.paths.src, '/app/env/dev/app.config.json'))
    .pipe(ngConstant())
    .pipe(gulp.dest(path.join(conf.paths.src, 'app/')));
});


gulp.task('env:prod', function() {
  gulp.src(path.join(conf.paths.src, '/app/env/prod/app.config.json'))
    .pipe(ngConstant())
    .pipe(gulp.dest(path.join(conf.paths.src, 'app/')));
});
