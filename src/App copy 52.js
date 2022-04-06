import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Child from './child';
import store from './store/store';

class Parent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <p>Parent</p>
                    <Child></Child>
                </div>
            </Provider>
        )
    }
}

export default Parent;