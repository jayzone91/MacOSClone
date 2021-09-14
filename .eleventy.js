module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets/images')
    eleventyConfig.addPassthroughCopy('./src/assets/fonts')
    eleventyConfig.addPassthroughCopy('./src/assets/js')
    eleventyConfig.addWatchTarget('public/assets/css/*.css')
    eleventyConfig.setBrowserSyncConfig({
        files: ['puclic/assets/css/*.css']
    })
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
