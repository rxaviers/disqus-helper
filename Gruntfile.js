/* global module */
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      grunt: "Gruntfile.js",
      disqus: "disqus.js",
      demo: "demo/*.js"
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

};
