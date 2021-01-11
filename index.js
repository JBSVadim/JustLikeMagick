function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    let lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  
  this.unshift = function (item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + 1] = this[i];
    }
    this[0] = item;
    return ++this.length;
  };
  
  this.shift = function () {
    let shft = this[0];
    this[0] = 0;
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length];
    --this.length;
    return shft;
  };
  
  this.reverse = function () {
    const copy = Object.assign(new MyArray(), this);

    for (let i = 2; i < this.length; i++) {
      this[i] = copy.pop();
    }

    return this;
  }
        
  
  this.concat = function (arr) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this[i];
    }
    for (let i = 0; i < arr.length; i++) {
      newArr[this.length++] = arr[i];
    }
    return newArr;
  };
  
  this.forEach = function (func) {
    for (let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };
  
  this.map = function (cb) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);
      result.push(cbResult)
    }
    return result;
  };
};


function MyArray() {
  this.length = 0;
  this.isMyArray = function (obj) {
    if (obj.__proto__ === MyArray.prototype) {
      return true;
    } else {
      if (obj.__proto__.__proto__ === MyArray.prototype) {
        return true;
      } else {
        if (obj.__proto__.__proto__.__proto__ === MyArray.prototype) {
          return true;
        }
      }
    }
  };
}


MyArray.prototype = new MyArrayProto();
const myArr = new MyArray();