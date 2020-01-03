// gulp 호출
var gulp = require("gulp");

// 플러그인 패키지 호출
var sass = require("gulp-sass")
sourcemaps = require("gulp-sourcemaps"),
  headerComment = require("gulp-header-comment"),
  browserSync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  beautify = require('gulp-beautify');

// 경로 변수
var title = "Hyodu";
var PORT = 1234;
var root = "../app";
var src = root + "/src";
var dist = root + "/dist";

var paths = {
  html: src + "/**/*.html",
  scss: src + "/scss/**/*.scss",
  image: src + "/images/**/*",
  js: src + "/js/**/*.js"
}


// 타임스탬프용 날짜 생성
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
  value: function () {
    function pad2(n) {
      return (n < 10 ? "0" : "") + n;
    }
    return (
      this.getFullYear() +
      "-" +
      pad2(this.getMonth() + 1) +
      "-" +
      pad2(this.getDate()) +
      " " +
      pad2(this.getHours()) +
      ":" +
      pad2(this.getMinutes()) +
      ":" +
      pad2(this.getSeconds())
    );
  }
});

// SASS 정의
var sassOptions = {
  // outputStyle: "expanded",
  outputStyle: "compressed",
  indentType: "tab"
};
sass.compiler = require("node-sass");

gulp.task("sass", function () {
  var myDate = new Date().YYYYMMDDHHMMSS();

  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      }))
    .pipe(
      headerComment(`
      -----------------------------------------------
       Last Modified: ${myDate}
       Author: Nana (nana@thevitolabs.com)
       Description: ${title} CSS
      -----------------------------------------------
    `)
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist + "/css"))
    .pipe(browserSync.stream());
});




// HTML include 정의
gulp.task("fileinclude", function () {
  return gulp
    .src(paths.html)
    .pipe(fileinclude({
      prefix: "@@",
      basepath: "@file",
      context: {
        required: "",
        error: "",
        login: "",
        status: "",
        btnPage: ""
      },
    }))
    .pipe(gulp.dest(dist))
});


// 이미지 압축 정의
gulp.task("imagemin", function () {
  return gulp
    .src(paths.image)
    .pipe(imagemin())
    .pipe(gulp.dest(dist + "/images"))
});


// Browser-sync 정의
gulp.task("reload", function () {
  browserSync.reload();
});

gulp.task("browserSync", function () {
  return browserSync.init({
    port: PORT,
    server: {
      baseDir: dist
    }
  });
});


//js 파일 복사
gulp.task('move:js', function () {
  return gulp.src(paths.js)
    .pipe(gulp.dest(dist + "/js"))
});

// html 예쁘게 정리
gulp.task('beautify-html', function () {
  return gulp
    .src(dist + "/html/**/*.html")
    .pipe(beautify.html({
      indent_size: 2
    }))
    .pipe(gulp.dest(dist + '/html'));
});

gulp.task("watch", function () {
  gulp.watch(paths.scss, {
      interval: 500
    },
    ["sass"]);
  gulp.watch(
    paths.html, {
      interval: 300
    },
    ["fileinclude", "reload"]
  );
  gulp.watch(
    paths.image, {
      interval: 800
    },
    ["imagemin"]
  );
  gulp.watch(
    paths.js, {
      interval: 800
    },
    ["move:js"]
  );
});


gulp.task("default", ["fileinclude", "imagemin", "sass", "move:js", "browserSync", "watch"], function () {
  console.log(" === 👩‍🔧 걸프가 열심히 일하고 있습니다 👨‍🔧 ===");
});