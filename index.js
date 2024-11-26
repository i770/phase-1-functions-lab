
const headquarters = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquarters);
}
// test/index.test.js

const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

// Require the index.js file to be tested
const { distanceFromHqInBlocks } = require('../index');

// Read the content of index.js
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', function () {
  describe('distanceFromHqInBlocks()', function () {
    it('returns a distance in blocks', function () {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
      expect(distanceFromHqInBlocks(50)).to.equal(8);
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
  });
});


