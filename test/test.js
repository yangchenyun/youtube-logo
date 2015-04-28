'use strict';
var assert = require('assert');
var youtubeLogo = require('../').logo;
var youtubeIcon = require('../').icon;

describe('youtube-logo node module', function () {
  it('renders logo ansi art', function () {
    assert(youtubeLogo.length > 0);
    assert(youtubeIcon.length > 0);
  });
});
