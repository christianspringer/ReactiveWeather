// function getTempCallBack(location, callback) {
//     callback(undefined, 78);
//     callback('City Not Found');
// }

// getTempCallBack('Cleveland', function (err, temp) {
//     if (err) {
//         console.log('err', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City Not Found');
//         }, 1000);

//     });
// }

// getTempPromise('location')
//     .then(function (temp) {
//         console.log('success', temp);
//     }, function (err) {
//         console.log('error', err);
//     });

//challenge area

//if (typeof var === 'number')

// function addPromise (a,b){
//     return new Promise(function (resolve, reject){
//         if (typeof a === 'number' && typeof b === 'number'){
//             resolve(a + b);
//         } else {
//             reject('You must enter two numbers');
//         }
//     });
// }

// addPromise(7,44).then( function (sum) {
//     console.log('success',sum);
// }, function (error) {
//     console.log('error',error);
// })

// addPromise(7,'rambo').then( function (sum) {
//     console.log('success',sum);
// }, function (error) {
//     console.log('error',error);
// })

