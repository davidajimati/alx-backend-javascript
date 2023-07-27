export default class HolbertonCourse {
  Constructor(name, length, students) {
    if (typeof (name) === 'string') {
      this._name = name;
    }
    if (typeof (length) === 'number') {
      this._length = length;
    }
    if (typeof (students) === 'object') {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
