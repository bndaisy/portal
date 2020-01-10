// Main
const gulp = require('gulp'),
      del = require('del'),
      browserSync = require('browser-sync').create();

// CSS
const sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css');

// HTML
const pug = require('gulp-pug');

//JavaScript
const uglify = require('gulp-uglify-es').default;

// Image
const imagemin = require('gulp-imagemin');

//Functions

function styles(){
    return gulp
		.src('./public/sass/main.sass')
		.pipe(
			sass({
			outputStyle: 'expanded'
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
			overrideBrowserslist: ['last 15 versions'],
			cascade: false
			})
		)
		.pipe(
			cleanCSS({
			compatibility: 'ie8',
			level: 2
			})
		)
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());
                
}

function scripts(){
    return gulp
			.src('./public/js/**/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./build/js'))
}

function html(){
    return gulp
		.src(['./public/pug/**/*.pug', '!./public/pug/components/*.pug', '!./public/pug/layout/*.pug', '!./public/pug/templates/*.pug'])
		.pipe(
			pug({
			pretty: "\t"
			})
		)
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}

function images(){
  return gulp
        .src('./public/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
    gulp.watch('./public/img/*', images);
    gulp.watch('./public/sass/**/*.sass', styles);
    gulp.watch('./public/js/**/*.js', scripts);
    gulp.watch('./public/pug/**/*.pug', html);
    gulp.watch('.build/**/*.html', browserSync.reload);
}

function clean(){
    del(['build/*']);
}

// Tasks

gulp.task('watch', watch);
gulp.task('clean', clean);
gulp.task('build', gulp.series(images, styles, scripts, html));