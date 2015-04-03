module.exports = function(grunt) {
	require('load-grunt-tasks');
	
	grunt.initConfig = {
		pkg: require('package.json'),
		
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
		
		sass: {
			
		}
		
	};
};