/*
 * @Author: your name
 * @Date: 2022-04-03 16:34:40
 * @LastEditTime: 2022-04-03 21:19:30
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 36.js
 */
import React from 'react';
import './App.css';

function CustomTextInput(props) {
    console.log(props.inputRef);
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        );
    }
}

export default Parent;