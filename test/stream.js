'use strict';

/**
 * Module dependencies.
 */
var readingTime = require('..');
var fromStream = require('../');
var MemoryStream = require('memorystream');
var Transform = require('stream').Transform;
var chai = require('chai');

chai.should();

describe('fromStream()', function() {
	it('should a pipeable analyser', function(){
		fromStream().should.be.an('object').and.have.a.property('_readableState');
	});

	it('should contain a `stats` read-only property', function(){
		fromStream().should.have.property('stats').and.be.a('object');
	});

	it('should count 3 words in 1 chunk', function(done){
		var analyser = fromStream();
		var stream = new MemoryStream('one two three');

		stream
			.pipe(analyser)
			.pipe(new MemoryStream())
			.on('finish', function(){
				analyser.stats.words.should.equal(3);
				analyser.stats.time.should.equal(900);

				done();
			});

		stream.end('');
	});

	it('should count 4 words in 2 chunks', function(done){
		var analyser = fromStream();
		var stream = new MemoryStream(['one two three', 'four']);

		stream
			.pipe(analyser)
			.pipe(new MemoryStream())
			.on('finish', function(){
				analyser.stats.words.should.equal(4);

				done();
			});

		stream.end('');
	});
});
