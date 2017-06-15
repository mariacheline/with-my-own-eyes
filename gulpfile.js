var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');
var deploy = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('assets/css/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', function () {
  gulp.watch('assets/css/sass/**/*.scss', ['sass']);
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('assets/css/sass/**/*.scss', ['sass']);
	gulp.watch('assets/js/**/*.js', browserSync.reload);
	gulp.watch('./index.html', browserSync.reload);
})
