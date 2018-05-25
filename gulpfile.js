/* eslint-disable */

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const lint = require('gulp-eslint');

gulp.task('clean', () =>
  del('build/**')
);

gulp.task('copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static')),
    gulp.src(
      'src/index.html'
    )
    .pipe(gulp.dest('build'))
  ]
);

gulp.task('dev', () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.dev.js')))
  .pipe(gulp.dest('build/'))
);

gulp.task('prod', () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack/client/prod.js')))
  .pipe(gulp.dest('build/static/js'))
);

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('build:dev', ['clean', 'copy', 'dev']);
gulp.task('build:prod', ['lint', 'clean', 'copy', 'prod']);
