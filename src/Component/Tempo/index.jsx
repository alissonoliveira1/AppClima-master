import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Tempo() {
  const [tempoDate, setTempoDate] = useState(null);

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?",
          {
            params: {
              key: "e24728ba2751422680c51701240704",
              q: "salvador",
              region: "Bahia",
              name: "salvador",
              lang: "pt",
            },
          }
        );

        setTempoDate(response.data);
      } catch {}
    };
    Data();
  }, []);

return(
    <div>
        {tempoDate && (
        <div>
             <div className="temp">
                <span>{tempoDate.current.temp_c}°</span>
              </div>
                <div>{tempoDate.current.condition.text}</div>
            <div className="div-icon">
            <img src={tempoDate.current.condition.icon} />
          </div>
          <h3>{tempoDate.current.condition.text}</h3>
          <div>{tempoDate.current.last_updated}</div>
            <div>{tempoDate.current.wind_kph}</div>
            <div>{tempoDate.current.chance_of_rain}</div>
            <div>{tempoDate.current.uv}</div>
        </div>
        )}
    </div>
)

}
