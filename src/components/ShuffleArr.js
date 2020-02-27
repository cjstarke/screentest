import React from 'react'

const ShuffleArr = (array) => {
  let currentIndex = array.length
  let tempValue
  let randomIndex

	
	while (0 !== currentIndex) {
	
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		tempValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = tempValue
	}

	return array
}
export default ShuffleArr