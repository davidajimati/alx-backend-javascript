export default function createInt8TypedArray(length, position, value) {
  if (typeof (length) !== 'number' || !typeof (position) !== 'number' || typeof (value) !== 'number') {
    throw new Error('NAN');
  }
  const int8 = new Int8Array(new ArrayBuffer(length));
  if (position < int8.length) {
    int8[position] = value;
    return int8;
  }
  throw new Error('Position outside range');
}
