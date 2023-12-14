const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const tsProject = ts.createProject('tsconfig.json');

// Compilacao do typescript
gulp.task('compile-ts', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Minificação
gulp.task('minify-js', () => {
  // return gulp.src('dist/**/*.js')
  return gulp.src('dist/Banco.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
});

// Copiar os arquivos de html
gulp.task('copy-html', () => {
  return gulp.src(['src/*.html'])
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Sobe o servidor web com browserSync
gulp.task('start-server', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    port: 80
  });

  // Fique observando as alteracoes dos arquivos
  gulp.watch(['src/**/*.ts'], gulp.series('compile-ts', 'minify-js'));
  gulp.watch(['src/**/*.html'], gulp.series('copy-html'));

  // Restart do server
  gulp.watch(['dist/**/*.js', 'dist/**/*.html']).on('change', browserSync.reload);
});

// Compilar o ts, minificar, e iniciar o servidor web com browserSync
gulp.task('default', gulp.series('compile-ts', 'minify-js', 'copy-html', 'start-server'));