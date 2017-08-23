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
		let skip = ['password', 'name', 'age']
		assert.equal(propset(userObject, skip), expected);
		done();
	});

	it('should throw an error if argument passed to be tested is not an object', function(done) {
		let userDetailsArray = ['password', 'name', 'age'];
		let userId = 1;
		let userName = 'Name Property';

		
		assert.throws(() => propset(userDetailsArray), /not an object/);
		assert.throws(() => propset(userName), Error);
		assert.throws(() => propset(userId), /not an object/);
		assert.throws(() => propset(userDetailsArray), Error);		

		done();
	});

	it('should throw an error if argument passed as property(ies) to be ignored is not a string or an array', function(done) {
		let userObject = {
			name: null,
			email: 'email@props.co',
			password: undefined,
			age: 18
		}

		let propToBeIgnored = 1;
		let anotherPropToBeIgnored = {user: 'name', type: 'lib'};
		
		assert.throws(() => propset(userObject, propToBeIgnored), /must be a string or array/);
		assert.throws(() => propset(userObject, anotherPropToBeIgnored), Error);
		
		done();
	});
})