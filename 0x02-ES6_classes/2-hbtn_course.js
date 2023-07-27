function checkName(newName) {
  return (typeof (newName) === 'string');
}

function checkLength(newLength) {
  return (typeof (newLength) === 'number');
}

function checkStudents(newStudents) {
  return (typeof (newStudents) === 'object');
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

  set name(newName) {
    if (checkName(newName)) {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (checkLength(newLength)) {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (checkStudents(newStudents)) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array');
    }
  }
}
