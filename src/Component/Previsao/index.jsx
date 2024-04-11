
import { useState, useEffect } from "react"
import axios  from "axios"

export default function Previsao(){
const [previsaoDate, setPrevisaoDate] = useState(null)

useEffect(() => {
    const response = async () =>{
  try{
const dados =  await axios.get("http://api.openweathermap.org/data/2.5/forecast", {
        params: {
            appid:'8f2acecfda4778898f5147d3c193c77f',
            q:'salvador,br',
        }
    })

    setPrevisaoDate(dados.data)
  }
  catch{

  }
    

    }
   
response()
}, [])


console.log(previsaoDate)

    return (
   
            <div>
        {previsaoDate.list.map((forecast, index) => (
          <div key={index}>
            <p>Data e hora: {forecast.dt_txt}</p>
            <p>Temperatura: {forecast.main.temp}°C</p>
            <p>Descrição: {forecast.weather[0].description}</p>
          </div>
        ))}
        </div>
    )
       
    
}