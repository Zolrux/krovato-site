const {src, dest, watch, parallel, series} = require('gulp');

const scss   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const svgSprite = require('gulp-svg-sprite');
const fileInclude = require('gulp-file-include');
const replace = require('gulp-replace');

function pages() {
  return src('app/pages/*.html')
    .pipe(fileInclude({
      basepath: "app/components"
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function fonts() {
  return src('app/fonts/src/*.*')
    .pipe(fonter({
      formats: ['woff', 'ttf']
    }))
    .pipe(src('app/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('app/fonts'))
}

function images(){
  return src(['app/images/src/**/*.*', '!app/images/src/**/*.svg'])
    .pipe(newer('app/images'))
    .pipe(webp())

    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(imagemin())

    .pipe(dest('app/images'))
}

function sprite () {
  return src('app/images/src/icons/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg',
          example: true 
        }
      }
    }))
    .pipe(dest('app/images'))
}

function scripts() {
  return src('app/js/main.js')
    .pipe(webpack({
      mode: 'development',
      entry: './app/js/main.js',
      output: {
        filename: 'main.min.js',
      },
    }))
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version']}))
    .pipe(concat('style.min.css'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/images/src'], images)
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
  watch(['app/components/*', 'app/pages/*', 'app/sections/**/*'], pages)
  watch(['app/*.html']).on('change', browserSync.reload);
}


function cleanDist() {
  return src('dist')
    .pipe(clean())
}

function removeFillAttrsFromSvgIcons() {
  return src('app/images/src/icons/**/*.svg')
    .pipe(replace(/fill=".*?"/g, ""))
    .pipe(dest('app/images/src/icons'))
}

function building() {
  return src([
    'app/css/style.min.css',
    '!app/images/**/*.html',
    'app/images/*.*',
    '!app/images/*.svg',
    'app/images/sprite.svg',
    'app/fonts/*.*',
    'app/js/main.min.js',
    'app/**/*.html'
  ], {base : 'app'})
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.pages = pages;
exports.building = building;
exports.sprite = series(removeFillAttrsFromSvgIcons, sprite);
exports.scripts = scripts;
exports.watching = watching;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, scripts, pages, watching);