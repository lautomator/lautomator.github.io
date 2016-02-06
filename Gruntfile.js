module.exports = function(grunt) {

    // tasks
    grunt.initConfig({

        // sass
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    // build : src
                    'css/main.css': 'sass/main.scss'
                }
            }
        },

        // watch for changes
        watch: {
            scripts: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);
};