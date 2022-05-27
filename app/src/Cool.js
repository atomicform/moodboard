import axios from "axios";
import {useState} from "react";
import Marquee from "react-fast-marquee";


export const Cool = () => {
  const [coolFolks, setCoolFolks] = useState([]);

  if (coolFolks.length < 30) {
    axios.get("http://localhost:5000/cool")
        .then(res => {
            if (coolFolks.length > 0) setCoolFolks([...coolFolks, res.data]);
            if (coolFolks.length === 0) setCoolFolks([res.data]);
            console.log("HOORAY", res.data)
        })
        .catch(err => console.log("ERR", err));
  }
    

  return (
      <Marquee style={{display: "flex", justifyContent: "space-between", width: "100%", paddingTop: "1rem", paddingBottom: "1rem"}}>
          {coolFolks.map((coolFolk, index) => (
              <span style={{paddingRight: "10px"}} key={index}>{coolFolk}</span>
          ))}
      </Marquee>
  );
};