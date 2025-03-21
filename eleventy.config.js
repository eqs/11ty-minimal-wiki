const markdownIt = require("markdown-it");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  });
  md.use(require('markdown-it-mathjax3'));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(pluginNavigation);
  return {
    dir: {
      input: "src",
    }
  };
}
