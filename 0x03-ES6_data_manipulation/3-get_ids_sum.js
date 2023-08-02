export default function getStudentIdsSum(input) {
  if (!Array.isArray(input)) {
    return [];
  }
  const sumofIDs = input.reduce((acc, curr) => acc + curr.id, 0);
  return sumofIDs;
}
