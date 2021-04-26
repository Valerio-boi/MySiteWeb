import React, { useEffect, useState } from "react";
import QueryBuilderRoundedIcon from "@material-ui/icons/QueryBuilderRounded";


export default function Clock() {
  const [tempo, setTempo] = useState(new Date());
  const temp = tempo.getTime() + 0 * 3600 * 1000;
  const data = new Date(temp);
  let interval;

  let tick = () => {
    setTempo(new Date());
  };

  let startWatch = () => {
    interval = setInterval(tick, 1000);
  };

  useEffect(() => {
    startWatch();
  }, []);

  return (
    <>
    <QueryBuilderRoundedIcon style={{color: 'withe'}}/> {data.toLocaleTimeString()}{" "} 
    </>
  );
}