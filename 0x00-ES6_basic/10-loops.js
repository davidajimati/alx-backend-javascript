export default function appendToEachArrayValue(array1, appendString) {
  const array = [];
  let i = 0;
  for (const idx of array1) {
    array[i] = appendString + idx;
    i += 1;
  }

  return array;
}
