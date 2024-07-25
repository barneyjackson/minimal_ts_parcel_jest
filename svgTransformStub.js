// Jest doesn't play nicely with SVGs, the generally recommendation is to stub/mock them out
// Who needs to unit test their SVGs anyway...
// This simple files means we don't need to add another dependency on an external package like jest-svg-transformer
// See https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
module.exports = {
    process() {
      return {
        code: `module.exports = {};`,
      };
    },
    getCacheKey() {
      // The output is always the same.
      return "svgTransform";
    },
  };