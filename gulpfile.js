'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var pug = require('gulp-pug');

// Portfolio
gulp.task('potfolio_scss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'));
});
gulp.task('portfolio_pug', () => {
    return gulp.src('./src/pages/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./build/'));
});
gulp.task('portfolio_assets', () => {
    return gulp.src('./src/assets/*')
        .pipe(gulp.dest('./build/assets')); 
});


// AXIT
gulp.task('axit_scss', () => {
    return gulp.src('./projects/axit/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/projects/axit'));
});
gulp.task('axit_pug', () => {
    return gulp.src('./projects/axit/pages/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./build/projects/axit'));
});
gulp.task('axit_assets', () => {
    return gulp.src('./projects/axit/assets/*')
        .pipe(gulp.dest('./build/projects/axit/assets')); 
});


// DECO
gulp.task('deco_scss', () => {
    return gulp.src('./projects/deco/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/projects/deco'));
});
gulp.task('deco_pug', () => {
    return gulp.src('./projects/deco/pages/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./build/projects/deco'));
});
gulp.task('deco_assets', () => {
    return gulp.src('./projects/deco/assets/*')
        .pipe(gulp.dest('./build/projects/deco/assets')); 
});

gulp.task('default', function () {
    gulp.watch('./src/scss/*.scss', gulp.series('potfolio_scss'));
    gulp.watch(['./projects/pages/*.pug', './projects/mixin/*.pug'], gulp.series('portfolio_pug'));
    gulp.watch('./src/assets/*', gulp.series('portfolio_assets'));

    gulp.watch('./projects/axit/scss/*.scss', gulp.series('axit_scss'));
    gulp.watch(['./projects/axit/pages/*.pug', './projects/axit/mixin/*.pug'], gulp.series('axit_pug'));
    gulp.watch('./projects/axit/assets/*', gulp.series('axit_assets'));

    gulp.watch('./projects/deco/scss/*.scss', gulp.series('deco_scss'));
    gulp.watch(['./projects/deco/pages/*.pug', './projects/deco/mixin/*.pug'], gulp.series('deco_pug'));
    gulp.watch('./projects/deco/assets/*', gulp.series('deco_assets'));

});