class PizzPast {

  constructor(){
    this.dishes = [[3, 'Pizz'], [5, 'Past'], [7, 'Prosecc']];
  }

  mainCourse(int){
    const string = this.dishes.reduce((accumulator, [num, subString]) => {
      return (int % num === 0) ? accumulator + subString : accumulator;
    }, '');
    return string || int.toString();
  }
}

// class Array {
//   var items = []; // ?
//
//   function reduce(f, initial) {
//       var acc = initial;// ?
//       for (var i = 0; i < items.length; i++) {
//         acc = f(items[i], acc);
//       }
//       return acc
//   }
// }
