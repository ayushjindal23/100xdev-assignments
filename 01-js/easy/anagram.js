/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

let NO_OF_CHARS = 256;


function isAnagram(str1, str2) {
  // Create 2 count arrays and initialize
  // all values as 0
  let count1 = new Array(NO_OF_CHARS);
  let count2 = new Array(NO_OF_CHARS);
  for (let i = 0; i < NO_OF_CHARS; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }

  let i;

  // For each character in input strings,
  // increment count in the corresponding
  // count array
  for (i = 0; i < str1.length && i < str2.length;
    i++) {
    count1[str1[i].charCodeAt(0)]++;
    count2[str1[i].charCodeAt(0)]++;
  }

  // If both strings are of different length.
  // Removing this condition will make the program
  // fail for strings like "aaca" and "aca"
  if (str1.length != str2.length)
    return false;

  // Compare count arrays
  for (i = 0; i < NO_OF_CHARS; i++)
    if (count1[i] != count2[i])
      return false;

  return true;


}

module.exports = isAnagram;
