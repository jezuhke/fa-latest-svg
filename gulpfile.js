var gulp  = require('gulp'),
    shell = require('gulp-shell');


gulp.task('generate', shell.task([


  "fa2svg --dir svg",

  "svgo -f svg",

  "echo SVG Font has been generated and compressed",


]));
