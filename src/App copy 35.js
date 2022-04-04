/*
 * @Author: your name
 * @Date: 2022-04-02 22:57:29
 * @LastEditTime: 2022-04-02 23:13:17
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 35.js
 */
import React from 'react';
import './App.css';
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element
        }

        this.focusTextInput = () => {
            // 使用原生 DOM API 使 text 输入框获得焦点
            if (this.textInput) {
                this.textInput.focus();
            }
        }
    }

    componentDidMount() {
        // 组件挂载后，让文本自动获得焦点
        this.focusTextInput();
    }

    render() {
        // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React 实例上（比如 this.textInput）
        return (
            <div>
                <input type="text" ref={this.setTextInputRef} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}

export default CustomTextInput;