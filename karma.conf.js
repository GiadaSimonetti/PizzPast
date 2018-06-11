// Karma configuration
// Generated on Mon Jun 11 2018 16:45:06 GMT+0100 (BST)


module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    reporters: ['spec'],

    files: ['tests/*.js', 'src/*.js']

  });
};
