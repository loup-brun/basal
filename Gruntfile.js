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

		// TODO: implement release task
		version: {
			project: {
				src: ['package.json', 'bower.json']
			},

			scss: {
				options: {
					prefix: '@version\\s*'
				},
				src: ['<%= paths.css.src %>*.scss']
			}
		},

		paths: {
			assets: 'assets/',
			source: 'src/',
			distribution: 'dist/',
			css: {
				src: '<%= paths.source %>scss/',
				dist: '<%= paths.distribution %>css/',
				asst: '<%= paths.assets %>css/'
			},
			js: {
				src: '<%= paths.source %>js/',
				dist: '<%= paths.distribution %>js/',
				asst: '<%= paths.assets %>js/'
			}
		},

		concat: {
			options: {
				separator: ';',
				banner: '<%= banner %>'
			},
			main: {
				// concatenate libraries with general.js > main.js
				src: [
					'<%= paths.lib %>ondomready/ondomready.js',

					'<%= paths.js.src %>/custom.js'
				],
				dest: 
				'<%= paths.js.dist %>main.js'
			}
		},

		// minify the sources
		uglify: {
			js: {
				files: [
					{
						'<%= paths.js.dist %>main.min.js': [
							'<%= paths.js.dist %>main.js'
						]
					}
				]
			}
		},

		sass: {
			// compile different stylesheets to be loaded async
			main: {
				files: [{
					expand: true,
					cwd: '<%= paths.css.src %>',
					src: ['*.scss'],
					dest: '<%= paths.css.dist %>',
					ext: '.css'
				}]

			},

			// pass in the options object for sass
			options: {
				style: 'compressed',
				sourcemap: 'file'
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: [
							'<%= paths.js.dist %>*.js'
						],
						dest: '<%= paths.js.asst %>'
					},{
						expand: true,
						flatten: true,
						src: [
							'<%= paths.css.dist %>*'
						],
						dest: '<%= paths.css.asst %>'
					}
				]
			}
		},

		// watch: rebuild parts of site on file change
		watch: {
			sass: {
				files: ['<%= paths.css.src %>**/*.scss'],
				tasks: ['sass']
			},

			js: {
				files: ['<%= paths.js.src %>/*.js'],
				tasks: ['concat', 'uglify']
			}
		}
	};

	// Pass in the big config object to initialize Grunt
	grunt.initConfig(config);

	grunt.registerTask(
		'build',
		'Build the stylesheet and the scripts',
		[
			'sass',
			'concat',
			'uglify',
			'copy'
		]
	);

	grunt.registerTask(
		'default',
		'Run the build task',
		['build']
	);

};