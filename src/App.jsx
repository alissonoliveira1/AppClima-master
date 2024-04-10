import "./App.css";
import Local from "./Component/Local";
import Tempo from "./Component/Tempo";
function App() {
  return (
    <div>
      <div className="box">
        <div>
          <Tempo />
        </div>

        <div>
          <Local />
        </div>
      </div>
    </div>
  );
}

export default App;
