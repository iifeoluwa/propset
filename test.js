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

	it('should return true when property which is not set is passed in second parameter to be skipped', function(done) {
		let userObject = {
			name: 'Name Property',
			email: 'email@props.co',
			password: undefined
		}

		let expected = true;
		
		assert.equal(propset(userObject, 'password'), expected);
		done();
	});

	it('should return true if property which is not set is passed in second parameter as an array to be skipped', function(done) {
		let userObject = {
			name: null,
			email: 'email@props.co',
			password: undefined,
			age: 18
		}

		let expected = true;
		let skip = [password, name, age]
		assert.equal(propset(userObject, skip), expected);
		done();
	});
})