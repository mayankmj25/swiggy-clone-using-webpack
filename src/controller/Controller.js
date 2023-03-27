import { EventEmitter } from "./EventEmitter.js";
import FOOD_ITEMS from "../constants/foodItems.js";
import FoodItem from "../builders/FoodItem.js";

export class Controller {
  constructor() {
    this.FOOD_ITEMS = FOOD_ITEMS.map((foodItem) => new FoodItem(foodItem));
    this.mapIdToFoodItem = this.getFoodItemById();
    this.eventEmitter = new EventEmitter();
  }
  addCountToData(id) {
    const item = this.mapIdToFoodItem[id];
    item.setCount(item.getCount() + 1);
    this.eventEmitter.emit("update", item);
  }
  reduceCountToData(id) {
    const item = this.mapIdToFoodItem[id];
    if (item.getCount() > 0) {
      item.setCount(item.getCount() - 1);
      this.eventEmitter.emit("update", item);
    }
  }
  onUpdate(cb) {
    this.eventEmitter.on("update", cb);
  }

  getCategoryByCategoryId = () => {
    const mapCategoryIdToCategory = {};
    this.FOOD_ITEMS.map((item) => {
      mapCategoryIdToCategory[item.getCategoryId()] = item.getCategoryName();
    });
    return mapCategoryIdToCategory;
  };

  getFoodItemById = () => {
    const mapIdToFoodItem = {};
    this.FOOD_ITEMS.map((item) => {
      mapIdToFoodItem[item.getId()] = item;
    });
    return mapIdToFoodItem;
  };
}
