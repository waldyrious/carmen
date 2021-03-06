// Tests bounds mask generation.

var tape = require('tape');
var Carmen = require('..');
var index = require('../lib/index');
var context = require('../lib/context');
var mem = require('../lib/api-mem');
var queue = require('queue-async');
var addFeature = require('../lib/util/addfeature');

tape('boundsmask', function(assert) {
    var conf = {
        small: new mem({maxzoom:6, geocoder_stack: ['west', 'east']}, function() {}),
        west: new mem({maxzoom:6, geocoder_stack: ['west']}, function() {}),
        east: new mem({maxzoom:6, geocoder_stack: ['east']}, function() {})
    };
    var c = new Carmen(conf);
    assert.deepEqual(conf.small.bmask, [0,0,0], 'small overlaps with all');
    assert.deepEqual(conf.west.bmask, [0,0,1], 'west overlaps with small');
    assert.deepEqual(conf.east.bmask, [0,1,0], 'east overlaps with small');
    assert.end();
});

