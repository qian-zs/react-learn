/*
 * @Author: your name
 * @Date: 2022-04-11 09:44:41
 * @LastEditTime: 2022-04-11 09:49:28
 * @LastEditors: Please set LastEditors
 * @Description: 创建一个Layout组件
 * @FilePath: /my-app/src/Layout.js
 */
import React from "react";
import Home from "./Home";

const Layout = (props) => {
    return (
        <Home isShowTopBar={false} isShowBottomBar={true} title="react实现插槽">
            {/* 首页内容主体（插槽） */}
            <div>
                <h1>使用组合的方式实现插槽</h1>
                <p>滴答滴答滴答~~~~~~~~~</p>
            </div>
        </Home>
    );
}

export default Layout;