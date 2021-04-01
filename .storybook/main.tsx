/*module.exports = {
  
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ]
}*/

module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-knobs"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
