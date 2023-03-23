import FOOD_ITEMS from "../constants/foodItems.js";
import FoodItem from "../builders/FoodItem.js";

// writting utility functions here

export const categoryByCategoryID = () => {
  const mapCategoryIdToCategory = {};
  const categories = FOOD_ITEMS.map((item) => {
    mapCategoryIdToCategory[item.getCategoryId()] = item.getCategoryName();
  });
  return mapCategoryIdToCategory;
};

export const getCategoryIds = FOOD_ITEMS.map((item) => {
  return item.getCategoryId();
});
