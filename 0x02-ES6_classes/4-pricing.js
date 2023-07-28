import Currency from './3-currency';

function checkAmount(amount) {
  return (typeof (amount) === 'number');
}

function checkCurrency(currency) {
  return (typeof (currency) === 'currency');
}

export default class Pricing {
  constructor(amount, currency) {
    if (checkAmount(amount)) {
      this._amount = amount;
    } else {
      throw new Error('amount must be a number');
    }
    if (checkCurrency(currency)) {
      this._currency = currency;
    } else {
      throw new Error('currency must be a currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (checkAmount(newAmount)) {
      this._amount = newAmount;
    } else {
      throw new Error('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (checkCurrency(newCurrency)) {
      this._currency = newCurrency;
    } else {
      throw new Error('currency must be a currency');
    }
  }

  displayFullPrice() {
    return (`${this._amount}(${this._currency})`);
  }
}
