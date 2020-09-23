class VendingItem {
  constructor(name, cost, stock, img) {
    this.name = name;
    this.cost = cost;
    this.stock = stock;
    this.img = img;
  }

  render() {
    return `
      <img class"vending__img" src="${this.img}">
      <p class=""vending__info>${this.name}: $${this.cost} <br/>quantity: ${this.stock}</p>`;
  }
  vend() {
    if (this.stock >= 2) {
      this.stock--;
    } else {
      this.stock = "sold out";
    }
  }
}

let firstCandy = new VendingItem("snickers", 1.5, 6, "media/product_1.svg");
let secondCandy = new VendingItem(
  "3 muskateers",
  1.5,
  4,
  "media/product_2.svg"
);
let firstChips = new VendingItem("lays", 0.75, 10, "media/product_3.svg");

console.log(firstCandy);

let firstItem = document.getElementById("firstItem");
firstItem.innerHTML = firstCandy.render();

let secondItem = document.getElementById("secondItem");
secondItem.innerHTML = secondCandy.render();

let thirdItem = document.getElementById("thirdItem");
thirdItem.innerHTML = firstChips.render();

function vendFirstItem() {
  firstCandy.vend();
  firstItem.innerHTML = firstCandy.render();
}

function vendSecondItem() {
  secondCandy.vend();
  secondItem.innerHTML = secondCandy.render();
}

function vendThirdItem() {
  firstChips.vend();
  thirdItem.innerHTML = firstChips.render();
}
