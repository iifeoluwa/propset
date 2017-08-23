'use strict';

function areObjectPropsSet(objectToTest, propsToIgnore){
		
	if (typeof objectToTest === 'object' && !Array.isArray(objectToTest)) {

		if (typeof propsToIgnore === 'undefined') {
			return allPropSet(objectToTest);
		}else {

			if(typeof propsToIgnore === 'string' || Array.isArray(propsToIgnore)){
				return somePropSet(objectToTest, propsToIgnore);
			}else{
				throw new Error('Object properties to ignore must be a string or array.');
			}
		}
		
	}else{
		throw new Error('Argument passed is not an object.');
	}
}

function allPropSet(objectToTest) {
	let isPropSet = false;

	for (let property in objectToTest) {
		if (objectToTest[property] !== null && objectToTest !== undefined) {
			isPropSet = true;
		}else{
			//property is null or undefined. kill execution
			return false;
		}
	}

	//all props are set, carry on
	return isPropSet;
}

function somePropSet(objectToTest, propsToIgnore) {
	let isPropSet = false;

	for (let property in objectToTest) {
		//move on to checking next property if current one is to be ignored
		if (property === propsToIgnore || propsToIgnore.indexOf(property) !== -1) continue;

		if (objectToTest[property] !== null && objectToTest !== undefined) {
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