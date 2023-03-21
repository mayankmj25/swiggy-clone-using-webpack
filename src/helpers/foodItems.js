import FOOD_ITEMS from "../constants/foodItems";
import FoodItem from "../builders/FoodItem";

// writting utility functions here

export const getCategories = FOOD_ITEMS.map((item) => {
  return item.getCategoryName;
});

export const getCategoryIds = FOOD_ITEMS.map((item) => {
  return item.getCategoryId;
});
