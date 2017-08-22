'use strict';

function areObjectPropsSet(objectToTest, propsToIgnore){
	
	if (typeof objectToTest === 'object') {

		if (typeof propsToIgnore === 'undefined') {
				return allPropSet(objectToTest);
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

module.exports = areObjectPropsSet;