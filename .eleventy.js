module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["md", "html", "css"]);

    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("src/img");

    // Copy `css/fonts/` to `_site/css/fonts`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    eleventyConfig.addPassthroughCopy("css/fonts");

    // Do not use .gitignore with eleventy
    eleventyConfig.setUseGitIgnore(false);
};
