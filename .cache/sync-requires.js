// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/tusharikasharma/project/demo/Pandas/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/tusharikasharma/project/demo/Pandas/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/tusharikasharma/project/demo/Pandas/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/tusharikasharma/project/demo/Pandas/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/tusharikasharma/project/demo/Pandas/src/pages/my-files.js"))
}

