const isProduction = process.env.NODE_ENV === "production"

const commonPlugins = [
  require("tailwindcss"),
  require("autoprefixer"),
]

const plugins = isProduction ? [
  ...commonPlugins,
  require("cssnano")({
    preset: ['default', {
      discardComments: {
          removeAll: true,
      },
   }]
  })
] : [
  ...commonPlugins
]

module.exports = {
  plugins: plugins
}