export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new Error('sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newVal) {
    if (typeof (newVal) === 'number') {
      this._sqft = newVal;
    } else {
      throw new Error('sqft must be a number');
    }
  }
}
