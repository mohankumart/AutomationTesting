/*Grunt task runner*/

module.exports = function (grunt) {
	grunt.initConfig({
		  sass: {                              
		    dist: {                            
		      options: {                       
		        style: 'compressed'
		      },
		      files: {                         
		        'static/css/base.min.css': 'static/sass/base.scss'
		      }
		    }
		  },
		  watch: {
			sass: {
			    files: ['static/sass/base.scss'],
			    tasks: ['sass'],
			    options: {
			      livereload: true,
			    },
			},
		  },
		  uglify: {
		    options: {
		    	sourceMap: true,
		    	mangle: false
		    },
		    my_target: {
		      files: {
		        'static/js/app.min.js': ['static/js/utconfig.js','static/js/utmodel.js','static/js/controllers.js','static/js/directives.js','static/js/filters.js','static/js/services.js','static/js/templates.js','static/js/pieChart.js']
		      }
		    }
		  }
	});
	
    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    
    grunt.registerTask('default', ['sass','uglify']);
    grunt.registerTask('watchsass', ['watch']);
};

