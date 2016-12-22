var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    stream = require('stream'),
    readable = require('stream').Readable,
    sourcemaps = require('gulp-sourcemaps'),
    compass = require('gulp-compass'),
    order = require('gulp-order'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    vPaths = require('vinyl-paths'),
    notify = require('gulp-notify'),
    gulpbrowserify = require('gulp-browserify'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    through = require('through2'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    q = require('q'),
    skipdebug = require('gulp-strip-debug'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    del = require('del'),
    fs = require('fs-extra');

// parent dir
var parent = path.resolve(__dirname, '../');

// Gulp plumber error handler
var onError = function(err) {
  console.log(err);
};

gulp.task('clean', function() {
  return gulp.src(['dist/assets/scripts'])
  .pipe(vPaths(del));
});

gulp.task('copyfonts', function() {
   gulp.src('src/assets/fonts/**/*.*')
   .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('copyimages', function() {
   gulp.src('src/assets/images/**/*.*')
   .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('copystyles', function() {
  return gulp.src('src/assets/css/*.*')
    .pipe(gulp.dest('dist/assets/css'));
}); 

gulp.task('6to5ify', ['clean'], function () {
  return browserify('./src/assets/scripts/app.js', { debug: true })
  .transform('babelify',{presets:['es2015','react']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('dist/assets/scripts'))
  .pipe(notify({ message: '6to5ify task complete' }));
});    

gulp.task('compass', function() {
  return gulp.src('src/assets/sass/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(compass({
      config_file: 'config.rb',
      css: 'dist/assets/css',
      sass: 'src/assets/sass'
    }))
    .pipe(browserSync.reload({ stream:true }))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'https://rrs.dt.dev',
    port: 3001,
    open: false,
    https: {
      key: path.join( parent + '/localhost-certs/selfsigned.key' ),
      cert: path.join( parent + '/localhost-certs/selfsigned.crt' )
    }
});
});

gulp.task('default',['copystyles', 'copyfonts', 'copyimages', 'compass', 'browser-sync'], function(){
  gulp.watch('src/assets/sass/*.scss', ['compass']);
  gulp.watch('src/assets/scripts/**/*.js', ['6to5ify', browserSync.reload]);
});

gulp.task('6to5', ['6to5ify']);