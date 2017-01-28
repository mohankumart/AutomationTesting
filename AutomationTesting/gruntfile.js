/*Grunt task runner*/

module.exports = function (grunt) {
	grunt.initConfig({
		  sass: {                              
		    dist: {                            
		      options: {                       
		        style: 'expanded'
		      },
		      files: {                         
		        'static/css/base.css': 'static/sass/base.scss',
		        'static/css/ut_table.css': 'static/sass/ut_table.scss',
		      }
		    }
		  },
		  watch: {
			sass: {
			    files: ['static/sass/base.scss','static/sass/ut_table.scss'],
			    tasks: ['sass'],
			    options: {
			      livereload: true,
			    },
			},
		  }
	});
	
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('watchsass', ['watch']);
};

