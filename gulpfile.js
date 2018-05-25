/* eslint-disable */

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const lint = require('gulp-eslint');
const replace = require('gulp-replace');

gulp.task('clean', () =>
  del('build/**')
);

gulp.task('copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static'))
  ]
);

gulp.task('dev', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.dev.js')))
  .pipe(gulp.dest('build/static/js'))
);

gulp.task('prod', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack/client/prod.js')))
  .pipe(gulp.dest('build/static/js'))
);

gulp.task('dev:replace', ['clean'], () =>
  gulp.src('src/index.html')
  .pipe(replace('@@URL@@', 'http://localhost:5001'))
  .pipe(gulp.dest('build'))
)

gulp.task('prod:replace', ['clean'], () =>
  gulp.src('src/index.html')
  .pipe(replace('@@URL@@', 'http://localhost:5001'))
  .pipe(gulp.dest('build'))
)

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('default', ['clean', 'copy', 'dev:replace', 'dev']);
gulp.task('dev:build', ['clean', 'copy', 'dev:replace', 'dev']);
gulp.task('prod:build', ['lint', 'clean', 'prod:replace', 'copy', 'prod']);
