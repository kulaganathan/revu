var gulp = require('gulp');
var del = require('del'); // rm -rf

gulp.task('clean', function() {
    return del(['output']);
});