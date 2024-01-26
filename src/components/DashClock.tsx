import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';



const DashClock = () => {

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])


return(
    <div className="cardContainer">
        <Clock value={time}></Clock>
    </div>

)


}

export default DashClock;