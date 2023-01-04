const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

// State
const initialCakeState = {
    numOfCakes: 8,
}
const initialIceState = {
    numOfIce: 15
}

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Bought Cake'
    }
}

function buyIce() {
    return {
        type: BUY_ICE,
        info: 'Bought IceCream'
    }
}

// Reducer (prev_state, action) => next_state
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceReducer = (state = initialIceState, action) => {
    switch (action.type) {
        case BUY_ICE: return {
            ...state,
            numOfIce: state.numOfIce - 1
        }
        default: return state
    }
}

// accepts only single reducer, so need to combine
// it will update state key object and make it nested
const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
store.dispatch(buyCake())
unsubscribe()