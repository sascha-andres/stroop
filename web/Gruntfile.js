module.exports = function(grunt) {

    grunt.initConfig({
        app: {
            name: 'bachelor thesis web'
        },
        babel: {
          options: {
            sourceMap: true,
            experimental: true
          },
          dist: {
            files: [ {
                expand: true,
				cwd: 'react',
                src: ['**/*.jsx'],
				dest: 'scripts',
                ext: '.js'
            } ]
          }
        },
        clean: {
            plugins: ['scripts']
        },
        mkdir: {
            'default': {
                options: {
                    create: ['scripts']
                }
            }
        },
        watch: {
          scripts: {
            files: ["react/**/*.jsx"],
            tasks: ["babel"]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-babel');
	
    grunt.registerTask('default', ['babel']);

};
