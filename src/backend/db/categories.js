import { v4 as uuid } from "uuid";
import { category1, category2, category3, category4, category5 } from "../../images/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports",
    image:category1
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    image:category4
   },
  {
    _id: uuid(),
    categoryName: "WebSeries",
    image:category3
   },
  {
    _id: uuid(),
    categoryName: "Knowledge",
    image:category2
   },
  {
    _id: uuid(),
    categoryName: "Movies",
    image:category5
  },
];
