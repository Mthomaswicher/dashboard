import React, { useEffect, useState } from "react";
//import {useState, useEffect, componentDidMount} from 'react';
import Marquee from "react-fast-marquee";


const DashboardNewsHeader= (props)=>{
    const [song, setSong] = useState([]);
    const [tokens, setTokens] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    let token = window.localStorage.getItem("token")
    useEffect(() => {
        fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => setSong(data))
          .then(setIsLoading(false))
          .then(setTokens(true));
      }, [token]);
      

return (
  
  <Marquee>
    {isLoading ? <p>Loading...</p> : null}
    <div><img className="tickerImage" src={song?.item?.album?.images[0].url}></img></div>
    {song?.item?.name + " " + "-" + song?.item?.artists.map(item => item.name)} 
</Marquee>)


}

export default DashboardNewsHeader;
