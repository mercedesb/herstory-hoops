module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/scripts");
  eleventyConfig.addPassthroughCopy("manifest.json");
  return {
    pathPrefix: process.env.NODE_ENV == "production" ? "/herstory-hoops/" : "",
  };
};
