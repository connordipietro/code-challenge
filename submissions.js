//challenge 1
const findSum = function(array) {
   return array.reduce(function(a,b){
    return a + b;
  }, 0); 
};

//challenge 2
const findFrequency = function(array) {

const result = {};
const counts = {};

array.forEach((item) => {
  if (counts[item]) {
    counts[item]++;
  } else {
    counts[item] = 1
  }
});

let most = 0;
let least = Infinity;

Object.entries(counts).forEach(([letter, count]) => {
  if (count > most) {
    result.most = letter;
    most = count;
  }
  if (count < least) {
    result.least = letter;
    least = count;
  }
});
return result
};


//challenge 3
const isPalindrome = function(str) {
  let array1 = str.split("");
  let array2 = array1.reverse();
  let string1 = array2.join("");
  if (str.toLowerCase() === string1.toLowerCase()) {
  return true;
  } else {
    return false;
  }
};


const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
