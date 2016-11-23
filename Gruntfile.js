module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  //Configuration
  grunt.initConfig({
    csslint: {
      strict: {
        options: {
          import: 2
        },
      src: ['css/styles.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/styles.css']
      }
    },
    uncss: {
      dist: {
        files: {
          'css/styles.css': ['index.html']
        }
      }
    }
  });

  //Execute task
  grunt.registerTask('default', [
    'csslint',
    'uncss']);
}
