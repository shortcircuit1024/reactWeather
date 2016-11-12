var names = ['Bob', 'Linda', 'Lisa', 'Johnny'];

// names.forEach(function (name) {
//   console.log('forEach ', name);
// });
//
// names.forEach((name) => {
//   console.log('Arrowfunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Jacob'));

var person = {
  name: 'Jacob',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();
