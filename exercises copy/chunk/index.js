// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];
//   let index = 0;

//   while(index < array.length){
//   	chunked.push(array.slice(index, index + size));
//   		index = index + size;

 
//   }
//   return chunked;
// }

function chunk(array,size){
	let chunked = [];
	for(let number of array){
		let inner = chunked[chunked.length - 1];
		if(!inner || inner.length === size){
			chunked.push([number]);
		} else {
			inner.push(number);
		}
	}
	return chunked;
}

module.exports = chunk;
// function chunk(array, size) {
// 	let chResult = [];
// 	for(let char of array) {
// 		let InnerChunk = chResult[chResult.length-1];
// 		if(!InnerChunk || InnerChunk.length === size){
// 			chResult.push([char]);
// 		}else{InnerChunk.push(char)}
// 	}
// 	return chResult;
// }