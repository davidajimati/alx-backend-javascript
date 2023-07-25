function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  let i = 0;
  for (const idx of array) {
    array2[i] = appendString + idx;
    i += 1;
  }

  return array2;
}

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
