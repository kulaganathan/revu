var gulp = require('gulp');
var del = require('del'); // rm -rf

gulp.task('clean', function() {
    return del(['./public/js/app.js']);
    console.log('Removed bundled app.js file!');
});

gulp.task('default',['clean'],function(){
    console.log('Running default task!');
});