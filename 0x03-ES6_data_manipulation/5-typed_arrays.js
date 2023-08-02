export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8 = new Int8Array(buffer);
    int8[position] = value;
    return int8;
  } catch (e) {
    throw Error('Position outside range');
  }
}
