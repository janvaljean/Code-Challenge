// JS-CC-03 : Merge Arrays
// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.

// Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Write a function that takes two arrays of sorted numbers and combines them into one array as result.

// Please note that, empty arrays to be checked to avoid exception!

// Please take a look at the empty function and test code below:

// Examples :

// //1
// actual = mergeArrays([], [])
// expected = [];

// //2
// actual = mergeArrays([], [7, 8, 9]);
// expected = [7, 8, 9];

// //3
// actual = mergeArrays([12, 14, 16], [11, 13, 17]);
// expected = [11, 12, 13, 14, 16, 17];

// //4
// actual = mergeArrays([22, 24, 26, 28], [21, 27]);
// expected = [21, 22, 24, 26, 27, 28];



const mergeSort = (arr1,arr2) => {
    let merg = arr1.concat(arr2);
    return merg.sort((a,b) => a-b);


}

