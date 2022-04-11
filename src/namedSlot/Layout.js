/*
 * @Author: your name
 * @Date: 2022-04-11 10:21:05
 * @LastEditTime: 2022-04-11 10:41:45
 * @LastEditors: Please set LastEditors
 * @Description: 父组件Layout中传值
 * @FilePath: /my-app/src/namedSlot/Layout.js
 */
import React from "react";
import Home from "./Home";

const Layout = (props) => {
    return (
        <Home isShowTopBar={false} isShowBottomBar={true} title="react实现插槽">
            {/* 具名插槽 */}
            {{
                content: (
                    <div>
                        <h1>使用组合的方式实现插槽</h1>
                        <p>滴答滴答滴答~~~~~~~~~</p>
                    </div>
                ),
                txt: "这是一段文本内容",
                clickMe: () => { console.log("这是一个事件方法！") }
            }}
        </Home>
    );
};

export default Layout;