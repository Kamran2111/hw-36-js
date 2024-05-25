// ЗАДАНИЕ: 2
export class InsertMethod {
  index;
  sign;
  constructor(index, sign) {
    this.index = index;
    this.sign = sign;
  }

  insert(index, sign) {
    if (index < 0) {
      return sign + this.index;
    } else if (index > this.length) {
      return this + sign;
    } else {
      return this.slice(0, index) + sign + this.slice(index);
    }
  }
}
