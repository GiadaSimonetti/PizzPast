describe('PizzPast', () => {

  let pizzPast;

  beforeEach(() => {
    pizzPast = new PizzPast();
  });

  it('returns `Pizz` if the number has a factor of 3', () => {
    expect(pizzPast.mainCourse(3)).toEqual('Pizz');
  });

  it('returns `Past` if the number has a factor of 5', () => {
    expect(pizzPast.mainCourse(5)).toEqual('Past');
  });

  it('returns `Prosecc` if the number has a factor of 7', () => {
    expect(pizzPast.mainCourse(7)).toEqual('Prosecc');
  });

  it('returns `PizzPast` if the number has a factor of 3 and 5', () => {
    expect(pizzPast.mainCourse(15)).toEqual('PizzPast');
  });

  it('returns `PizzProsecc` if the number has a factor of 3 and 7', () => {
    expect(pizzPast.mainCourse(21)).toEqual('PizzProsecc');
  });

  it('returns `PastProsecc` if the number has a factor of 5 and 7', () => {
    expect(pizzPast.mainCourse(35)).toEqual('PastProsecc');
  });

  it('returns the number as a string', () => {
    expect(pizzPast.mainCourse(8)).toEqual('8');
  });

});
