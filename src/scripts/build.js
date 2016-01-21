const browserify = require('browserify');
const babelify = require('babelify');
const fs = require('fs');


const browserifyOptions = {
};
const bundler = browserify(browserifyOptions);

const transformOptions = {
      only: /public/,
      presets: ["es2015", "stage-1", "react"]
};
bundler.transform(babelify, transformOptions);

bundler.add('./src/public/js/index.js');
bundler.bundle(function (err, buf) {
  if (err) {
    throw new Error('bundle broke: ' + err);
  }
  fs.writeFile('./src/public/app.build.js', buf, 'utf8', err => {
      if (err) {
        throw new Error('write broke: ' + err);
      }
  });
});
