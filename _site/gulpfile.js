const gulp          = require('gulp');  
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const cleanCSS      = require('gulp-clean-css');
const uglify        = require('gulp-uglify');
const imagemin      = require('gulp-imagemin');
const browserSync   = require('browser-sync').create();

 /**__ COPY HTML __**/
 gulp.task('html', function(){
  gulp.src('./*.html')
    .pipe(gulp.dest('_site'))
    .pipe(browserSync.reload({
      stream: true
    }));
 });

/**__ COMPILE, PREFIX AND MINIFY SASS __**/
 gulp.task('sass', function() {
  gulp.src('assets/css/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
 });

 /**__ MINIFY JAVASCRIPT __**/
 gulp.task('minifyJS', function(){
  gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
 });

/**__ OPTIMIZE IMAGES __**/
 gulp.task('imageMin', function(){
  gulp.src('assets/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('_site/assets/img'))
    .pipe(browserSync.reload({
      stream: true
    }));
 });

/**__ BROWSER-SYNC __**/
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./_site"
      }
  });
});

/**__ WATCH FILES __**/
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('/*.html', ['html']);
  gulp.watch('assets/sass/*.scss', ['sass']);
  gulp.watch('assets/**/*.js', ['minifyJS']);
  gulp.watch('assets/img/*', ['imageMin']);
});

/**__ DEFAULT TASK: Run 'gulp' on terminal __**/
gulp.task('default', ['html', 'sass', 'minifyJS', 'imageMin', 'watch']);