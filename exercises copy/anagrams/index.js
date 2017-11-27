// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA,stringB){
	let a = charMap(stringA);
 	let b = charMap(stringB);
 	 return a === b;
}

function charMap(str){
  return str
  .replace(/[^\w]/g,"")
  .toLowerCase().split('')
  .sort()
  .join('');
}


module.exports = anagrams;

// function anagrams(stringA, stringB) {
// 	let mapA = makeCharMap(stringA);
// 	let mapB = makeCharMap(stringB);

// 	let mapA_length = Object.keys(mapA).length;
// 	let mapB_length = Object.keys(mapB).length; 
// 	if (mapA_length !== mapB_length){
// 		return false;
// 	}
// 	for(let char in mapA){
// 		if(mapA[char] !== mapB[char]){
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function makeCharMap(str){
// 	let obj = {};
// 	for(let char of str.replace(/[^\w]/g,'').toLowerCase()){
// 		obj[char] = obj[char] + 1 || 1;
// 	}
// 	return obj;
// }
