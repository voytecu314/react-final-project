import { useState, useEffect } from "react";
import { Loading } from "./Loading";

export const EventsMapLogged = () => {


const [result, setResult] = useState({result: null, loading: true, error: null});
const [query, setQuery] = useState('Rieu');

const TOKEN = process.env.REACT_APP_AUTH_TOKEN;
const URL = `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&keyword=${query}&locale=*`;


const submitHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.firstChild.value)
}

useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(result=>setResult({result, loading: false, error: null}))
    .catch(error=>setResult({result:null, loading: false, error}));
},[URL]);

result && console.log(result);


const reset = () => {
    setResult({result: null, loading: true, error: null})
}

return (
            <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about_box">
                            <span>LOGGED</span>
                            <h2 style={{textAlign: 'center'}}>Events<strong className="white"> MAP </strong></h2>
                            <p></p>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <form onSubmit={submitHandler}>
                                <input className="form-control" placeholder="Input artist name" type="text"/>
                                {result.error && <p>{result.error.message}</p>}
                                </form>
                                {result.page && (<div style={{height: '10vh', overflowY: 'scroll'}}>
                                {result.page.size}
                                                </div>)}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about_img">
                            <figure><img src={result.result?.definitions[0]?.image_url?
                                              result.result.definitions[0].image_url
                                              :require('../assets/owl-logo.png')} alt="owl api logo" style={{maxHeight: '45vh'}}/></figure>
                        </div>
                    </div> */}
                </div>
)
}