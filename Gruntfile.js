module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Grunt big config object with tasks options
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    banner:
    '/** \n' +
    ' * @authors <%= pkg.authors %> \n' +
    ' * @version <%= pkg.version %> \n' +
    ' * @description <%= pkg.description %> \n' +
    ' * @license <%= pkg.license %> \n' +
    ' */ ',
    paths: {
      src: 'src',
      dist: 'dist'
    },
    uglify: {
      js: {
        files: [
          {
            expand: true,
            cwd: '<%= paths.dist %>/scripts',
            src: ['*.js'],
            dest: '<%= paths.dist %>/scripts/'
          }
        ]
      }
    },
    sass: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= paths.src %>/styles/scss',
          src: ['*.scss'],
          dest: '<%= paths.src %>/styles',
          ext: '.css'
        }]
      },
      options: {
        outputStyle: 'expanded',
        sourcemap: false
      }
    },
    postcss: {
      options: {
        processors: [ require('autoprefixer')({browsers: 'last 2 versions'}) ],
      },
      main: {
        src: '<%= paths.src %>/styles/*.css'
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '<%= paths.src %>/styles',
          src: ['*.css'],
          dest: '<%= paths.dist %>/styles',
          ext: '.css'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= paths.dist %>',
          src: ['{,*/}*.html'],
          dest: '<%= paths.dist %>'
        }]
      }
    },
    clean: {
      dist: ['<%= paths.dist %>']
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= paths.src %>',
            src: [
              '.htaccess',
              'index.html',
              'scripts/*.js'
            ],
            dest: '<%= paths.dist %>'
          }
        ]
      }
    },
    watch: {
      sass: {
        files: ['<%= paths.src %>/styles/scss/*.scss', '<%= paths.src %>/styles/scss/partials/{,*/}*.scss'],
        tasks: ['sass', 'postcss']
      }
    }
  };

  // Pass in the big config object to initialize Grunt
  grunt.initConfig(config);

  grunt.registerTask(
    'build',
    'Build the stylesheet and the script',
    [
      'clean:dist',
      'sass',
      'postcss',
      'cssmin',
      'copy:dist',
      'uglify',
      'htmlmin'
    ]
  );
  grunt.registerTask(
    'dev',
    'Build the files and watch for changes',
    [
      'sass',
      'postcss',
      'watch'
    ]
  );
  grunt.registerTask(
    'default',
    'Run the build task',
    [ 'build' ]
  );

};