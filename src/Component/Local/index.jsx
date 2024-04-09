import './style.css';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Local() {
  const [localDate, setLocalDate] = useState(null);

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
        setLocalDate(response.data);
      } catch {
        console.log('Error Api')
      }
    };
    Data();
  }, []);
console.log(localDate)
  return(
    <div>
        {localDate &&(
            <div>{localDate.location.name}</div>
        )

        }
  
    </div>
  )
}
