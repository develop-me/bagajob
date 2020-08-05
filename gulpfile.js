let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

// Sass compilation/minification function from /src/scss/ to /src/css/styles.min.css
gulp.task('sass-min', function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./src/css/'));
});


// Watcher task for sass compilation and minification
gulp.task('sass-min-watcher', () => {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
})

// default gulp task for on-demand compilation
// executes in parallel so more default tasks can be added later
gulp.task('default', gulp.parallel('sass-min'));

// watch task to turn on the watcher to automate compilation when changes are made
// executes in parallel so more default tasks can be added later
gulp.task('watch', gulp.parallel('sass-min-watcher'));