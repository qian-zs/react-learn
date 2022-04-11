/*
 * @Author: your name
 * @Date: 2022-04-11 09:34:39
 * @LastEditTime: 2022-04-11 10:07:42
 * @LastEditors: Please set LastEditors
 * @Description: 创建一个Home组件，在Home组件中引入子组件TopBar和BottomBar
 * @FilePath: /my-app/src/Home.js
 */
import React, { useEffect } from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const Home = (props) => {
    const { children, isShowTopBar, isShowBottomBar, title } = props;
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <div>
            {isShowTopBar && <TopBar />}
            {/* 中间内容（插槽） */}
            {children}
            {isShowBottomBar && <BottomBar />}
            <BottomBar />
        </div>
    );
}

export default Home;