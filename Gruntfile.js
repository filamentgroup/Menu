/*global module:true*/
(function(){
	'use strict';

	module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig({
			// Metadata.
			pkg: grunt.file.readJSON('menu.jquery.json'),
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
			// Task configuration.
			clean: {
				files: ['dist']
			},
			concat: {
				options: {
					banner: '<%= banner %>',
					stripBanners: true
				},
				distMenu: {
					src: ['src/<%= pkg.name %>.js'],
					dest: 'dist/<%= pkg.name %>.js'
				},
				distMenuInit: {
					src: ['src/<%= pkg.name %>-init.js'],
					dest: 'dist/<%= pkg.name %>-init.js'
				},
				distMenuTrigger: {
					src: ['src/<%= pkg.name %>-trigger.js'],
					dest: 'dist/<%= pkg.name %>-trigger.js'
				},
				distMenuTriggerInit: {
					src: ['src/<%= pkg.name %>-trigger-init.js'],
					dest: 'dist/<%= pkg.name %>-trigger-init.js'
				},
				distMenuAll: {
					src: ['<%= concat.distMenu.dest %>', '<%= concat.distMenuInit.dest %>', '<%= concat.distMenuTrigger.dest %>','<%= concat.distMenuTriggerInit.dest %>' ],
					dest: 'dist/<%= pkg.name %>-all.js'
				}
			},
			uglify: {
				options: {
					banner: '<%= banner %>'
				},
				distMenu: {
					src: ['<%= concat.distMenu.src %>'],
					dest: 'dist/<%= pkg.name %>.min.js'
				},
				distMenuInit: {
					src: ['<%= concat.distMenuInit.src %>'],
					dest: 'dist/<%= pkg.name %>-init.min.js'
				},
				distMenuTrigger: {
					src: ['<%= concat.distMenuTrigger.src %>'],
					dest: 'dist/<%= pkg.name %>-trigger.min.js'
				},
				distMenuTriggerInit: {
					src: ['<%= concat.distMenuTriggerInit.src %>'],
					dest: 'dist/<%= pkg.name %>-trigger-init.min.js'
				},
				distMenuAll: {
					src: ['<%= concat.distMenuAll.src %>'],
					dest: 'dist/<%= pkg.name %>-all.min.js'
				}
			},
			qunit: {
				files: ['test/**/*.html']
			},
			jshint: {
				gruntfile: {
					options: {
						jshintrc: '.jshintrc'
					},
					src: 'Gruntfile.js'
				},
				src: {
					options: {
						jshintrc: 'src/.jshintrc'
					},
					src: ['src/**/*.js']
				},
				test: {
					options: {
						jshintrc: 'test/.jshintrc'
					},
					src: ['test/**/*.js']
				}
			},
			watch: {
				gruntfile: {
					files: '<%= jshint.gruntfile.src %>',
					tasks: ['jshint:gruntfile']
				},
				src: {
					files: '<%= jshint.src.src %>',
					tasks: ['jshint:src', 'qunit']
				},
				test: {
					files: '<%= jshint.test.src %>',
					tasks: ['jshint:test', 'qunit']
				}
			}
		});

		// These plugins provide necessary tasks.
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-qunit');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-watch');

		// Default task.
		grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);

	};
})();