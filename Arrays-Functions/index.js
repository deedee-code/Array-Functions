//Question 1: What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

/**
 * The differences between mutating array methods and non-mutation array methods in JavaScript is that:
 * mutating array method is a value whose properties can be changed. The methods include: reverse, push, unshift, slice, pop
 * 
 * non-mutation array method is a value whose properties can't change. The methods include: isArray, find, includes, forEach, filter
 */


//Question 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
console.log(languages)

//Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
console.log(languages)

//Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages)

//Remove the first item in the array
const firstItem = languages.shift();
console.log(languages)

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages)

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages)


//Question 3

let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit))
//The value of the fruits after calling the function changeFruit is: ['apple', 'mango', 'orange']


//Question 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

const maxNum = [20, 15, 10, 25, 53];
let max = maxNum.reduce(function(x,y){
    return(x > y) ? x : y;
})

console.log('Maximum value is ' + max)


//Question 5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array



function valTimesIndex(maxNum) {
	result = maxNum.map((value, index) => value * index );
	return result;
};

console.log(valTimesIndex([4, 3, 2]));