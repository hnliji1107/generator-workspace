/** 
 * @author 928990115@qq.com
 * @description yeoman generator 搭建基本项目脚手架
 * @date 2015-01-29
 * @update 2015-04-28
 */

'use strict';

var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);
    },
    initializing: function() {
        try {
            this.pkg = JSON.parse(this.read('./package.json', 'utf-8'));
        } catch (e) {
            this.pkg = {};
        }
    },

    prompting: function() {
        var done = this.async();

        var prompts = [{
            type: 'input',
            name: 'name',
            message: 'Project Name:',
            default: 'yeoman-workspace'
        }, {
            type: 'input',
            name: 'description',
            message: 'Project Description:',
            default: 'yeoman generator workspace'
        }, {
            type: 'input',
            name: 'repo',
            message: 'Git Repository:',
            default: 'git@github.com:hnliji1107/generator-workspace.git'
        }, {
            type: 'input',
            name: 'license',
            message: 'License:',
            default: 'MIT'
        }, {
            type: 'input',
            name: 'author',
            message: 'Author:',
            default: 'hnliji1107'
        }, {
            type: 'input',
            name: 'email',
            message: 'Email:',
            default: '928990115@qq.com'
        }];

        this.prompt(prompts, function(answers) {
            this.name = answers.name;
            this.repo = answers.repo;
            this.license = answers.license;
            this.author = answers.author;
            this.email = answers.email;
            this.description = answers.description;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.template('package.json', 'package.json');
            this.template('_.gitignore', '.gitignore');
            this.template('README.md', 'README.md');
            this.template('index.html', 'index.html');
            this.directory('css', 'css');
            this.directory('js', 'js');
            this.mkdir('src/modules');
        }
    },

    install: function() {
        this.installDependencies({
            skipInstall: true
        });
    }
});