'use strict';
var path = require('path');
var fs = require('fs');
var supportsColor = require('supports-color');

module.exports.logo = supportsColor && process.platform !== 'win32' ?
	fs.readFileSync(path.join(__dirname, 'youtube-logo.txt'), 'utf8') : '';

module.exports.icon = supportsColor && process.platform !== 'win32' ?
	fs.readFileSync(path.join(__dirname, 'youtube-icon.txt'), 'utf8') : '';
