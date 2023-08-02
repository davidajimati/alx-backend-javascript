export default function getListStudentIds(input) {
  if (!Array.isArray(input)) {
    return [];
  }

  const studentIDs = input.map((student) => student.id);
  return studentIDs;
}
