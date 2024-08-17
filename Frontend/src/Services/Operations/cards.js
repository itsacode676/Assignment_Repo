import { setCardData, setSearchData, setSearchFlag } from "../../Slices/CardSlice";
import { apiConnector } from "../ApiConnector";
import { apiEndpoints } from "../Apis";

const {
    create_card,
    getCards,
} = apiEndpoints

export function createCard(data) {
    return async () => {
        try {
            const response = await apiConnector("POST", create_card, data)
            console.log(response?.data)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export function fetchCards() {
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET", getCards)
            console.log(response?.data)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            dispatch(setCardData(response?.data?.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export function SearchCards(query) {
    return async (dispatch) => {
        try {
            const response = await apiConnector("GET", `http://localhost:4000/api/v1/card/searchCard?search=${query}`)
            console.log(response?.data)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            dispatch(setSearchData(response?.data?.data))
            dispatch(setSearchFlag(true))
        } catch (err) {
            console.log(err)
        }
    }
}


