let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');

// Sass compilation function from /src/scss/ to /src/css/styles.css
gulp.task('sass', function () {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('./src/css/'));
});

// CSS minifying function from /css/styles.css to /docs/css/styles.css for publishing
gulp.task('minify-css', () => {
    return gulp.src('./src/css/styles.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('./src/css/'));
});

// Series task for sass compilation then minifying the css
gulp.task('sass-min', gulp.series('sass', 'minify-css'));

// Watcher task for sass and css 
gulp.task('sass-min-watcher', () => {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass', 'minify-css'));
})

// default gulp task for on-demand compilation
// executes in parallel so more default tasks can be added later
gulp.task('default', gulp.parallel('sass-min'));

// watch task to turn on the watcher to automate compilation when changes are made
// executes in parallel so more default tasks can be added later
gulp.task('watch', gulp.parallel('sass-min-watcher'));