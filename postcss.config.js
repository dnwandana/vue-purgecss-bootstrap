const IN_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        /**
         * String if single css file,
         * Array if multiple css file
         * Doc: https://purgecss.com/configuration.html#configuration-file
         */
        css: './src/assets/bootstrap.min.css',
        content: ['./public/**/*.html', './src/**/*.vue'],
        defaultExtractor (content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          )
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          )
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/
        ]
      })
  ]
}
