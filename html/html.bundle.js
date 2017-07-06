module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.dev = exports.prod = undefined;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(2);\n\nvar _aphrodite = __webpack_require__(3);\n\nvar _Letter = __webpack_require__(4);\n\nvar _Letter2 = _interopRequireDefault(_Letter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 1. must be a direct url\n */\nvar config = {\n  title: 'AncestorCloud',\n  siteName: 'AncestorCloud',\n  description: 'AncestorCloud is a marketplace for family history research.',\n  favicon: '/assets/icons/favicon.ico',\n  bannerImg: 'https://s3-us-west-2.amazonaws.com/astrosquirtle.landing3/assets/images/facebookShareBanner.jpg', /* 1 */\n\n  prod: {\n    gaId: 'UA-47141819-1',\n    mixpanelId: '696543d1ad9b69eb90c498c41f2ad3ee'\n  }\n};\n\nvar prod = exports.prod = function prod(bundle) {\n  var _StyleSheetServer$ren = _aphrodite.StyleSheetServer.renderStatic(function () {\n    return (0, _server.renderToString)(_react2.default.createElement(_Letter2.default, null));\n  }),\n      html = _StyleSheetServer$ren.html,\n      css = _StyleSheetServer$ren.css;\n\n  return {\n    'index.html': '\\n<html>\\n  <head>\\n    <meta charset=\"utf-8\"/>\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n\\n    <meta property=\"og:title\" content=\"' + config.title + '\" />\\n    <meta property=\"og:site_name\" content=\"' + config.siteName + '\" />\\n    <meta property=\"og:description\" content=\"' + config.description + '\" />\\n    <meta property=\"og:image\" content=\"' + config.bannerImg + '\" />\\n\\n    <title>' + config.title + '</title>\\n    <link rel=\"icon\" href=\"' + config.favicon + '\" type=\"image/x-icon\" />\\n    <link href=\"/' + bundle.css + '\" rel=\"stylesheet\" type=\"text/css\" />\\n    <style data-aphrodite>' + css.content + '</style>\\n\\n    <script>!function(m,i,k,e,y){m.GoogleAnalyticsObject=k;m[k]||(m[k]=function(){\\n    (m[k].q=m[k].q||[]).push(arguments)});m[k].l=+new Date;e=i.createElement(\"script\");\\n    y=i.scripts[0];e.src=\"//www.google-analytics.com/analytics.js\";\\n    y.parentNode.insertBefore(e,y)}(window,document,\"ga\");\\n\\n    ga(\"create\", \"' + config.prod.gaId + '\", \"auto\");</script>\\n\\n    <!-- start Mixpanel -->\\n    <script type=\"text/javascript\">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(\".\");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;\"undefined\"!==typeof d?c=b[d]=[]:d=\"mixpanel\";c.people=c.people||[];c.toString=function(b){var a=\"mixpanel\";\"mixpanel\"!==d&&(a+=\".\"+d);b||(a+=\" (stub)\");return a};c.people.toString=function(){return c.toString(1)+\".people (stub)\"};i=\"disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user\".split(\" \");\\n    for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement(\"script\");a.type=\"text/javascript\";a.async=!0;a.src=\"undefined\"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:\"file:\"===e.location.protocol&&\"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\".match(/^\\\\/\\\\//)?\"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\":\"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\";f=e.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);\\n    mixpanel.init(\"' + config.prod.mixpanelId + '\");</script>\\n    <!-- end Mixpanel -->\\n\\n  </head>\\n  <body>\\n    <div id=\"app\">' + html + '</div>\\n    <script src=\"/' + bundle.main + '\"></script>\\n  </body>\\n</html>\\n    '\n  };\n};\n\nvar dev = exports.dev = function dev(_ref) {\n  var main = _ref.main;\n  return {\n    'index.html': '\\n    <html>\\n      <head>\\n        <meta charset=\"utf-8\"/>\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n\\n        <meta property=\"og:title\" content=\"' + config.title + '\" />\\n        <meta property=\"og:site_name\" content=\"' + config.siteName + '\" />\\n        <meta property=\"og:description\" content=\"' + config.description + '\" />\\n        <meta property=\"og:image\" content=\"' + config.bannerImg + '\" />\\n\\n        <title>' + config.title + '</title>\\n        <link rel=\"icon\" href=\"' + config.favicon + '\" type=\"image/x-icon\" />\\n\\n        <script>(function(i,s,o,g,r,a,m){i[\"GoogleAnalyticsObject\"]=r;i[r]=i[r]||function(){\\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\\n        })(window,document,\"script\",\"//www.google-analytics.com/analytics.js\",\"ga\");\\n\\n        ga(\"create\", \"\", \"auto\");</script>\\n\\n        <!-- start Mixpanel -->\\n        <script type=\"text/javascript\">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(\".\");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;\"undefined\"!==typeof d?c=b[d]=[]:d=\"mixpanel\";c.people=c.people||[];c.toString=function(b){var a=\"mixpanel\";\"mixpanel\"!==d&&(a+=\".\"+d);b||(a+=\" (stub)\");return a};c.people.toString=function(){return c.toString(1)+\".people (stub)\"};i=\"disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user\".split(\" \");\\n        for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement(\"script\");a.type=\"text/javascript\";a.async=!0;a.src=\"undefined\"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:\"file:\"===e.location.protocol&&\"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\".match(/^\\\\/\\\\//)?\"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\":\"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js\";f=e.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);\\n        mixpanel.init(\"4635f5c8b52aa01e00675c7cbfccdf82\");</script>\\n        <!-- end Mixpanel -->\\n      </head>\\n      <body>\\n        <div id=\"app\"></div>\\n        <script src=\"/' + main + '\"></script>\\n      </body>\\n    </html>\\n  '\n  };\n};\n\nexports.default = {\n  dev: dev,\n  prod: prod\n};\n\n\nmodule.exports = {\n  dev: dev,\n  prod: prod\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./html/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./html/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"react\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"react\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"react-dom/server\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"react-dom/server\"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"aphrodite\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"aphrodite\"\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22aphrodite%22?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHeadroom = __webpack_require__(5);\n\nvar _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);\n\nvar _glamorous = __webpack_require__(6);\n\nvar _glamorous2 = _interopRequireDefault(_glamorous);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar Nav = function Nav(_ref) {\n  var children = _ref.children;\n  return _react2.default.createElement(\n    _glamorous.Div,\n    {\n      width: '100%',\n      height: '65px',\n      padding: '0 32px',\n      background: 'white',\n      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 2px -2px'\n    },\n    _react2.default.createElement(\n      _glamorous.Div,\n      {\n        width: '100%',\n        height: '65px',\n        maxWidth: '1040px',\n        padding: '0 20px',\n\n        display: 'flex',\n        justifyContent: 'space-between',\n        alignItems: 'center'\n      },\n      children\n    )\n  );\n};\n\nvar LetterWrapper = _glamorous2.default.div({\n  width: '100%',\n  maxWidth: '700px',\n  padding: '100px 32px 120px',\n  fontFamily: 'medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif',\n  lineHeight: '1.58em',\n  fontSize: '21px',\n  fontWeight: '400',\n  fontStyle: 'normal',\n  '-moz-font-feature-settings': '\"liga\" on',\n  color: 'rgba(0,0,0,0.8)',\n  textRendering: 'optimizelegibility',\n  fontSmooth: 'grayscale'\n});\n\nvar P = function P(_ref2) {\n  var children = _ref2.children,\n      style = _ref2.style,\n      rest = _objectWithoutProperties(_ref2, ['children', 'style']);\n\n  return _react2.default.createElement(\n    'p',\n    {\n      style: _extends({\n        margin: '29px 0 0'\n      }, style),\n      rest: rest\n    },\n    children\n  );\n};\n\nvar A = function A(_ref3) {\n  var children = _ref3.children,\n      rest = _objectWithoutProperties(_ref3, ['children']);\n\n  return _react2.default.createElement(\n    _glamorous2.default.A,\n    _extends({}, rest, {\n      target: '_blank',\n\n      textDecoration: 'none',\n      color: '#2455C3',\n      ':hover': {\n        textDecoration: 'underline'\n      }\n    }),\n    children\n  );\n};\n\nexports.default = function () {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactHeadroom2.default,\n      {\n        style: {\n          height: '65px'\n        },\n        wrapperStyle: {\n          height: '65px'\n        }\n      },\n      _react2.default.createElement(\n        Nav,\n        null,\n        _react2.default.createElement(_glamorous.Img, {\n          src: '/assets/images/logo.svg',\n          height: '20px'\n        }),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            A,\n            {\n              href: 'https://app.ancestorcloud.com/#/login'\n            },\n            'Sign in'\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _glamorous.Div,\n      {\n        display: 'flex',\n        justifyContent: 'center'\n      },\n      _react2.default.createElement(\n        LetterWrapper,\n        null,\n        _react2.default.createElement(\n          P,\n          { style: { marginTop: 0 } },\n          'Hey everyone! We have a big announcement.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          'This year we acquired ',\n          _react2.default.createElement(\n            A,\n            {\n              href: 'https://genealogists.com'\n            },\n            'Genealogists.com'\n          ),\n          '. Genealogists.com provides custom family research services from professional genealogists. This is a great match for our technology and we\\'ll be shifting our focus to adapting the marketplace to power that website.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          'We started AncestorCloud with the goal of connecting families around the world by making family history more accessible. We\\'re excited to tell you that we\\'ll be continuing that mission with Genealogists.com and our new product at ',\n          _react2.default.createElement(\n            A,\n            {\n              href: 'https://trace.com'\n            },\n            'Trace.com'\n          ),\n          ', but we\\'re sad to announce that we\\'ll be closing AncestorCloud.com.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          'Since starting AncestorCloud in 2015, we\\'ve fulfilled countless requests with the help of over 13,000 users. We\\'ve built relationships that span the globe, we\\'ve helped people connect with loved ones, and we\\'ve made lifelong friendships in the process.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          'AncestorCloud.com will no longer be taking requests or new registrations as of July 1st. We\\'ll do our best to complete the existing requests. Existing users will be able to access their information until August 1st.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          'If you\\'re a researcher, you can fill out ',\n          _react2.default.createElement(\n            A,\n            {\n              href: 'https://ancestorcloud.typeform.com/to/HAJQPD'\n            },\n            'this form'\n          ),\n          ' to apply to continue working with us at Genealogists.com. If you need help with family history, we\\'d be happy to have your business at Genealogists.com.  If you have any questions or concerns, please email us at ',\n          _react2.default.createElement(\n            A,\n            {\n              href: 'mailto:hello@ancestorcloud.com'\n            },\n            'hello@ancestorcloud.com'\n          ),\n          '.'\n        ),\n        _react2.default.createElement(\n          P,\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            'Sincerely,'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            'Your friends at AncestorCloud and Genealogists.com'\n          )\n        )\n      )\n    )\n  );\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/App/views/Letter/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/App/views/Letter/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"react-headroom\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"react-headroom\"\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22react-headroom%22?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = require(\"glamorous\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"glamorous\"\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22glamorous%22?");

/***/ }
/******/ ]);