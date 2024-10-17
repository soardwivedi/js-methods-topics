function fizBuzz(array) {
  if (array.length < 1) return;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] % 3 == 0) return 'fizBuzz';
    if (array[i] % 2 == 0) return 'fizz';
    if (array[i] % 3 == 0) return 'buzz';
  }
}
