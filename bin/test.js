#! /Users/marcin.kumorek/.nvm/versions/node/v0.12.0/bin/node

var shell = require('shelljs')
var yargs = require('yargs')

yargs.usage('$0 command')
	.command('bar', 'foo followed up by bar', function() {
		shell.exec('echo foo followed by bar')
	})
	.command('status', 'git status', function() {
		shell.exec('git status')
	})
	.demand(1, 'must provide a valid command')
	.help('h')
	.alias('h', 'help')
	.argv
