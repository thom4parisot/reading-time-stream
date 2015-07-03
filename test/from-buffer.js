'use strict';

var readingTime = require('..');
var fromBuffer = require('../lib/from-buffer');
var chai = require('chai');

chai.should();

describe('fromBuffer()', function() {
	it('should return a stats object when given a buffer', function(){
		fromBuffer(new Buffer(0)).should.deep.equal({ spaces: 0, chars: 0, words: 0 });
	});

	it('should count three words', function(){
		fromBuffer(new Buffer("one two three")).should.have.property('words', 3);
	});

	it('should count three words (space before)', function(){
		fromBuffer(new Buffer(" one two three")).should.have.property('words', 3);
	});

	it('should count three words (space after)', function(){
		fromBuffer(new Buffer("one two three ")).should.have.property('words', 3);
	});

	it('should count three words (space around)', function(){
		fromBuffer(new Buffer(" one two three ")).should.have.property('words', 3);
	});
});
