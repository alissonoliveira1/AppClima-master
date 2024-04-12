import { useState, useEffect } from "react";
import axios from "axios";

export default function Previsao() {
  const [previsaoDate, setPrevisaoDate] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const date = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast?",
          {
            params: {
              appid: "8f2acecfda4778898f5147d3c193c77f",
              q: "salvador,br",
              lang:'pt'
            },
          }
        );
        setPrevisaoDate(date.data.list);
      } catch {
        console.error("error api");
      }
    };
    response();
  }, []);

  console.log(previsaoDate)

  return (
    <div>
      {previsaoDate.map(item => {
        return(
            <div key={item.dt}>
                 {item.weather.map(e =>{
                    return(
                        <div key={e.id}><img alt="icon" src={`http://openweathermap.org/img/wn/${e.icon}.png`}/></div>
                    )
                 })}
               <div>{item.dt_txt}</div>

            </div>
        )
      })}
    </div>
  );
}
