module.exports = {
    mount: {
      src: '/_dist',
      public: '/',
    },
    plugins: [
      '@marlonmarcello/snowpack-plugin-pug',
      '@snowpack/plugin-postcss',
      // ["@snowpack/plugin-optimize", { /* see options below */ }]
    ],
  };
