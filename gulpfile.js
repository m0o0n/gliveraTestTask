var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
cssfont64 = require('gulp-cssfont64');

const buildFolder = `./src`
const srcFolder = `./src`

gulp.task('fontsConvert', function () {
	return gulp.src(`${srcFolder}/fonts/*.*`)
		.pipe(cssfont64())
		.pipe(gulp.dest(`${buildFolder}/styles/`))
		.pipe(browserSync.stream());
});