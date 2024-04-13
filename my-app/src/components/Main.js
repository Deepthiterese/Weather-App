import React from 'react'
import axios from "axios";

import { useEffect, useState } from "react";
import bg from './images/R.jpg'


export const Main = () => {
  
  
    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})
  
  
    const getWetherDetails = (cityName) => {
      if (!cityName) return
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
      axios.get(apiURL).then((res) => {
        console.log("response", res.data)
        setData(res.data)
      }).catch((err) => {
        console.log("err", err)
      })
    }
  
    const handleChangeInput = (e) => {
      console.log("value", e.target.value)
      setInputCity(e.target.value)
    }
  
    const handleSearch = () => {
      getWetherDetails(inputCity)
    }
  
  
  
  
  
  
    return (
   
    
    <div style={{ backgroundImage: `url(${bg})`, height: "100vh",
   
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",opacity:'0.8' }} >
      <div className="wetherBg">
        <h1 className="heading" style={{margintop:'100px',textAlign:'center', fontSize:'80px', color:'black',fontFamily:'sans-serif',fontWeight:'bolder'}}>Weather App</h1>

        <div  style={{paddingLeft:'500px',paddingRight:'500px',margin:'100px'}}>
          <input type="text" className="form-control fs-5 fe-5" style={{color:'black',fontWeight:'bolder'}}
            value={inputCity}
            onChange={handleChangeInput} placeholder='Enter your city name' />
          <button className="btn btn-primary fs-5 fe-5 ms-5 me-5" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weatherIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"  style={{width:'100px', height:'100px'}}/>

            <h3 className="weatherCity" style={{color:'black',fontWeight:'bolder'}}>{data?.name} </h3>
            <h4 className="weatherTemp" style={{color:'black',fontWeight:'bolder'}} >{((data?.main?.temp) - 273.15).toFixed(2)}°C </h4>
          </div>
        </div>
      }

    </div>
  );
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
