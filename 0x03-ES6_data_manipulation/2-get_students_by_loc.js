export default function getStudentsByLocation(input, city) {
  if (!Array.isArray(input)) {
    return [];
  }
  const ret = input.filter((student) => student.location === city);
  return ret;
}
