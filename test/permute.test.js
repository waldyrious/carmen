var permute = require('../lib/util/permute');
var test = require('tape');

// Convert bitmasks to readable strings that are 0-padded.
function debug(p) {
    var length = p[0].toString(2).length;
    return p.map(function(v) {
        v = v.toString(2);
        return new Array(length-v.length+1).join('0') + v;
    });
}

test('permute.all', function(assert) {
    assert.deepEqual(permute.all(1).length, 1);
    assert.deepEqual(permute.all(2).length, 3);
    assert.deepEqual(permute.all(3).length, 7);
    assert.deepEqual(permute.all(4).length, 15);
    assert.deepEqual(permute.all(5).length, 31);
    assert.deepEqual(permute.all(6).length, 63);
    assert.deepEqual(permute.all(7).length, 127);
    assert.deepEqual(permute.all(8).length, 255);
    assert.deepEqual(permute.all(9).length, 511);
    assert.deepEqual(permute.all(10).length, 1023);
    assert.deepEqual(debug(permute.all(1)), [
        '1'
    ]);
    assert.deepEqual(debug(permute.all(2)), [
        '11',
        '01',
        '10',
    ]);
    assert.deepEqual(debug(permute.all(3)), [
        '111',
        '011',
        '101',
        '110',
        '001',
        '010',
        '100',
    ]);
    assert.deepEqual(debug(permute.all(4)), [
        '1111',
        '0111',
        '1011',
        '1101',
        '1110',
        '0011',
        '0101',
        '0110',
        '1001',
        '1010',
        '1100',
        '0001',
        '0010',
        '0100',
        '1000',
    ]);
    assert.end();
});

test('permute.continuous', function(assert) {
    assert.deepEqual(debug(permute.continuous(1)), [
        '1'
    ]);
    assert.deepEqual(debug(permute.continuous(2)), [
        '11',
        '01',
        '10',
    ]);
    assert.deepEqual(debug(permute.continuous(3)), [
        '111',
        '011',
        '110',
        '001',
        '010',
        '100',
    ]);
    assert.deepEqual(debug(permute.continuous(4)), [
        '1111',
        '0111',
        '1110',
        '0011',
        '0110',
        '1100',
        '0001',
        '0010',
        '0100',
        '1000',
    ]);
    assert.end();
});

