const findSum = function(array) {
  // your code here - don't forget to return a number!
  // 
};

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

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
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
