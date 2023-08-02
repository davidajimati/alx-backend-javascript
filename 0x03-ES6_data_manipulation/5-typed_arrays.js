export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (position < int8.length) {
    int8[position] = value;
    return int8;
  }
  throw new Error('Position outside range');
}
