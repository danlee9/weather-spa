var gulp = require('gulp'),
		clean = require('gulp-clean'),
		usemin = require('gulp-usemin'),
		minify = require('gulp-minify-css'),
		uglify = require('gulp-uglify');

gulp.task('clean', function() {
	gulp.src('./build', {read: false})
		.pipe(clean());
});

gulp.task('copy', ['clean'], function() {
	gulp.src(['./public/assets/background.jpg', './public/**/*.html', '!./public/index.html'])
		.pipe(gulp.dest('./build'));
});

gulp.task('usemin', ['copy'], function() {
	gulp.src('./public/index.html')
		.pipe(usemin({
			css: [minify()],
			js: [uglify()]
		}))
			.pipe(gulp.dest('./build'));
});

gulp.task('build', ['usemin']);