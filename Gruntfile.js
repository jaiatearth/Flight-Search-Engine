module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      build: {
        options: {
          sourcemap: 'none',
          noCache: true,
          style: 'expanded'
        },
      files: {
        'public/bundles/main.css': 'public/scss/main.scss'
      }
    }
  },

    uglify: {
      options: {
        sourceMap: true
      },
      build: {
        files: {
          'public/bundles/vendor.min.js': ['public/javascripts/3rdparty/*.js'],
          'public/bundles/main.min.js': ['public/javascripts/assistants/*.js']
        }
      }
    },

    watch: {
      scripts: {
        files: ['public/javascripts/assistants/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: 'public/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      handlebars: {
        files: 'views/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
