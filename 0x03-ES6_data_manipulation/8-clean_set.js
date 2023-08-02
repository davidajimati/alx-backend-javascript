export default function cleanSet(set, start) {
  return [...set]
    .filter((item) => item.startsWith(start))
    .map((item) => (item ? item.slice(start.length) : ''))
    .join('-');
}
