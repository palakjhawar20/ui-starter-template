// Q2

// function print_current_page() {
//     window.print();
// }


//Q4
// var s1 = 5;
// var s2 = 6;
// var s3 = 7;
// var s = (s1 + s2 + s3) / 2;
// var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
// console.log(area);


// Q6
// function leapyear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2019));
// console.log(leapyear(2020));
// console.log(leapyear(1700));
// console.log(leapyear(1800));




// Q10
// function multiplyBy() {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() {
//     num1 = document.getElementById("firstNumber").value;
//     num2 = document.getElementById("secondNumber").value;
//     document.getElementById("result").innerHTML = num1 / num2;
// }


// Q12
// console.log(document.URL);


// Q13

// var name = "palak";
// var a = 97;
// this[name] = a;
// console.log(this[name]);

// Q14

// filename = "question.html"
// console.log(filename.split('.').pop());
// filename = "question.js"
// console.log(filename.split('.').pop());

// Q15
// function difference(n) {
//     if (n <= 13) {
//         return 13 - n;
//     } else {
//         return (n - 13) * 2;
//     }
// }
// console.log(difference(25));
// console.log(difference(10));


// Q16
// function sum(x, y) {
//     if (x == y) {
//         return 3 * (x + y);
//     } else {
//         return (x + y);
//     }
// }
// console.log(sum(10, 20));
// console.log(sum(10, 10));

// Q17

// function absolute(x) {
//     if (x > 19) {
//         return 3 * (x - 19);
//     } else {
//         return 19 - x;
//     }
// }
// console.log(absolute(20));
// console.log(absolute(15));

// Q18

// function two(x, y) {
//     return ((x == 50 || y == 50) || (x + y == 50));
// }
// console.log(two(50, 50));
// console.log(two(20, 20));
// console.log(two(20, 30));

// Q19
// function testhundred(x) {
//     return ((Math.abs(100 - x) <= 20) ||
//         (Math.abs(400 - x) <= 20));
// }

// console.log(testhundred(10));
// console.log(testhundred(90));
// console.log(testhundred(99));
// console.log(testhundred(199));
// console.log(testhundred(200));

// Q20

// function integer(x, y) {
//     if ((x < 0 && y > 0) || x > 0 && y < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(integer(2, 2));
// console.log(integer(-2, 2));
// console.log(integer(2, -2));
// console.log(integer(-2, -2));

// Q25
// function mul(x) {
//     if (x % 3 == 0 || x % 7 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(mul(10));
// console.log(mul(14));
// console.log(mul(15));


// Q31
// function three(x, y, z) {
//     if (x > y && x > z) {
//         return x;
//     }
//     if (y > x && y > z) {
//         return y;
//     }
//     if (z > x && z > y) {
//         return z;
//     }
// }

// console.log(three(10, 5, 4));
// console.log(three(3, 8, 4));
// console.log(three(3, 6, 9));

// Q40
// function check(x, y) {
//     if (x == 8 || y == 8) {
//         return true;
//     }

//     if (x + y == 8 || (x - y) == 8) {
//         return true;
//     }

//     return false;
// }

// console.log(check(7, 8));
// console.log(check(16, 8));
// console.log(check(24, 32));
// console.log(check(17, 18));


// Q45

// function test15(x, y) {
//     return ((x == 15 || y == 15) || (x + y == 15 || x - y == 15));
// }
// console.log(test15(15, 15));
// console.log(test15(20, 15));
// console.log(test15(29, 20));
// console.log(test15(10, 5));

// Q46

// function valCheck (a, b) {
//     if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
//     return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
//     }
//     else
//     return false;
//     }
//     console.log(valCheck(14, 21));
//     console.log(valCheck(14, 20));
//     console.log(valCheck(16, 20));


// Q27
// function start(str) {
//     if (str.length < 4) {
//         return false;
//     }
//     front = str.substring(0, 4);
//     if (front == 'Java') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(start("JavaScript"));
// console.log(start("Java"));
// console.log(start("Python"));

