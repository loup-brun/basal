/* global module, require */
module.exports = function(grunt) {
	require('load-grunt-tasks');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		banner:
		'/**' +
		' * @author <%= pkg.author %> \n' +
		' * @version <%= pkg.version %> \n' +
		' * @description <% pkg.description %> \n' +
		' * @license <% pkg.license %> \n' +
		' */ ',
		
		// TODO: implement release task
		//release: {},

		paths: {
			assets: 'assets/',
			source: '_src',
			css: {
				src: '<%= paths.src %>scss/',
				dist: '<%= paths.assets %>css/'
			},
			js: {
				src: '<%= paths.src %>js/',
				dist: '<%= paths.assets %>js/'
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
					'<%= paths.lib %>',

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
				files: {
					'<%= paths.css.dist %>main.css': '<%= paths.css.src %>main.scss'
				},
			},

			// pass in the options object for sass
			options: {
				style: 'compressed',
				sourcemap: 'true'
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: [
							''
						],
						dest: ''
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
	});
	
	grunt.registerTask(
		'build',
		'Build the stylesheet and the scripts',
		[
			'sass',
			//'concat',
			//'uglify'
		]
	);
	
	grunt.registerTask(
		'default',
		'Run the build task',
		['build']
	);
	
	
};