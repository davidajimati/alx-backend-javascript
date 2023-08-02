export default function getStudentIdsSum(input) {
  if (!Array.isArray(input)) {
    return [];
  }
  const sumofIDs = input.reduce((acc, id) => acc + id);
  return sumofIDs;
}
