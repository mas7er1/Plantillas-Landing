var syntax        = 'sass'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		pug           = require("gulp-pug"),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		// notify: false,
		open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src(''+syntax+'/**/*.'+syntax+'')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	// .pipe(rename({ suffix: '.min', prefix : '' }))

	.pipe(autoprefixer(['last 15 versions']))
	// .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('js', function() {
	return gulp.src([
		'app/libs/pace/pace.min.js',
		'app/libs/jquery/dist/jquery.min.js',
	
		'app/libs/superfish-master/js/superfish.min.js',
		'app/libs/slick/slick.js',
		'app/libs/tilt/tilt.js',
		'app/libs/textillate/jquery.fittext.js',
		'app/libs/textillate/jquery.lettering.js',
		'app/libs/textillate/jquery.textillate.js', 
		'app/libs/directional-hover/directional-hover.js',
		'app/libs/googlemaps/gmap3.min.js',
		'app/libs/jquery-ui-1.12.1.custom/jquery-ui.min.js',
		'app/libs/magnific-popup/jquery.magnific-popup.min.js',
		'app/libs/imagesloaded/imagesloaded.pkgd.min.js',
		'app/libs/isotope/isotope.pkgd.min.js',
		'app/libs/waypoints/waypoints.min.js',
		'app/libs/animnum/animnum.js',
		'app/libs/animate/animate-css.js',
		// 'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});


gulp.task('pug', function() {
    return gulp.src('pug/**/!(_)*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'fidex00@fidex00.ftp.tools',
		destination: '/home/fidex00/alian4x.com/www/html/rumon',
		include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

gulp.task('watch', ['styles', 'js', 'browser-sync', 'pug'], function() {
	gulp.watch(''+syntax+'/**/*.'+syntax+'', ['styles']);
	gulp.watch('pug/**/*.pug', ['pug']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);
