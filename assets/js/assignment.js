// Q1
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// console.log(Object.getOwnPropertyNames(student));


// Q2
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(student);

// delete student.rollno;
// console.log(student);

// Q3
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// console.log(Object.keys(student));

// Q4
// var library = [{
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }
// ];

// console.log(library);

// Q7
// var string = "dog";
// a = string.substring(-2, 1);
// b = string.substring(0, 2);
// c = string.substring(0, 3);
// d = string.substring(1, 2)
// e = string.substring(1);
// f = string.substring(2, 3);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);



// Q11 dkhna hai

// var classobj = Array;
// console.log(Object.getOwnPropertyNames(classobj).filter(function(x) {
//     return typeof classobj[x] === 'function'
// }));


// Q9
// function circle(radius)
// {
//     this.radius = radius;

//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };

//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));