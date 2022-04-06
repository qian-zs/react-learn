function getStorage() {
    return JSON.parse(localStorage.getItem('list')) || [];
}

function setStorage(item, id) {
    let listData = JSON.parse(localStorage.getItem('list')) || [];

    if (id) {
        listData = listData.filter((item) => {
            return item.id !== id;
        });
    } else {
        listData.push(item);
    }

    localStorage.setItem('list', JSON.stringify(listData));

    return listData;
}

export {
    getStorage,
    setStorage,
}