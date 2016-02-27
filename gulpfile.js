var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csslint = require('gulp-csslint');
var cssnano = require('gulp-cssnano');
var stylus = require('gulp-stylus');
var imageminJpegoptim = require('imagemin-jpegoptim');
var jade = require('gulp-jade');

gulp.task('css', function () {
	return gulp.src('style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(cssnano())
		.pipe(gulp.dest('build'));
});

gulp.task('csslint', function() {
  gulp.src('*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('one', function () {
  return gulp.src('style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build'));
});

gulp.task('img', function () {
	return gulp.src('images/*.jpeg')
		.pipe(imageminJpegoptim({progressive: true, max: 50, size: 300})())
		.pipe(gulp.dest('images'));
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: false
    }))
    .pipe(gulp.dest('build'))
});
