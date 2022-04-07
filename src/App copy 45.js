import React, { useEffect, useState } from 'react';
import './App.css';
import { getStorage, setStorage } from './utils/storage';

function List() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('sheng');

    useEffect(() => {
        setList(getStorage() || []);
    }, []);

    useEffect(() => {
        document.title = name;
    }, [name]);

    function addItem() {
        setList(setStorage({
            id: new Date().getTime(),
            text: inputValue,
        }));
        setInputValue('');
    }

    function removeItem(id) {
        setList(setStorage(null, id));
    }

    return (
        <div className='wrapper'>
            <div className='input-box'>
                <input type="text" placeholder="请输入项目" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={addItem}>增加</button>
            </div>
            <div className='list-box'>
                <ul className='list'>
                    {
                        list && list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item.text}</span>
                                    <button onClick={() => removeItem(item.id)}>删除</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;