var config = {
  title: 'AncestorCloud',
  siteName: 'AncestorCloud',
  description: 'AncestorCloud is a marketplace for family history research.',
  favicon: '/assets/icons/favicon.ico',
  bannerImg: '/assets/images/Hero/seeker.png',
  gaId: ''
}

module.exports = {
  dev: function (data) {
    return {
      'index.html': [
        '<html>',
          '<head>',
            '<meta charset="utf-8"/>',
            '<meta name="viewport" content="width=device-width, initial-scale=1">',

            '<meta property="og:title" content="' + config.title + '" />',
            '<meta property="og:site_name" content="' + config.siteName + '" />',
            '<meta property="og:description" content="' + config.description + '" />',
            '<meta property="og:image" content="' + config.bannerImg + '" />',

            '<title>' + config.title + '</title>',
            '<link rel="icon" href="' + config.favicon + '" type="image/x-icon" />',

            '<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){' +
            '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),' +
            'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)' +
            '})(window,document,"script","//www.google-analytics.com/analytics.js","ga");' +

            'ga("create", "", "auto");</script>',
          '</head>',
          '<body>',
            '<div id="app"></div>',
            '<script src="/' + data.main + '"></script>',
          '</body>',
        '</html>'
      ].join('')
    }
  },

  prod: function (data) {
    return {
      'index.html': [
        '<html>',
          '<head>',
            '<meta charset="utf-8"/>',
            '<meta name="viewport" content="width=device-width, initial-scale=1">',

            '<meta property="og:title" content="' + config.title + '" />',
            '<meta property="og:description" content="' + config.description + '" />',
            '<meta property="og:image" content="' + config.bannerImg + '" />',
            '<meta property="og:site_name" content="' + config.siteName + '" />',

            '<title>' + config.title + '</title>',
            '<link rel="icon" href="' + config.favicon + '" type="image/x-icon" />',
            '<link href="/' + data.css + '" rel="stylesheet" type="text/css" />',

            '<script>!function(m,i,k,e,y){m.GoogleAnalyticsObject=k;m[k]||(m[k]=function(){' +
            '(m[k].q=m[k].q||[]).push(arguments)});m[k].l=+new Date;e=i.createElement("script");' +
            'y=i.scripts[0];e.src="//www.google-analytics.com/analytics.js";' +
            'y.parentNode.insertBefore(e,y)}(window,document,"ga");' +

            'ga("create", "' + config.gaId + '", "auto");</script>',
          '</head>',
          '<body>',
            '<div id="app"></div>',
            '<script src="/' + data.main + '"></script>',
          '</body>',
        '</html>'
      ].join('')
    }
  }
}
