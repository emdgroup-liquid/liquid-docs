const postcssMixins = require('postcss-mixins')
const postcssNested = require('postcss-nested')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const postcssNano = require('cssnano')

module.exports = {
  plugins: [
    postcssMixins(),
    postcssNested(),
    postcssPresetEnv({
      features: {
        'focus-visible-pseudo-class': false,
      },
    }),
    postcssImport(),
    postcssNano(),
  ],
}
