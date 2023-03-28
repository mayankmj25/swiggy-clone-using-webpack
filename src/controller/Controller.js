import { EventEmitter } from "./EventEmitter.js";
import FOOD_ITEMS from "../constants/foodItems.js";
import FoodItem from "../builders/FoodItem.js";

export class Controller {
  constructor() {
    this.foodItems = FOOD_ITEMS.map((foodItem) => new FoodItem(foodItem));
    this.mapIdToFoodItem = this.getFoodItemById(FOOD_ITEMS);
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
    this.foodItems.forEach((item) => {
      mapCategoryIdToCategory[item.getCategoryId()] = item.getCategoryName();
    });
    return mapCategoryIdToCategory;
  };

  getFoodItemById = (FOOD_ITEMS) => {
    const mapIdToFoodItem = {};
    FOOD_ITEMS.forEach((item) => {
      const foodItem = new FoodItem(item);
      if (mapIdToFoodItem[foodItem.getId()])
        mapIdToFoodItem[foodItem.getId()].push(foodItem);
      else mapIdToFoodItem[foodItem.getId()] = foodItem;
    });
    return mapIdToFoodItem;
  };
}
