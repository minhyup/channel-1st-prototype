module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack, mode }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    //config.
    // Important: return the modified config
    config.optimization.minimize = false;
    // config.optimization.minimizer = [];
    // config.mode = 'development';
    // console.log('config??', config, dev);
    // config.plugins = config.plugins.filter((plugin) => {
    //   return plugin.constructor.name !== 'UglifyJsPlugin';
    // });
    return config;
  }
};
