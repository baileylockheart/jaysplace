const htmlmin = require("html-minifier-terser");
	
module.exports = function (eleventyConfig) {
    eleventyConfig.addTransform("htmlmin", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          });
          return minified;
        }
        return content;
      });
    // This will stop the default behaviour of foo.html being turned into foo/index.html
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  
    return {
      dir: {
        input: "content",
        output: "public",
      },
    };
  };