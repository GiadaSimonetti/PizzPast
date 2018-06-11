class PizzPast {

  mainCourse(int){
    let string = '';
    if (int % 3 === 0) string += 'Pizz';
    if (int % 5 === 0) string += 'Past';
    if (int % 7 === 0) string += 'Prosecc';

    return string || int;
  }
}
