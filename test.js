const assert = require('assert');
const propset = require('.');

describe('propset', function(){

	it('should return true when all properties of an object are set', function(done) {
		let userObject = {
			name: 'Name Property',
			email: 'email@props.co',
			password: '********'
		}

		let expected = true;

		assert.equal(propset(userObject), expected);
		done();
	});

	it('should return false when any property of an object is not set', function(done) {
		let userObject = {
			name: 'Name Property',
			email: 'email@props.co',
			password: null
		}

		let expected = false;

		assert.equal(propset(userObject), expected);
		done();
	});
})