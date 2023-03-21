class FoodItem {
  constructor() {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemImage = itemImage;
    this.itemInfo = itemInfo;
    this.isVeg = isVeg;
    this.itemCartCount = itemCartCount;
    this.itemCategoryId = itemCategoryId;
    this.itemCategoryName = itemCategoryName;
  }
  getId = () => {
    return this.itemId;
  };
  getName = () => {
    return this.itemName;
  };
  getPrice = () => {
    return this.itemPrice;
  };
  getIsVeg = () => {
    return this.isVeg;
  };
  getCount = () => {
    return this.itemCartCount;
  };
  getCategoryName = () => {
    return this.itemCategoryName;
  };
  getCategoryId = () => {
    return this.itemCategoryId;
  };
  setCount = (count) => {
    this.itemCartCount = count;
  };
  increaseCount = () => {
    this.itemCartCount += 1;
  };
  decreaseCount = () => {
    this.itemCartCount -= 1;
  };
}

export default FoodItem;
