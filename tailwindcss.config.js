module.exports = {
  theme: {
    fontFamily: {
       'display': ['"Work Sans"'],
       'body': ['"Work Sans"'],
          },
          fill: {
                current: 'currentColor',
               },
               fill: theme => ({
                 'red': theme('colors.red.500'),
                 'green': theme('colors.green.500'),
                 'blue': theme('colors.blue-btn'),
                 }),
    inset: {
        '0': 0,
        auto: 'auto',
        '1/2': '50%',
                },
    extend: {
      colors: {
        'red-header': '#d6101e',
        'blue-btn':'#005c9c'
      },
      spacing: {
        'container':'1200px',
        'xxl':'80px',
        '52':'208px',
        '60':'240px',
        '64':'256px',
        '68':'272px',
        '72':"288px",
        "80":"320px",
        "88":"352px",
        "96":"384px",
        "104":"416px",
        "112":"448px",
        "120":"480px",
        "128":"512px",
        "132":"544px",
        "140":"576px",
        "200":"800px",
        "300":"1184px",
        "400":"1600px",
      },
      maxWidth: {
        'container':'1200px',
        'containerresp':'230px',
        'title':'580px',
      },
      fontSize: {
        'xxl':'80px'
      },
    },
  }
}
