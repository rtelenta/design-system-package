const path = require('path')

module.exports = {
  stories: ['./../src/**/*.stories.(js|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-postcss'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}
