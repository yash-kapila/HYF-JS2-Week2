{
  /*
   * Given the students array of objects
   * - group students in two arrays of male and female students
   * - convert marks to numbers
   * - find out average marks of both male and female students
   * - find out average marks of the entire class
   */
  const students = [{
    name: 'Noah',
    gender: 'M',
    marks: "89.25"
  }, {
    name: 'Olivia',
    gender: 'F',
    marks: "93.30"
  }, {
    name: 'Wiliam',
    gender: 'M',
    marks: "84.50"
  }, {
    name: 'Isabella',
    gender: 'F',
    marks: "76.00"
  }, {
    name: 'Jacob',
    gender: 'M',
    marks: "81.75"
  }, {
    name: 'Sofia',
    gender: 'F',
    marks: "94.00"
  }, {
    name: 'David',
    gender: 'M',
    marks: "78.50"
  }, {
    name: 'Grace',
    gender: 'F',
    marks: "85.00"
  }];

  const calculateAverage = students =>
    (
      students
        .reduce((acc, student) => (acc + student.marks), 0) / students.length
    )
    .toFixed(2);

  const filterStudents = (students = [], gender) =>
    students
      .filter(student => student.gender === gender);

  const convertMarksToNumber = students =>
    students.map(student => ({
      ...student,
      marks: parseFloat(student.marks, 10)
    }));

  const classAverage = calculateAverage(convertMarksToNumber(students));
  const maleAverage = calculateAverage(convertMarksToNumber(filterStudents(students, 'M')));
  const femaleAverage = calculateAverage(convertMarksToNumber(filterStudents(students, 'F')));

  console.log(`Classroom average is ${classAverage}`);
  console.log(`Male average is ${maleAverage}`);
  console.log(`Female average is ${femaleAverage}`);
}
