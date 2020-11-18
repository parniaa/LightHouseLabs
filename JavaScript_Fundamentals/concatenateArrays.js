function merge(inputA, inputB) {
  let a = inputA;
  let b = inputB;
  let c = a.concat(b);
  return c.sort();
}
console.log(merge([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(merge([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(merge([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(merge([ 5, 10 ], []), "=?", [ 5, 10 ]);