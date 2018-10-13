const parserOptions = {
  componentNameResolver: (exp, source) =>
    exp.getName() === 'StyledComponentClass' && getDefaultExportForFile(source),
  propFilter: (props, component) => boolean
};
module.exports = {
  components: 'src/react/**/[A-Z]*.{ts,tsx}',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [parserOptions]
  ).parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev')
};
