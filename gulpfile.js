"use strict";
let gulp = require("gulp");
let concat = require("gulp-concat");
//   sass = require("gulp-sass"),
//   pug = require("gulp-pug"),
//   autoprefixer = require("gulp-autoprefixer"),
//   browserSync = require("browser-sync"),
//   reload = browserSync.reload,
//   spritesmith = require("gulp-spritesmith"),
//   gulpif = require("gulp-if"),
//   imagemin = require("gulp-imagemin");

var path = {
  src: {
    sass: "./sass/**/*.sass",
    pug: "./pug/.pug",
    pugWatch: "./pug/**/*.pug",
    concat: [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/owl.carousel/dist/owl.carousel.js",
      "lib/*.js",
    ],
    fontgen: "fonts/*.{ttf,otf}",
  },
  dest: {
    sass: "dist/css",
    pug: "./dist/",
    concat: "dist/js/",
    fontgen: "dist/fonts",
  },
};

var concatInitial = {
  src: {
    js: [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/owl.carousel/dist/owl.carousel.js",
      "node_modules/video.js/dist/video.min.js",
      "js/script.js",
    ],
  },
  dest: {
    js: ["dist/js/"],
  },
};

function hello() {
  console.log("Привет Я работаю!");
}

function concat() {
  return gulp
    .src(concatInitial.src.js)
    // .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(concatInitial.dest.js))
    .pipe(
      reload({
        stream: true,
      })
    );
}

gulp.task("hello", hello);

gulp.task("concat", concat);
