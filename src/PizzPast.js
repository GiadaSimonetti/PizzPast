class PizzPast {

  constructor(){
    this.dishes = [[3, 'Pizz'], [5, 'Past'], [7, 'Prosecc']];
  }

  mainCourse(int){
    const string = this.dishes.reduce((accumulator, [num, subString]) => {
      if (int % num === 0) {
        return accumulator + subString || accumulator;
      } else {
        return accumulator;
      }
    }, '');
    console.log(string);
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
