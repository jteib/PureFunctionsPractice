`
What is a pure function?

* Given the same input, will always return the same output.
* Produces no side effects.
* Relies on no external state.

Pure functions map between arguments and return values.

Fork this pen and turn the impure functions into pure
functions.

Make all the unit tests pass without changing the tests.
`

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => Object.assign({}, item, { price });

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  newCart = cart.slice();
  newCart.push(item);
  return newCart;
};

test('setPrice()', assert => {
  const msg = 'setPrice() should set the price in the given item object.';
  const immutable = 'original should not be mutated';

  const item = {
    name: 'test',
    price: 30
  };
  const copy = Object.assign({}, item);

  const actual = setPrice(copy, 50);
  const expected = {
    name: 'test',
    price: 50
  };

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(item, copy, immutable);
  assert.end();
});

test('addToCart()', assert => {
  const msg = 'should add item to cart';
  const immutable = 'original should not be mutated';

  const originalCart = [];
  const item = {
    name: 'Violator',
    price: 30
  };
  const copy = originalCart.slice();
  
  const actual = addToCart(copy, item);
  const expected = [item];

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(originalCart, copy, immutable);
  assert.end();
});
