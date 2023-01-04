const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

// State
const initialState = {
    numOfCakes: 8,
    numOfIce: 15
}

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIce() {
    return {
        type: BUY_ICE,
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
        case BUY_ICE: return {
            ...state,
            numOfIce: state.numOfIce - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initla State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
store.dispatch(buyCake())
unsubscribe()