'use strict';
//  
var gulp = require('gulp');
var sass = require('gulp-sass');
var destination = './_includes/head/css';
var  autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function () {
  return gulp.src('./_sass/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest(destination));
});



gulp.task('sassBass', function () {
  return gulp.src('./_sass_bass/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass_bass'
        ]
      }))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest(destination));
});


gulp.task('sassFooter', function () {
  return gulp.src('./_includes/footer/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest(destination));
});
 
gulp.task('sassPages', function () {
  return gulp.src(['./**/**/*.scss', '!./node_modules/**/*.*'])
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest(destination));
});

gulp.task('sassComponents', function () {
  return gulp.src('./_includes/**/**/*.scss')
      .pipe(sass({
          outputStyle: 'compressed',
          includePaths: [
            './_sass'
        ]
      }))
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest(destination));
});


gulp.task('watchSass', function(){
  gulp.watch('./_sass_bass/*.scss', gulp.series('sassBass')); 
  gulp.watch('./_sass/*.scss', gulp.series('sass'));
  gulp.watch('./_includes/footer/*.scss', gulp.series('sassFooter'));  
  gulp.watch('./**/*.scss', gulp.series('sassPages')); 
  gulp.watch('./_includes/**/**/*.scss', gulp.series('sassComponents')); 
  
});

gulp.task('default', gulp.series('sassBass', 'sass', 'sassFooter', 'sassPages' , 'sassComponents' , 'watchSass', function(){
  console.log("running tasks");
}));