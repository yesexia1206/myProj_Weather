import { useEffect, useState } from "react"
import axios from 'axios';
import './style-weather-1204.css';
import ShowWeather from "./component/ShowWeather";

function App() {

  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    (async () => {
      //本地端要在web-server伺服器下才可執行
      // const data = await axios.get('./F-C0032-001.json');
      //json的連結必須是公開網址下的來源
      const data = await axios.get('https://yesexia1206.github.io/myProj_Weather/json/F-C0032-001.json');
      //console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      //console.log(location);
      setWeatherList(location);
    })()
  }, [])

  return (
    //locationName =>縣市名
    //elementName => Wx =>天氣概況
    //elementName => PoP =>降雨率
    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <h3>三十六小時天氣預報</h3>
        <div className="container">
          {
            weatherList.map((city) => {
              return (
                <div className="item" key={city.locationName}>
                  <h3>{city.locationName}</h3>
                  <ShowWeather city={city} />
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default App