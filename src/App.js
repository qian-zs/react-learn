/*
 * @Author: your name
 * @Date: 2022-04-05 22:25:11
 * @LastEditTime: 2022-04-08 22:11:19
 * @LastEditors: Please set LastEditors
 * @Description: 有一个小数，一个大数
                有两组加、减按钮，分别对小数大数做操作，小数按钮加减1，大数按钮加减100
                计数器初次挂载时拉取欢迎问候语
                当小数达到100时，按钮变为红色，否则变为绿色
                当大数达到1000时，按钮变为紫色，否则变为绿色
                当大数达到2000时，上报大数的数字
                计算器卸载时，上报当前的数字
 * @FilePath: /my-app/src/App.js
 */
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';

const report = () => console.log('do report');
const reportStat = (n, b) => console.log(`do reportStat ${n} ${b}`);

function useCounter() {
    const [num, setNum] = useState(88);
    const [bigNum, setBigNum] = useState(120);

    const addNum = useCallback(() => setNum(num + 1), [num]);
    const addNumBig = useCallback(() => setBigNum(bigNum + 100), [bigNum]);

    const numBtnColor = useMemo(() => {
        return num > 100 ? "red" : "green";
    }, [num]);
    const bigNumBtnColor = useMemo(() => {
        return bigNum > 1000 ? "purple" : "green";
    }, [bigNum]);

    useEffect(() => {
        if (bigNum > 2000) {
            report("reach 2000");
        }
    }, [bigNum]);

    const ref = useRef();
    ref.current = { num, bigNum };
    useEffect(() => {
        return () => {
            const { num, bigNum } = ref.current;
            reportStat(num, bigNum);
        };
    }, [ref]);

    return { num, bigNum, addNum, addNumBig, numBtnColor, bigNumBtnColor };
}

function Counter() {
    const { num, bigNum, addNum, addNumBig, numBtnColor, bigNumBtnColor } = useCounter();
    return (
        <div>
            <div>num: {num}</div>
            <div>bigNum: {bigNum}</div>
            <button onClick={addNum} style={{ backgroundColor: numBtnColor }}>addNum</button>
            <button onClick={addNumBig} style={{ backgroundColor: bigNumBtnColor }}>addNumBig</button>
        </div>
    );
}

export default function App() {
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);
    return (
        <div className="App">
            {show && <Counter />}
            {show && <Counter />}
            <button onClick={toggle}>toggle</button>
        </div>
    );
}