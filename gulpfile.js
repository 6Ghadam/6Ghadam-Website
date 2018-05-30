/* eslint-disable */

const gulp = require('gulp');
const webpack = require('webpack-stream');
const del = require('del');
const lint = require('gulp-eslint');
const replace = require('gulp-replace');
const config = require('./src/config.js');

gulp.task('clean', () =>
  del('build/**')
);

gulp.task('dev:copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static')),
    gulp.src(
      'server/index.js'
    )
    .pipe(gulp.dest('build'))
  ]
);

gulp.task('prod:copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/**/*'
    )
    .pipe(gulp.dest('build/static'))
  ]
);

gulp.task('dev:build', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.dev.js')))
  .pipe(gulp.dest('build/static/js'))
);

gulp.task('prod:build', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.prod.js')))
  .pipe(gulp.dest('build/static/js'))
);

gulp.task('dev:replace', ['clean'], () =>
  gulp.src('server/index.html')
  .pipe(replace('@@CDN@@', config.devCDN))
  .pipe(gulp.dest('build'))
)

gulp.task('prod:replace', ['clean'], () =>
  gulp.src('server/index.html')
  .pipe(replace('@@CDN@@', config.prodCDN))
  .pipe(gulp.dest('build'))
)

gulp.task('lint', () =>
  gulp.src('src/**/*.js')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError())
);

gulp.task('default', ['clean', 'dev:copy', 'dev:replace', 'dev:build']);
gulp.task('dev', ['clean', 'dev:copy', 'dev:replace', 'dev:build']);
gulp.task('prod', ['lint', 'clean', 'prod:copy', 'prod:replace', 'prod:build']);
