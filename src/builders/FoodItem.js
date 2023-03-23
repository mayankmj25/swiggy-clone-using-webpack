class FoodItem {
  constructor({
    itemId,
    itemName,
    itemPrice,
    itemImage,
    itemInfo,
    isVeg,
    itemCartCount,
    itemCategoryId,
    itemCategoryName,
  }) {
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
  getInfo = () => {
    return this.itemInfo;
  };
  getImageUrl = () => {
    return this.itemImage;
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