// Q28

// function number(x, y) {
//     if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(number(130, 50));
// console.log(number(52, 80));
// console.log(number(40, 100));



// Q29

// function number(x, y, z) {
//     if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(number(130, 50, 110));
// console.log(number(52, 80, 60));
// console.log(number(40, 100, 105));

// Q33
// function number(x, y) {
//     if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
//         (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(number(50, 67));
// console.log(number(60, 96));
// console.log(number(70, 95));

// Q39

// function add(x, y) {
//     var add = x + y;
//     if (add >= 50 && add <= 80) {
//         return 65;
//     }
//     return 80;
// }

// console.log(add(50, 20));
// console.log(add(100, 40));

// Q40
// function eight(x, y) {
//     if ((x == 8 || y == 8) || (x + y == 8 || x - y == 8)) {

//         return true;


//     } else {

//         return false;
//     }

// }
// console.log(eight(8, 4));
// console.log(eight(4, 4));
// console.log(eight(5, 4));

// Q41

// function three_numbers(x, y, z) {
//     if (x == y && y == z) {
//         return 30;
//     }

//     if (x == y || y == z || z == x) {
//         return 40;
//     }

//     return 20;
// }
// console.log(three_numbers(8, 8, 8));
// console.log(three_numbers(8, 8, 18));
// console.log(three_numbers(8, 7, 18));

// Q39

// function sum_add(x, y) {
//     var sum = x + y;
//     if (sum >= 50 && sum <= 80) {
//         return 65;
//     }
//     return 80;
// }

// console.log(sum_add(40, 15));
// console.log(sum_add(70, 100));

// Q44
// function lessby20_others(x, y, z) {
//     return (x >= 20 && (x < y || x < z)) ||
//         (y >= 20 && (y < x || y < z)) ||
//         (z >= 20 && (z < y || z < x));
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

// Q47
// function test_digit(x, y, n) 
//   {    
//     if (n < 40 || n > 10000)
//       return false;
//     else
//       if (n >= x && n <= y)
//         return true;
//       else
//         return false;
//   }
// console.log(test_digit(40, 4000, 45));  
// console.log(test_digit(80, 320, 79));  
// console.log(test_digit(89, 4000, 30));


// Q48

// function string_reverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(string_reverse("palak"));
// console.log(string_reverse("pooja"));

// Q61

// function concatenate(str1, str2) {
//     str1 = str1.substring(1, str1.length);
//     str2 = str2.substring(1, str2.length);
//     return str1 + str2;
//   }

//   console.log(concatenate("PHP","JS"));
//   console.log(concatenate("A","B"));
//   console.log(concatenate("AA","BB"));

// Q24
// function front_back(str) {
//     first = str.substring(0, 1);
//     return first + str + first;
// }
// console.log(front_back('a'));
// console.log(front_back('ab'));
// console.log(front_back('abc'));

// Q34
// function max(x, y){	
//     if( (x >= 40) && (x <= 60) && (y >= 40 && y <= 60) ){
//     if(x === y){
//     return "Numbers are the same";
//     }else if (x > y){
//     return x;
//     }else{
//     return y;
//     }
//     }else{
//     return "Numbers don't fit in range";
//     }
//     }

//     console.log(max(45, 60));
//     console.log(max(25, 60));
//     console.log(max(45, 80));

// Q69
// function sum_three(nums)
// {
//   return nums[0] + nums[1] + nums[2];
// }

// console.log(sum_three([10, 32, 20]));  
// console.log(sum_three([5, 7, 9])); 
// console.log(sum_three([0, 8, -11]));

// Q70
// function rotate(array) {
//     return [array[1], array[2], array[0]];
// }
// console.log(rotate([3, 4, 5]));
// console.log(rotate([0, -1, 2]));
// console.log(rotate([7, 6, 5]));


// Q73
// var arr = [34, 234, 567, 4];
// print(arr);
// var new_arr = arr.reverse();
// console.log(new_arr);