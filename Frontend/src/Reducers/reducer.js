import { combineReducers } from "@reduxjs/toolkit";
import CardSlice from "../Slices/CardSlice";
export const rootReducer = combineReducers(
    {
        card:CardSlice
    }
)