import React from 'react'

const ShuffleArr = (arr) => {
  let currentIndex = arr.length;
	let temporaryValue, randomIndex;

	
	while (0 !== currentIndex) {
	
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}

	return arr;
}
export default ShuffleArr