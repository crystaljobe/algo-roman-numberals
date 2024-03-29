/* Lazy Roman Numerals is where Roman Numerals are added together (9 is VIIII, 4 is IIII).
Roman Numerals with Arabic Numeral counterpart:
*/

/* 1. Write a function toRomanLazy that takes in a single input, num(an arabic number).

2. Create a variable output and set it's initial value to the empty string ("")

3. Create a variable romanNumeralToArabic that holds an object mapping the key of a roman numeral (V) to it's arabic equivalent (5)

4. Create a variable romanNumeralPriorityOrder that holds an array with the roman numerals in descending order (['M', 'D', 'C' ...])

5. Iterate through romanNumeralPriorityOrder

6. Use division and Math.floor to find out how many times a given num can be divided by the arabic equivalent of the current romanNumeral being iterated through. Append this many of the given romanNumeral to the output

7. Subtract num by that number so only the remaining portion that couldn't be divided is left.

8. Continue iterating until num === 0

9. return output */

const romanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
} 

function toRomanLazy(num) {
  let anser = "";
  // iterate through values in obj and compare to num
  for (rKey of Object.keys(romanNumerals)) {
    const rValue = romanNumerals[rKey];
    // if value is greateer than or equal 
    if (num >= rValue) {
      answer += rKey.repeat(Math.floor(num / rValue));
      num = num % rValue;
    }
  }
  return ""
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
