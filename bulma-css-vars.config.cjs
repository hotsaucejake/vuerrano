const { hsl } = require('@cssninja/bulma-css-vars')

module.exports = {
  sassEntryFile: 'src/scss/main.scss',
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: {
    white: '#fff',
    primary: hsl(250, 34, 59), // '#8074bb',
    dark: hsl(0, 0, 13), // '#222222',
    link: hsl(229, 53, 53), // '#485fc7',
    info: hsl(200, 97, 45), // '#039be5',
    success: hsl(164, 95, 43), // '#06d6a0',
    warning: hsl(35, 95, 62), // '#faae42',
    danger: hsl(341, 79, 53), // '#e62965',
  },
  transition: null,
}
