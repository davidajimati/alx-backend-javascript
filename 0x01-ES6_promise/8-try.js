export default function divideFunction(numerator, denominator) {
  try {
    if (denominator == 0) {
      throw Error
    } else {
      return numerator / denominator;
    }
  } catch {
    throw new Error('cannot divide by 0');
  }
}
