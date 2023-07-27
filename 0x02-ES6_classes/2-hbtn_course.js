function checkName(name) {
  return (typeof (name) === 'string');
}

function checkLength(length) {
  return (typeof (length) === 'number');
}

function checkStudents(Students) {
  return (typeof (Students) === 'object');
}

export default class HolbertonCourse {
  Constructor(name, length, students) {
    if (checkName(name)) {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (checkLength(length)) {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (checkStudents(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (checkName(name)) {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (checkLength(length)) {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (checkStudents(students)) {
      this._students = students;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
