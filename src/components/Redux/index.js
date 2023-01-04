
const BUY_CAKE = 'BUY_CAKE'

// State
const initialState = {
    numOfCakes: 8
}

// Actions
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

// Reducer (prev_state, action) => next_state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
