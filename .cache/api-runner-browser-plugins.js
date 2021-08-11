module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":""},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590,"loading":"lazy"},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Dev Log","short_name":"Dev Log","description":"Jr. Backend Developer","start_url":"/","background_color":"#fff","theme_color":"#6a737d","theme_color_in_head":false,"lang":"ko-KR","display":"standalone","icon":"src/images/icon.png","legacy":false,"include_favicon":false,"crossOrigin":"use-credentials","cache_busting_mode":"query","cacheDigest":"4b287676c17549d67d4cef802131751c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.ts"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
