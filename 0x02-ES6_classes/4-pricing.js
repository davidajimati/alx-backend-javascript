import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new Error('amount must be a number');
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('currency must be a currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) === 'number') {
      this._amount = newAmount;
    } else {
      throw new Error('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new Error('currency must be a currency');
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) != 'number' || typeof (conversionRate) != 'number') {
      throw new Error("Must be a number");
    } else {
      return (amount * conversionRate);
    }
  }
}
