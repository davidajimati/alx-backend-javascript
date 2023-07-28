function checkCode(code) {
  return (typeof (code) === 'string');
}

function checkName(name) {
  return (typeof (name) === 'string');
}

export default class Currency {
  constructor(code, name) {
    if (checkCode(code)) {
      this._code = code;
    } else {
      throw new Error('code must be a string');
    }
    if (checkName(name)) {
      this._name = name;
    } else {
      throw new Error('name must be a number');
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (checkCode(code)) {
      this._code = code;
    } else {
      throw new Error('code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (checkName(name)) {
      this._name = name;
    } else {
      throw new Error('name must be a string');
    }
  }

  displayFullCurrency() {
    return (`${this._name}(${this._code})`);
  }
}

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
