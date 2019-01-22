module.exports = function(grunt) {

    /* load the grunt tasks */
    grunt.loadNpmTasks('grunt-dustjs-linkedin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.dust'],
                tasks: ['dust'],
                options: {
                    spawn: false,
                }
            }
        },
        dust: {
            options: {
                name: function(data, options) {
                    var fqn = data['file']['dest'];
                    var baseName = fqn.substr(fqn.lastIndexOf('/')).replace(/\//g, '').replace(/\.js/g, '');
                    return baseName;
                },
                wrapper: "amd",
                dependencies: {
                    dust: "dust"
                }
            },
            build: {
                expand: true,
                cwd: "./src/client/templates/dustjs/",
                src: "**/*.dust",
                dest: "./src/client/js/templates/compiled/",
                ext: ".js"
            }
        }
    });
    grunt.registerTask("dev", ["dust"]);
    grunt.registerTask("watcher", ["watch"]);};
