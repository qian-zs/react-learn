import React, { useEffect } from "react";
import TopBar from "../slot/TopBar";
import BottomBar from "../slot/BottomBar";

const Home = (props) => {
    const { children, isShowTopBar, isShowBottomBar, title } = props;
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            {isShowTopBar && <TopBar />}
            {/* 使用具名插槽 */}
            {children.content}
            {children.txt}
            <button onClick={children.clickMe}>点击</button>
            {isShowBottomBar && <BottomBar />}
            <BottomBar />
        </div>
    );
};

export default Home;