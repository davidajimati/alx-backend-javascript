export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  let array1 = [];
  for (var idx of array) {
    // var value = array[idx];
    array1[i] = appendString + idx;
    i += 1;
  }

  return array1;
}
