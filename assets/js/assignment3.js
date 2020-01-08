// Q1

// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//         return true;
//     else
//         return false;
// };
// console.log(is_array('mayank'));
// console.log(is_array([1, 2, 4, 0]));


// Q2

// var array_Clone = function(arr1) {
//     return arr1.slice(0);
// };
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


// Q5

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));


// Q7

// var arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr.sort();
// console.log(arr);

// Q3
// var first = function(array, n) {
//     if (array == null)
//         return void 0;
//     if (n == null)
//         return array[0];
//     if (n < 0)
//         return [];
//     return array.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));


// Q4
// var last =  function(array, n) {
//     if (array == null) 
//       return void 0;
//     if (n == null) 
//        return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));  
//     };

//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2],3));
//   console.log(last([7, 9, 0, -2],6));


// Q10
// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];



// for (var i in a) {
//     console.log("row " + i);
//     for (var j in a[i]) {
//         console.log(" " + a[i][j]);
//     }
// }


// Q11
// function sum_sq(array) {
//     var sum = 0, 
//         i = array.length;
//     while (i--) 
//      sum += Math.pow(array[i], 2);
//     return sum;
//   }

//   console.log(sum_sq([0,1,2,3,4])); 

// Q12

// var array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i += 1) {
//     s += array[i];
//     p *= array[i];
// }
// console.log('Sum : ' + s + ' Product :  ' + p);


// Q40
// function array_range(start, len) {
//     var arr = new Array(len);
//     for (var i = 0; i < len; i++, start++) {
//         arr[i] = start;
//     }
//     return arr;
// }


// console.log(array_range(1, 4));

// console.log(array_range(-6, 4));


// Q39

// function filter_array_values(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
// }

// function isEligible(value) {
//     if (value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// Q38

// function array_filled(n, val)
// {
//     return Array.apply(null, Array(n)).map(String.prototype.valueOf,val);
// }

// console.log(array_filled(3, 'default value'));
// console.log(array_filled(4, 'password'));


// Q37
// function array_filled(n, val)
// {
//     return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
// }

// console.log(array_filled(6, 0));
// console.log(array_filled(4, 11));


// Q36
// function random_item(items) {

//     return items[Math.floor(Math.random() * items.length)]; //Math.random() function to get the random number between(0-1, 1 exclusive).
//                                                             // Multiply it by the array length to get the numbers between(0-arrayLength).
//                                                             // Use Math.floor() to get the index ranging from(0 to arrayLength-1).

// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));


// Q33
// var arr = [1, 3, 6, 3, -5];
// console.log(arr);
// arr.length = 0;
// console.log(arr);

// Q32
// var arr = [2, 5, 9, 6];
// var n = arr.includes(5);
// console.log(n);

// Q31
// function remove_array_element(array, n)
//  {
//    var index = array.indexOf(n);
//    if (index > -1) {
//     array.splice(index, 1);
// }
//    return array;
//  }

// console.log(remove_array_element([2, 5, 9, 6], 5));


// Q30 duplicate remove nhi hue hai
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];

// console.log(array1.concat(array2));


// Q25
// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// function compare_to_sort(x, y) {
//     if (x.title < y.title)
//         return -1;
//     if (x.title > y.title)
//         return 1;
//     return 0;
// }

// console.log(library.sort(compare_to_sort));