// have to add mapping of foodId and categoryId

class FoodItem {
  constructor(id, name, price, veg, image, cId, description, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.veg = veg;
    this.image = image;
    this.cId = cId;
    this.description = description;
    this.count = count;
  }
}

export const categories = {
  ci1: "Veg Starter",
  ci2: "Non-veg Starter",
  ci3: "Veg Curries",
  ci4: "Breverages",
};

const fi1 = new FoodItem(
  "fi1",
  "Paneer65",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/druwjzmfmz7qvepq3bkr ",
  "ci1",
  "E: 723. 82 kcal (241. 27 kcal), c: 30. 89 grams (10. 30 grams), p: 32. 95 grams (10. 98 grams), f: 51. 82 grams (17. 27 grams) [Serving info: 1 Serve, Serving size: 300 grams, Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]",
  0
);

const fi2 = new FoodItem(
  "fi2",
  "Chilly Paneer",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/byonwwb8mzxyqluxlqpq",
  "ci1",
  "E: 871. 69 kcal (272. 40 kcal), c: 21. 54 grams (6. 73 grams), p: 51. 90 grams (16. 22 grams), f: 64. 36 grams (20. 11 grams) [Serving info: 1 Serve, Serving size: 320 grams, Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]",
  0
);

const fi3 = new FoodItem(
  "fi3",
  "Veg Manchurian",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/etnsehnoylzjgipeapde",
  "ci1",
  "E: 240. 61 kcal (104. 61 kcal), c: 18. 83 grams (8. 19 grams), p: 12. 72 grams (5. 53 grams), f: 12. 39 grams (5. 39 grams) [Serving info: 1 Serve, Serving size: 230 grams, Energy: 240.61 kcal, Protein: 12.72g, Carbohydrates: 18.83g, Fat: 12.39g]",
  0
);

const fi4 = new FoodItem(
  "fi4",
  "Chilly Chicken (Boneless)",
  285,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ry3c3f518z10t4olu4l7",
  "ci2",
  "E: 604. 42 kcal (163. 36 kcal), c: 29. 67 grams (8. 02 grams), p: 50. 63 grams (13. 68 grams), f: 30. 94 grams (8. 36 grams) [Serving info: 1 Serve, Serving size: 370 grams, Energy: 604.42 kcal, Protein: 50.63g, Carbohydrates: 29.67g, Fat: 30.94g]",
  0
);

const fi5 = new FoodItem(
  "fi5",
  "Meghana Chicken 555",
  295,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/irnwr59vlrmciau11or0",
  "ci2",
  "E: 585. 13 kcal (195. 04 kcal), c: 26. 88 grams (8. 96 grams), p: 32. 48 grams (10. 83 grams), f: 39. 36 grams (13. 12 grams) [Serving info: 1 Serve, Serving size: 300 grams, Energy: 585.13 kcal, Protein: 32.48g, Carbohydrates: 26.88g, Fat: 39.36g]",
  0
);

const fi6 = new FoodItem(
  "fi6",
  "Chicken Lollypop",
  290,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ldqyxnhlfylhymnsopzc",
  "ci2",
  "E: 389. 14 kcal (155. 66 kcal), c: 7. 31 grams (2. 92 grams), p: 36. 13 grams (14. 45 grams), f: 23. 92 grams (9. 57 grams) [Serving info: 1 Serve, Serving size: 250 grams, Energy: 389.14 kcal, Protein: 36.13g, Carbohydrates: 7.31g, Fat: 23.92g]",
  0
);

const fi7 = new FoodItem(
  "fi7",
  "Chicken Biryani",
  280,
  false,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zbrpxvywfsrrb7os11jf",
  "ci2",
  "E: 1615. 27 kcal (153. 84 kcal), c: 190. 89 grams (18. 18 grams), p: 61. 82 grams (5. 89 grams), f: 64. 63 grams (6. 16 grams) [Serving info: 1 Serve, Serving size: 1050 grams, Energy: 1615.27 kcal, Protein: 61.82g, Carbohydrates: 190.89g, Fat: 64.63g]",
  0
);

const fi8 = new FoodItem(
  "fi8",
  "Veg Kadai",
  225,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iffbbbz435xq2c0uzxxt",
  "ci3",
  "E: 729. 09 kcal (132. 56 kcal), c: 37. 87 grams (6. 89 grams), p: 20. 61 grams (3. 75 grams), f: 54. 45 grams (9. 90 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 729.09 kcal, Protein: 20.61g, Carbohydrates: 37.87g, Fat: 54.45g]",
  0
);

const fi9 = new FoodItem(
  "fi9",
  "Palak Paneer Curry",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/slaicd3fv71xcsxblb2w",
  "ci3",
  "E: 833. 69 kcal (151. 58 kcal), c: 33. 75 grams (6. 14 grams), p: 30. 72 grams (5. 59 grams), f: 64. 01 grams (11. 64 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 833.69 kcal, Protein: 30.72g, Carbohydrates: 33.75g, Fat: 64.01g]",
  0
);

const fi10 = new FoodItem(
  "fi10",
  "Green Peas Curry",
  225,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/izr6y2zxm2o7j8bgj9s2",
  "ci3",
  "E: 675. 07 kcal (127. 37 kcal), c: 52. 47 grams (9. 90 grams), p: 22. 48 grams (4. 24 grams), f: 40. 67 grams (7. 67 grams) [Serving info: 1 Serve, Serving size: 530 grams, Energy: 675.07 kcal, Protein: 22.48g, Carbohydrates: 52.47g, Fat: 40.67g]",
  0
);

const fi11 = new FoodItem(
  "fi11",
  "Paneer Butter Masala",
  280,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ksjxi61s8xqlj8cqp4zs",
  "ci3",
  "E: 1156. 81 kcal (210. 33 kcal), c: 37. 93 grams (6. 90 grams), p: 43. 54 grams (7. 92 grams), f: 92. 60 grams (16. 84 grams) [Serving info: 1 Serve, Serving size: 550 grams, Energy: 1156.81 kcal, Protein: 43.54g, Carbohydrates: 37.93g, Fat: 92.6g]",
  0
);

const fi12 = new FoodItem(
  "fi12",
  "Mushroom Masala",
  275,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gqjbuq7xoyuxolxsprjp",
  "ci3",
  "E: 537. 70 kcal (119. 49 kcal), c: 34. 48 grams (7. 66 grams), p: 13. 09 grams (2. 91 grams), f: 38. 75 grams (8. 61 grams) [Serving info: 1 Serve, Serving size: 450 grams, Energy: 537.7 kcal, Protein: 13.09g, Carbohydrates: 34.48g, Fat: 38.75g]",
  0
);

const jfj = new FoodItem(
  "fi3",
  "Aam Panna Sorbet",
  69,
  true,
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gqjbuq7xoyuxolxsprjp",
  "ci4",
  "Aam Pora Shorbot is a great summer drink from Bengal and with its wonderful taste gives much needed coolness to your body. This drink comes very close to aam panna made in North India. ",
  0
);

export const foodItems = [
  fi1,
  fi2,
  fi3,
  fi4,
  fi5,
  fi6,
  fi7,
  fi8,
  fi9,
  fi10,
  fi11,
  fi12,
  jfj,
];

export const mapIdToIndex = {};
let i = 0;
foodItems.map((item) => {
  mapIdToIndex[item.id]=i;
  i++;
})