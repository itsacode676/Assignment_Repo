import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardData: [],
    searchData: [],
    searchFlag: false
}

const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCardData(state, value) {
            state.cardData = value.payload
        },
        setSearchData(state, value) {
            state.searchData = value.payload
        },
        setSearchFlag(state, value) {
            state.searchFlag = value.payload
        },
    }
}
)

export const { setCardData , setSearchData , setSearchFlag} = CardSlice.actions
export default CardSlice.reducer