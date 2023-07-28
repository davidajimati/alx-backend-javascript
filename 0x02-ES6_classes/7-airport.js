export default class Airport {
  constructor(name, code) {
    if (typeof (name) != 'string' || typeof (code) != 'string') {
      throw new Error('Arguments must be a number');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}pu
