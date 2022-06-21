import ShowArea from "./useContext/ShowArea";
import Buttons from "./useContext/Buttons";
import { Color } from './useContext/color';

const App = () => {
  return (
    <div className="App">
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
};

export default App;