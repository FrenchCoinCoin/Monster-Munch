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
        'rose-header': '#f3c6bd',
        'blue-btn':'#3040c4',
        'gray-block1':'#f4f5f7',
        'text-black':'#2b292d',
        'green-block3':'#009b4d',
        'red-block4':'#f1592b',
        'blue-block5':'#0189d1',
        'blue-block6':'#c1e8f1',
        'blue-card':'#3141c5',
      },
      spacing: {
        'container':'1200px',
        'header':'710px',
        'header-link':'290px',
        'header-menu':'510px',
        'header-w-img':'1500px',
        'header-h-img':'448px',
        'bloc-1':'255px',
        'block-3-w':'700px',
        'block-3-h':'600px',
        'block-8-w':'755px',
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
      },
      fontSize: {
        'xxl':'80px'
      },
    },
  }
}
