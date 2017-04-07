var names = ['Christian','Josh','Kathryn'];

// names.forEach(function (name) {
//     console.log('foreach: ', name)
// })

// names.forEach((name) => {
//     console.log('arrow: ' + name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name)=> name + '!!!!';

// console.log(returnMe('Christian'));

// var person ={
//     name: 'Svetlana',
//     greet: function (){
//         names.forEach( (name)=> {
//             console.log(this.name + ' says hi to ' +name)
//         });
//     }
// };

// person.greet();
// function add (a,b){
//     return a + b;
// }

// var addStatement = (a,b) => {
//     return a+b;
// }
// console.log(addStatement(4,7));

//console.log(add(1,2));

var addExpression = (a,b) => a+b;
console.log(addExpression(1,2));