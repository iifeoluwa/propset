'use strict';

function areObjectPropsSet(objectToTest, propsToIgnore){
	
	if (typeof objectToTest === 'object') {

		if (typeof propsToIgnore === 'undefined') {
			return allPropSet(objectToTest);
		}
		else if(typeof propsToIgnore === 'string'){
			if (objectToTest.hasOwnProperty(propsToIgnore)) {
				return somePropSet(objectToTest, propsToIgnore);
			}
			
		}
	}else{
		console.log(err);
	}
}

function allPropSet(objectToTest) {
	let isPropSet = false;

	for (let prop in objectToTest) {
		if (objectToTest[prop] !== null && objectToTest !== undefined) {
			isPropSet = true;
		}else{
			//property is null or undefined. kill execution
			return false;
		}
	}

	//all props are set, carry on
	return isPropSet;
}

function somePropSet(objectToTest, propToIgnore) {
	let isPropSet = false;

	for (let prop in objectToTest) {
		//move on to checking next property if current one is to be ignored
		if (prop === propToIgnore) continue;

		if (objectToTest[prop] !== null && objectToTest !== undefined) {
			isPropSet = true;
		}else{
			//property is null or undefined. kill execution
			return false;
		}
	}

	//all props are set, carry on
	return isPropSet;
}

module.exports = areObjectPropsSet;