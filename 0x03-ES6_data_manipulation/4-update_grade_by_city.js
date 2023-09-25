// 4-update_grade_by_city.js
function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  }).filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
