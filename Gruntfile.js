module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      dist: {
        src: ['css/base.css', 'css/cover.css', 'css/footer.css', 'css/header.css', 'css/project.css'],
        dest: 'css/style.css'
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
      files: ['css/*.css'],
      tasks: ['concat', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'cssmin']);

};