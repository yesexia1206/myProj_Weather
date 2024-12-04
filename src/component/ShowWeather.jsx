// function ShowWeather(){
//     return <div>123</div>
// }
// export default ShowWeather
import { IoIosUmbrella } from "react-icons/io";

export default function ShowWeather({ city }) {
    return (
        // <div className="item" key={city.locationName}>
        //     <h3>{city.locationName}</h3>
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
        // </div>
    )
}