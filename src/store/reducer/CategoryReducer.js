import { CategoryTypes } from "../types/CategoryTypes";
import { categories } from "../../constans/data/Categories"

const { SELECT_CATEGORY }= CategoryTypes;
const initialState={
    categories,
    selected: null,
}

const CategoryReducer = (state=initialState,action) =>{
    switch(action.type){
        case SELECT_CATEGORY:
            const indexCategory=state.categories.findIndex(category =>category.id==action.CategoryId)
            if(indexCategory == -1) return state
            return{
                ...state,
                selected: state.categories[indexCategory],
            }
        default:
            return state
    }
}

export default CategoryReducer;