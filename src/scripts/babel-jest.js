var babel = require('babel-core');

module.exports = {
    process: function (src, filename) {

        // NOTE: If you make changes in this file be sure to temporarily set `preprocessCachingDisabled` to `true` in
        // `package.json` while testing to make sure your changes actually worked.
        const isNodeModule = filename.indexOf('node_modules') !== -1;

        if ((!isNodeModule) && babel.util.canCompile(filename)) {
            return babel.transform(src, {
                filename: filename,
                retainLines: true,
                presets: ["es2015", "stage-1", "react"] }).code;
        }

        return src;
    }
};
