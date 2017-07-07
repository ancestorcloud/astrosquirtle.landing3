const reset = `/*------------------------------------*\
    #RESET
  \*------------------------------------*/

  /**
   * Borrowed from @CSSWizardry's inuit framework.
   *
   * As well as using normalize.css, it is often advantageous to remove all
   * margins from certain elements.
   */
  body,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  dl, dd, ol, ul,
  form, fieldset, legend,
  figure,
  table, th, td, caption,
  hr {
    margin:  0;
    padding: 0;
  }





  /**
   * Give a help cursor to elements that give extra info on ':hover'.
   */
  abbr[title],
  dfn[title] {
    cursor: help;
  }





  /**
   * Remove underlines from potentially troublesome elements.
   */
  u,
  ins {
    text-decoration: none;
  }





  /**
   * Apply faux underlines to inserted text via 'border-bottom'.
   */
  ins {
    border-bottom: 1px solid;
  }
`

const index = `@import "settings.global";
  @import "settings.colors";
  @import "settings.typography";

  @import "generic.reset";
  @import "generic.normalize";
  @import "generic.box-sizing";

  @import "base.typography";

  /*@import url(https://fonts.googleapis.com/css?family=Playfair+Display:400,700);
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic);
  @font-face {
    font-family: 'Bebas Neue';
    src: url('/fonts/bebas-neue/BebasNeue Bold.otf');
  }*/

  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/Museo Sans/MuseoSans-100.otf');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/Museo Sans/MuseoSans-300.otf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/Museo Sans/MuseoSans-500.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/Museo Sans/MuseoSans-700.otf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Museo Sans';
    src: url('/fonts/Museo Sans/MuseoSans-900.otf');
    font-weight: 900;
  }

  html,
  body,
  #app {
    height: 100%;
    font-family: 'Museo Sans', sans-serif;
  }
`

export default `${reset} ${index}`
