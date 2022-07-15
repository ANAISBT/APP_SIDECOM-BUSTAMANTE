import * as FileSystem from "expo-file-system";

import { fetchAdress, inserAddress } from "../db";

import Place from "../models/Place";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     places:[],
 }

 const placeSlice=createSlice({
     name:"place",
     initialState,
     reducers:{
         addPlace:(state,action)=>{
             const newPlace=new Place(action.payload.id.toString(),action.payload.title,
             action.payload.image,);
             state.places.push(newPlace);
         },
         loadAddress:(state,action)=>{
          state.places =action.payload;
      
         }
     },
 });

export const {addPlace,loadAddress} = placeSlice.actions;

export const savePlace = (title, image) => {
    return async (dispatch) => {
      let result;
  
      const fileName = image.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;
      try {
        await FileSystem.moveAsync({
          from: image,
          to: Path,
        });
        result = await inserAddress(title, Path);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
  
      dispatch(addPlace({id: result.insertId,title, image: Path }));
    };
  };

export const loadPlaces=()=>{
  return async (dispatch)=>{
    try{
      const result =await fetchAdress();
      console.log('result fetchaddres',result);
      dispatch(loadAddress(result.rows._array));
    }catch(error){
      throw error;
    }
  }
}

 export default placeSlice.reducer;