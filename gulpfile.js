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

gulp.task('copy', ['clean'], () =>
  [
    gulp.src(
      'src/static/images/logo.svg'
    )
    .pipe(gulp.dest('build/'))
  ]
);

gulp.task('dev', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.dev.js')))
  .pipe(gulp.dest('build/'))
);

gulp.task('prod', ['clean'], () =>
  gulp.src('src/app.js')
  .pipe(webpack(require('./webpack.prod.js')))
  .pipe(gulp.dest('build/'))
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

gulp.task('default', ['clean', 'copy', 'dev:replace', 'dev']);
gulp.task('dev:build', ['clean', 'copy', 'dev:replace', 'dev']);
gulp.task('prod:build', ['lint', 'clean', 'prod:replace', 'copy', 'prod']);
