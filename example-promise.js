// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack ('Fort Worth', function (err, temp) {
//   if(err){
//     console.log('error:', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise (function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Fort Worth').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof a === 'number' && typeof b === 'number') {
                var sum = a + b;
                resolve(sum);
            } else if (typeof a === 'number' && typeof b !== 'number') {
                reject('B is not a number');
            } else if (typeof a !== 'number' && typeof b === 'number') {
                reject('A is not a number');
            } else {
                reject('A and B are not numbers');
            }
        }, 1000);
    });
}

addPromise(7, 10).then(function(sum) {
    console.log('PASS', sum);
}, function(err) {
    console.log('FAIL', err);
})

addPromise('A', 10).then(function(sum) {
    console.log('PASS', sum);
}, function(err) {
    console.log('FAIL', err);
})

addPromise(7, 'Test').then(function(sum) {
    console.log('PASS', sum);
}, function(err) {
    console.log('FAIL', err);
})

addPromise('A string', 'x').then(function(sum) {
    console.log('PASS', sum);
}, function(err) {
    console.log('FAIL', err);
})
