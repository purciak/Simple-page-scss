//
// Modules
// ======================================================
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

//
// Styles (SCSS + autoprefixer + minify)
// ======================================================
gulp.task('styles', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe($.sass.sync())
        .pipe($.autoprefixer({browsers: ['last 10 version']}))
        .pipe($.csso())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({stream: true}));
});


// Watch
gulp.task('watch', function () {

// Watch .scss files
    gulp.watch('./scss/**/*.scss', ['styles']);

    // // Watch .js files
    //gulp.watch('./js/*.js', ['js']);
    //
    // // Watch image files
    gulp.watch('./img/**/*', ['image']);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch('./*.html').on('change', browserSync.reload);
});


// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            notify: true
        }
    });

    // Watch .scss files
    gulp.watch('./scss/**/*.scss', ['styles']);

    // // Watch .js files
    //gulp.watch('./js/*.js', ['js']);
    //
    // // Watch image files
    //gulp.watch('./img/**/*', ['image']);

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch('./*.html').on('change', browserSync.reload);
});





// Initialization
gulp.task('default', ['styles', 'serve']);