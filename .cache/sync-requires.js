const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/src/pages/index.tsx"))),
  "component---src-pages-search-tsx": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/src/pages/search.tsx"))),
  "component---src-pages-tags-tsx": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/src/pages/tags.tsx"))),
  "component---src-templates-post-tsx": hot(preferDefault(require("/Users/museop/Documents/study/dev-log/src/templates/Post.tsx")))
}

