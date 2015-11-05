/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x, y) {
  'use strict';
  if (x > y) {
    return x;
  }

  return y;
}

// ---------------------
// Define a function maxOfAll() that takes any number of arguments and returns the largest of them.
// ---------------------

function maxOfAll() {
  'use strict';

  Array.from(arguments).reduce(max);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
  'use strict';

  var vowels = ['a', 'e', 'i', 'o', 'u', 'é', 'í'];

  // indexOf returns -1 when outside of the array
  return vowels.indexOf(char) > -1;
}

console.assert(isVowel('x') === false);
console.assert(isVowel('u') === true);

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase) {
  'use strict';
  var charArray = phrase.split('');

  function translateChar(item) {
    if (isVowel(item) || item === ' ') {
      return item;
    }

    return item + 'o' + item;
  };

  return charArray.map(translateChar).join('');
}

console.assert(translate('it') === 'itot');

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers) {
  'use strict';

  return numbers.reduce((total, item) => {
    return total + item;
  });
}

sum([1, 2, 3, 4]);

function multiply(numbers) {
  'use strict';

  return numbers.reduce((total, item) => {
    return total * item;
  });
}

// ---------------------
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
  'use strict';
  //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
  'use strict';
  //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
  'use strict';
  //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
  'use strict';
  //...
}
