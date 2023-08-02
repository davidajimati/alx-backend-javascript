export default function updateUniqueItems(input) {
  if (!(input instanceof Map)) throw Error('Cannot process');
  for (const [item, quantity] of input.entries()) {
    if (quantity === 1) input.set(item, 100);
  }
}
