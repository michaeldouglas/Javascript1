const gulp = require("gulp");
const ts = require("gulp-typescript");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

const tsProject = ts.createProject("tsconfig.json");

// Compilar o TS
gulp.task("compile-ts", () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Minificacao do JS
gulp.task("minify-js", () => {
  //dist/**/*.js
  // app.min.js -> antes
  return gulp
    .src("dist/Banco.js")
    .pipe(concat("app.js"))
    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Copia os html
gulp.task("copy-html", () => {
  return gulp
    .src(["src/*.html"])
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

//Iniciar o servidor
gulp.task("start-server", () => {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
    port: 80,
  });

  // Observador de alteração
  gulp.watch(["src/**/*.ts"], gulp.series("compile-ts", "minify-js"));
  gulp.watch(["src/**/*.html"], gulp.series("copy-html"));

  // Restart do servidor
  gulp
    .watch(["dist/**/*.js", "dist/**/*.html"])
    .on("change", browserSync.reload);
});

// npm start -> default
gulp.task(
  "default",
  gulp.series("compile-ts", "minify-js", "copy-html", "start-server")
);
