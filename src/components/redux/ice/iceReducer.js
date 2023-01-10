import { BUY_ICE } from "./iceTypes"

const initialState = {
    numOfIce: 20
}

const iceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                numOfIce: state.numOfIce - action.payload
            }

        default: return state
    }
}

export default iceReducer