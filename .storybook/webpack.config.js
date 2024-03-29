module.exports = async ({ config }) =>
  console.dir(config, { depth: null }) || config

const path = require('path')
const webpack = require('webpack')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Add bootstrap JS to preview mode

  config.entry.push(
    require.resolve(
      '../node_modules/@symplicity/bootstrap/dist/js/bootstrap.bundle.js'
    )
  )
  config.module.rules.push({
    test: /\.stories.js?$/,
    loaders: [require.resolve('../node_modules/@storybook/source-loader')],
    enforce: 'pre'
  })

  // Return the altered config
  return config
}
