var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var zip = require('gulp-zip');

gulp.task('zip:dev', ['build:dev'], function() {
    return gulp.src('dist/**')
        .pipe(zip('freewire-frontend.0.0.1.dev.zip'))
        .pipe(gulp.dest('deploy'));
});

gulp.task('zip:prod', ['build:prod'], function() {
    return gulp.src('dist/**')
        .pipe(zip('freewire-frontend.0.0.1.prod.zip'))
        .pipe(gulp.dest('deploy'));
});