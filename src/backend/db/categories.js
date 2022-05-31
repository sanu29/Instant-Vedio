import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sprots",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
   },
  {
    _id: uuid(),
    categoryName: "Web Series",
   },
  {
    _id: uuid(),
    categoryName: "Knowledge",
   },
  {
    _id: uuid(),
    categoryName: "Movies",
  },
];
