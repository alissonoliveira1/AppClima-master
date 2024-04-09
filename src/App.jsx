import "./App.css";
import Local from "./Component/Local";
import Tempo from "./Component/Tempo";
function App() {
 

  

  return (
    <div className="App">
      <h2>Informações de Clima</h2>
      <div className="box">
        <div className="jutns">
          <Tempo />
        </div>

        <div><Local /></div>
      </div>
    </div>
  );
}

export default App;
