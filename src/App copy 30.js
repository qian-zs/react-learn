/*
 * @Author: your name
 * @Date: 2022-03-31 16:11:31
 * @LastEditTime: 2022-03-31 16:11:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 30.js
 */
import React from 'react';
import './App.css';

const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />
};

const App = () => {
    return (
        <div>
            <Button kind="primary" onClick={() => console.log("clicked!")}>
                Hello World!
            </Button>
        </div>
    )
};

export default App;