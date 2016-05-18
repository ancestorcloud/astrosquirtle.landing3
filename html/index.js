import React from 'react'
import { renderToString } from 'react-dom/server'
import { StyleSheetServer } from 'aphrodite'
import Main from '../src/App/views/Landing'

const config = {
  title: 'AncestorCloud',
  siteName: 'AncestorCloud',
  description: 'AncestorCloud is a marketplace for family history research.',
  favicon: '/assets/icons/favicon.ico',
  bannerImg: '/assets/images/Hero/seeker.png',

  prod: {
    gaId: 'UA-47141819-1',
    mixpanelId: '696543d1ad9b69eb90c498c41f2ad3ee'
  }
}

export const prod = (bundle) => {
  const {html, css} = StyleSheetServer.renderStatic(() =>
    renderToString(<Main />)
  )

  return {
    'index.html': `
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="${config.title}" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.bannerImg}" />

    <title>${config.title}</title>
    <link rel="icon" href="${config.favicon}" type="image/x-icon" />
    <link href="/${bundle.css}" rel="stylesheet" type="text/css" />
    <style data-aphrodite>${css.content}</style>

    <script>!function(m,i,k,e,y){m.GoogleAnalyticsObject=k;m[k]||(m[k]=function(){
    (m[k].q=m[k].q||[]).push(arguments)});m[k].l=+new Date;e=i.createElement("script");
    y=i.scripts[0];e.src="//www.google-analytics.com/analytics.js";
    y.parentNode.insertBefore(e,y)}(window,document,"ga");

    ga("create", "${config.prod.gaId}", "auto");</script>

    <!-- start Mixpanel -->
    <script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
    for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
    mixpanel.init("${config.prod.mixpanelId}");</script>
    <!-- end Mixpanel -->

  </head>
  <body>
    <div id="app">${html}</div>
    <script src="/${bundle.main}"></script>
  </body>
</html>
    `
  }
}

export const dev = ({main}) => ({
  'index.html': `
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:title" content="${config.title}" />
        <meta property="og:site_name" content="${config.siteName}" />
        <meta property="og:description" content="${config.description}" />
        <meta property="og:image" content="${config.bannerImg}" />

        <title>${config.title}</title>
        <link rel="icon" href="${config.favicon}" type="image/x-icon" />

        <script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

        ga("create", "", "auto");</script>

        <!-- start Mixpanel -->
        <script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
        for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
        mixpanel.init("4635f5c8b52aa01e00675c7cbfccdf82");</script>
        <!-- end Mixpanel -->
      </head>
      <body>
        <div id="app"></div>
        <script src="/${main}"></script>
      </body>
    </html>
  `
})

export default {
  dev,
  prod
}

module.exports = {
  dev,
  prod
}
