export default function updateStudentGradeByCity(studentList, city, gradeList) {
  const newStudents = studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrade = gradeList.find((gradeItem) => gradeItem.studentId === student.id);
      return {
        ...student,
        grade: updatedGrade ? updatedGrade.grade : 'N/A',
      };
    });
  return newStudents;
}
