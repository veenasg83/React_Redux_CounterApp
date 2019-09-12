import React from 'react';
import './App.css';
import Counter from './components/counter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const intitalState = { count: 0 };
function reducer(state = intitalState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>

        <Counter />
    </Provider>

);


export default App;
