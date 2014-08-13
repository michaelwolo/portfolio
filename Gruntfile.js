var livereloadPort = 35729;

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css':'sass/style.scss'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css',
        src: ['style.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    watch: {
      sass: {
        files: ['sass/style.scss'],
        tasks: ['sass']
      },
      cssmin: {
        files: ['css/*.css', '!css/*.min.css'],
        tasks: ['cssmin'],
        options: {
          livereload: livereloadPort
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 3000,
          livereload: livereloadPort
        }
      }
    },
    open: {
      index: {
        path: 'http://0.0.0.0:3000'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');

  // Default task
  grunt.registerTask('default', ['sass', 'cssmin', 'connect', 'open', 'watch']);

};