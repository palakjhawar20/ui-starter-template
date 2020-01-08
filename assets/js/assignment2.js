// Q2

// Blank = function(input) {
//     if (input.length === 0)
//         return true;
//     else
//         return false;
// }
// console.log(Blank(''));
// console.log(Blank('abc'));

// Q3

// var str = "Robin Singh"
// var array = str.split(" ");

// console.log(array);

// Q4
// truncate_string = function(str1, length) {

//     if ((str1.constructor === String) && (length > 0)) {
//         return str1.slice(0, length);
//     }
// };
// console.log(truncate_string("Robin Singh", 4));

// Q8
// capitalize = function(str1) {
//     return str1.charAt(0).toUpperCase() + str1.slice(1);
// }

// console.log(capitalize('js string exercises'));


// Q1
// var str = "hello";

//  if(typeof str == 'string'){
// document.write(str + " is a string <br/>");
//  }else{
// document.write(str + " is not a string <br/>");
//  }

// Q15
// function humanize(num){
//     if(num%100>=11 && num%100<=13){
//     return num + "th";
//     }
//     else if((num % 10)==1){
//     return num + "st";
//     }
//     else if((num%10)==2){
//     return num + "nd";
//     }
//     else if((num%10)==3){
//     return num + "rd";
//     }
//     else return num +"th";

//     }console.log(humanize(50));


// Q16
// function humanize(num){
//     if(num%100>=11 && num%100<=13){
//     return num + "th";
//     }
//     else if((num % 10)==1){
//     return num + "st";
//     }
//     else if((num%10)==2){
//     return num + "nd";
//     }
//     else if((num%10)==2){
//     return num + "rd";
//     }
//     else return num +"th";

//     }console.log(humanize(50));


// Q47

// var str = 'JS string exercises';
// var n = str.endsWith("exercises");
// console.log(n);


// Q46
// var str = 'JS string exercises';
// var n = str.startsWith("string");
// console.log(n);


// Q44

// function isLowerCaseAt(str, index) {
//     return str.charAt(index).toLowerCase() === str.charAt(index);
// }
// console.log(isLowerCaseAt('Js STRING EXERCISES', 1));

// Q43
// function isUpperCaseAt(str, index) {
//     return str.charAt(index).toUpperCase() === str.charAt(index);
// }
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

// Q37
// function compare_strings(str1, str2) {
//     var areEqual = str1.toUpperCase() === str2.toUpperCase();
//     return areEqual;
// }

// console.log(compare_strings('abcd', 'AbcD'));
// console.log(compare_strings('ABCD', 'Abce'));


// Q39

// function Uncapitalize(str1) {
//     return str1.charAt(0).toLowerCase() + str1.slice(1);
// }
// console.log(Uncapitalize('Js string exercises'));


// Q38
// function case_search(str, search_str) {
//     var result = str.search(new RegExp(search_str, "i"));

//     if (result > 0)
//         return 'Matched';
//     else
//         return 'Not Matched';
// }

// console.log(case_search('JavaScript Exercises', 'exercises'));

// console.log(case_search('JavaScript Exercises', 'Exercises'));

// console.log(case_search('JavaScript Exercises', 'Exercisess'));

// Q25
// function alphabetize_string(str) 
// {

// return str.split('').sort().join('').trim();

// }
// console.log(alphabetize_string('United States'));

// Q24
// function truncate(str, no_words) {
//     return str.split(" ").splice(0,no_words).join(" ");
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));


// Q10
// function switchCase(string){
//     var swap= [];
//     for(var i = 0; i < string.length; i++){
//         if(string != " "){

//             if(string[i] == string[i].toUpperCase()){

//                 swap.push(string[i].toLowerCase());

//             }
//             else{
//                 swap.push(string[i].toUpperCase());
//                 }
//             }
//     }
//     return swap.join("");
//  }

//  console.log(switchCase("i LOVE PiZzA"));


// Q13
//  repeat = function repeat(str, count) {
//     if(typeof(count) == "undefined") {
//     count =1;
//   }
//   return count < 1 ? '' : new Array(count + 1).join(str);
//     }
//  console.log(repeat('Ha!'));


// Q14
//  insert = function insert(main_string, ins_string, pos) {
//    if(typeof(pos) == "undefined") {
//     pos = 0;
//   }
//    if(typeof(ins_string) == "undefined") {
//     ins_string = '';
//   }
//    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
//     }
//  console.log(insert('We are doing some exercises.',"java",5));


// Q22
// function subStrAfterChars(str, char, pos) {
//     if (pos == 'b')
//         return str.substring(str.indexOf(char) + 1);
//     else if (pos == 'a')
//         return str.substring(0, str.indexOf(char));
//     else
//         return str;
// }

// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));

// Q23
// function strip(str) {
//     return str.replace(0, '');
// }

// console.log(strip('w3resource '));


// Q24
// function truncate(str, no_words) {
//    return str.split(" ").splice(0,no_words).join(" ");
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

// Q25
// function alphabetize_string(str)
// {

// return str.split('').sort();

// }
// console.log(alphabetize_string('United States'));
// hogya