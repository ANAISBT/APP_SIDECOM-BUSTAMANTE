import { CategoryTypes } from "../types/CategoryTypes";

const {SELECT_CATEGORY } = CategoryTypes;

export const selectCategory =(id) =>({
    type: SELECT_CATEGORY,
    CategoryId:id,
})