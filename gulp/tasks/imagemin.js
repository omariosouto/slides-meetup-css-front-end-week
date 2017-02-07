'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,plumber  = require('gulp-plumber')
    ,paths    = require('../paths')
    ,imagemin = require('gulp-imagemin');

// Call Imagemin
module.exports = gulp.task('imagemin', function () {
  return gulp.src(paths.source.img)
    .pipe(gulp.dest(paths.build.img));
});
