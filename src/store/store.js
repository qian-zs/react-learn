import { createStore } from 'redux';

let defaultState = {
    text: '我是store',
};

let reducer = (state = defaultState, action) => {
    switch (action) {
        default: return state
    }
}

export default createStore(reducer);