module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
       options: {
         separator: ' ',
                },
         dist:  {
               src: ['js/*.js', 'js/**/*.js', 'js/**/**/*.js'],
               dest: 'dist/main.js',
                },
         },
     uglify: {
      myfile1: {
        files: [
                {src:['dist/main.js'],dest:'main.min.js'},
               ],
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: true,
                roundingPrecision: -1
            },
            minify: {
                files: [{
                    'style.min.css': ['style/*.css']

                }]
            }
        },
    browserSync: {
        bsFiles: {
            src : [
                     'js/*.js',
                     'js/**/*.js',
                     'js/**/**/*.js',
                     'main.min.js',
                     'style.min.css',
                     'view/*.html',
                     'view/**/*.html',
                     'style/*.css',
                     'Index.html',
                ]
            },
            options: {
                server: {
                  watchTask: true,
                  basDir: './'
                }
            }
        },
    watch: {
        scripts: {
            files: ['js/*.js', 'js/**/*js','js/**/**/*.js'],
            tasks: ['concat', 'uglify']
          },
          cssmin: {
                files: ['style/*.css'],
                tasks: ['cssmin:minify'],
                options: {
                    debounceDelay: 250,
                    spawn: false
                }
            },

  }
 });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-browser-sync');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.registerTask('default', ['concat', 'cssmin','uglify','watch']);
   grunt.registerTask('server', ['browserSync','watch']);

   // Default task(s).
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);
    // Default task(s).
    grunt.registerTask('server', ['browserSync', 'watch']);
};
