import React, { useContext } from 'react';

const obj = {
    value: 1,
};
const obj2 = {
    value: 2,
};

const ObjContext = React.createContext(obj);
const Obj2Context = React.createContext(obj2);

const App = () => {
    return (
        <ObjContext.Provider value={obj}>
            <Obj2Context.Provider value={obj2}>
                <ChildComp />
            </Obj2Context.Provider>
        </ObjContext.Provider>
    );
};

const ChildComp = () => {
    return <ChildChildComp />;
}

const ChildChildComp = () => {
    const obj = useContext(ObjContext);
    const obj2 = useContext(Obj2Context);
    return (
        <>
            <div>{obj.value}</div>
            <div>{obj2.value}</div>
        </>
    );
};

export default App;