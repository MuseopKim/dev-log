// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../../../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-search-tsx": () => import("./../../../src/pages/search.tsx" /* webpackChunkName: "component---src-pages-search-tsx" */),
  "component---src-pages-tags-tsx": () => import("./../../../src/pages/tags.tsx" /* webpackChunkName: "component---src-pages-tags-tsx" */),
  "component---src-templates-post-tsx": () => import("./../../../src/templates/Post.tsx" /* webpackChunkName: "component---src-templates-post-tsx" */)
}

