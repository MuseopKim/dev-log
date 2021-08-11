var plugins = [{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":""},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Dev Log","short_name":"Dev Log","description":"Jr. Backend Developer","start_url":"/","background_color":"#fff","theme_color":"#6a737d","theme_color_in_head":false,"lang":"ko-KR","display":"standalone","icon":"src/images/icon.png","legacy":false,"include_favicon":false,"crossOrigin":"use-credentials","cache_busting_mode":"query","cacheDigest":"4b287676c17549d67d4cef802131751c"},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography.ts"},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n          site {\n              siteMetadata {\n                  siteUrl\n              }\n          }\n\n          allSitePage {\n            edges {\n              node {\n                path\n                context {\n                  lastmod\n                }\n              }\n            }\n          }\n      }"},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] }, limit: 10\n                ) {\n                  edges {\n                    node {\n                      excerpt(truncate: true, format: PLAIN)\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Dev Log | Feed"}]},
    },{
      plugin: require('/Users/museop/Documents/study/dev-log/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
