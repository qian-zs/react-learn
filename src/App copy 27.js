/*
 * @Author: your name
 * @Date: 2022-03-31 14:25:11
 * @LastEditTime: 2022-03-31 14:25:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 27.js
 */
import React from 'react';
import './App.css';

class Columns extends React.Component {
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;