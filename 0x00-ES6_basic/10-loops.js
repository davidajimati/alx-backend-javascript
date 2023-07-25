export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const array1 = [];
  for (const idx of array) {
    array1[i] = appendString + idx;
    i += 1;
  }

  return array1;
}
