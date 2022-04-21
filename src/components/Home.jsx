import MyContext from "../context/MyContext";
import { useState, useContext } from "react";
import APIS from "../assets/apis";
import useFetch from "../hooks/useFetch";
import reactGif from '../assets/react.gif';

export const Home = () => {

  const {authorized, setAuthorized} = useContext(MyContext);

  const IP = useFetch(APIS[0].fetchUrl);
  const data = useFetch(APIS[3].fetchUrl);
  const {results, loading, error} = data;
  
  const [geolocated, setGeolocated] = useState(false);

  const geolocate = () => {
    setGeolocated(!geolocated);
  }

  return (
    <div className="slider_section banner_bg" style={{marginTop: '1%'}}>
                <div className="container"  style={{display: 'flex'}}>
                    <div className="text_box" 
                      style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', height: '50vh'}}>
                        {authorized?<h1 style={{color:"black"}}>Welcome User1</h1>:<span style={{color: 'rgb(36,184,231)'}}>React demo website</span>}
                        <h2>Today is<br/> 
                        {new Date().toDateString()}</h2>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column-reverse', minWidth:'40%',  alignItems:'center'}}>
                      
                      <a href="#" onClick={geolocate}>{geolocated?'HIDE':'Geolocate your IP  address'}</a>
                      {authorized && <img src={reactGif} alt="react logo gif" style={{display:'block', width:geolocated?'5vw':'30vw', height:geolocated?'10vh':'45vh'}} />}
                      {!loading ? error ? error :
                      (<div style={{display: geolocated?'block':'none'}}>
                      <h2>Your IP is:</h2>
                      <h2>{IP.loading?<p>Loading IP...</p>:IP.error?<p>{IP.error}</p>:IP.results.ip}</h2>
                      <br />
                      <h4>{results.city}</h4>
                      <h4>Latitude:{results.latitude}, Longitude: {results.longitude}</h4>
                      <h4>ZIP Code: {results.zip_code}</h4>
                      <h4>ipv6: {results.ip}</h4>
                      
                      </div>):<p>Loading...</p>}
                    </div>
                    
                </div>
            </div>
  )
}
