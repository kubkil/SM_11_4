'use strict';

function Phone(brand, price, color) { //constructor function, named with capital Letter, executed with 'new' operator - capital letter indicates that is should be run with 'new'
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' PLN.');
}

const iPhone6S = new Phone('Apple', 2250, 'silver');
const SamsungX = new Phone('Samsung', 1500, 'black');
const HuaweiY = new Phone('Huawei', 3000 , 'blue');

iPhone6S.printInfo();
SamsungX.printInfo();
HuaweiY.printInfo();

Phone.prototype.winterSale = function () {
  let date;
  for(date = 0; date <= 31; date++) {
    if(date >= 20 && date < 21) {
      console.log('Winter sale price for ' + this.brand + ', color ' + this.color + ' is ' + this.price * 0.75 + ' PLN.');
    }
  }
}

iPhone6S.winterSale();
SamsungX.winterSale();
HuaweiY.winterSale();