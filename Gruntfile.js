module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    csslint: {
      strict: {
        options: {
          import: false
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
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /*
            Change these:

            width: ,
            suffix: ,
            quality:
            */

            name: 'small',
            width: 400,
            quality: 100
          },{
            name: 'large',
            width: 800,
            height: 300,
            quality: 100
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  // grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['csslint','clean', 'mkdir', 'copy', 'responsive_images']);

};
