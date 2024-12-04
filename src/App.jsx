import { useEffect, useState } from "react"
import axios from 'axios';
import './style-weather-1204.css';
import { IoIosUmbrella } from "react-icons/io";

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
      console.log(location);
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
                  <div className="content">
                    {
                      city.weatherElement[0].time.map((time, index) => {
                        return (
                          <div className="item2" key={index}>
                            {/* <p>4日</p> */}
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, {
                                  day: 'numeric'
                                })
                              }
                            </p>
                            {/* <p>上午6:00<br />~<br />下午6:00</p> */}
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                            </p>
                            <br />
                            ~
                            <br />
                            <p>
                              {
                                new Date(time.endTime).toLocaleString(undefined, {
                                  hour: 'numeric',
                                  minute: 'numeric'
                                })
                              }
                            </p>
                            {/* <p><img src="images/weatherIcon/陰短暫雨.svg" alt="" /></p> */}
                            <p>
                              <img src={`images/weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                            </p>
                            {/* <p>陰短暫雨</p> */}
                            <p>{time.parameter.parameterName}</p>
                            {/* <p><IoIosUmbrella />30%</p> */}
                            <p><IoIosUmbrella />
                            {
                              city.weatherElement[4].time[index].parameter.parameterName
                            }
                            %
                            </p>
                          </div>
                        )
                      })
                    }

                  </div>
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