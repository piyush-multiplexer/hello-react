const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// State
const initialState = {
    numOfCakes: 8
}

// Action creator
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

const store = createStore(reducer)
console.log('Initla State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(buyCake())
console.log('Initla State', store.getState())