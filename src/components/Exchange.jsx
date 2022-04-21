import APIS from "../assets/apis";
import { useState, useEffect, useReducer } from "react";
import { Loading } from "./Loading";

const reducer = (exchange, action) => {
    switch(action.type){

        case 'Set default currency': return {...exchange, default_currency: action.payload};
        case 'Set exchange currency': return {...exchange, exchange_to_currency: action.payload};
        case 'Set quantity': return {...exchange, quantity: action.payload};
        default: return exchange;

    }
}

export const Exchange = () => {

    const cc = require('currency-codes');

    const [displayTableFlag, setDisplayTableFlag] = useState(true);

    const [data, setData] = useState( {results: null, loading:true, error:null} );

    const {results, loading, error} = data;

    const [exchange, dispatch] = useReducer(reducer, {default_currency: 'USD', exchange_to_currency: 'USD', quantity: 0});

    useEffect(()=>{

        const controller = new AbortController();

        const getData = async () =>{


            try {
                const response = await fetch(APIS[1].fetchUrl,{signal: controller.signal});
                const results = await response.json();
                setData({results, loading: false, error: null});
                } catch(error) {
                    controller.signal.aborted ?
                    console.log('Fetch aborted') :
                    setData({results: null, loading: false, error: error.message});
                }

        }

        getData();

        return () => controller.abort();

    },[]);

    if(loading) return <Loading />;
    if(error) return <div>{error}</div>;

    const currencies = Object.keys(results.rates);
    const rates = Object.values(results.rates);

    const defaultRate = rates[currencies.indexOf(exchange.default_currency)];
    const exchangeRate = rates[currencies.indexOf(exchange.exchange_to_currency)];

    const chart = {type:'bar',data:{labels:[exchange.default_currency,exchange.exchange_to_currency],datasets:[{label:'Exchange rate to US $',data:[1/defaultRate,1/exchangeRate]}]}};




  return (<>
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="ourheading">
                <h2>Currency<strong className="white"> Prices</strong></h2>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid">
    <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mar_bottom">
            <div className="pricing_img">
                <figure><img 
            src={"https://quickchart.io/chart?c="+JSON.stringify(chart)} 
            alt="currency graph" />
                </figure>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pad_left">
            <div className="pricing_box">
                <div className="list" style={{display: displayTableFlag?'block':'none'}}>
                    <ul>
                        <li><span className="float-left">Euro</span><span className="float-right">$ {rates[currencies.indexOf('EUR')]}</span></li>
                        <li><span className="float-left">Pound</span><span className="float-right">$ {rates[currencies.indexOf('GBP')]}</span></li>
                        <li><span className="float-left">Yen</span><span className="float-right">$ {rates[currencies.indexOf('JPY')]}</span></li>
                        <li><span className="float-left">Peso</span><span className="float-right">$ {rates[currencies.indexOf('MXN')]}</span></li>
                    </ul>
                    <ul>
                        <li><span className="float-left">Zloty</span><span className="float-right">$ {rates[currencies.indexOf('PLN')]}</span></li>
                        <li><span className="float-left">Dinar</span><span className="float-right">$ {rates[currencies.indexOf('RSD')]}</span></li>
                        <li><span className="float-left">Shilling</span><span className="float-right">$ {rates[currencies.indexOf('KES')]}</span></li>
                        <li><span className="float-left">Naira</span><span className="float-right">$ {rates[currencies.indexOf('NGN')]}</span></li>
                    </ul>
                    <a href="http://localhost:3000/#/exchange" onClick={()=>setDisplayTableFlag(!displayTableFlag)}>Get more</a>
                </div>
                <div style={{display: displayTableFlag?'none':'block'}}>
                    <section>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input className="form-control" placeholder="Input quantity" type="number" min="1"
                        onChange={(e)=>dispatch({type:'Set quantity',payload:e.target.value})}/>
                    </div>

                    <select onChange={(e)=>dispatch({type:'Set default currency',payload:e.target.value})} >
                    {currencies.map((currency,i)=><option title={`${cc.code(currency)?.currency}: ${cc.code(currency)?.countries}`} key={i}>{currency}</option>)}
                    </select>

                    </section>

                    <br />

                    <h4> equals </h4>

                    <br />

                    <section>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <input className="form-control" value={( ( (exchangeRate/defaultRate)*exchange.quantity) ).toFixed(2)} 
                        type="number" readOnly/>
                    </div>

                        <select onChange={(e)=>dispatch({type:'Set exchange currency',payload:e.target.value})}>
                        {currencies.map((currency,i)=><option title={`${cc.code(currency)?.currency}: ${cc.code(currency)?.countries}`} key={i}>{currency}</option>)}
                        </select>

                    </section>
                    <br /><br /><br />
                    <p>Last update: ({results.time_last_update_utc})</p>
                    <a href="http://localhost:3000/#/exchange" onClick={()=>setDisplayTableFlag(!displayTableFlag)}>Go back</a>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="opening">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="ourheading">
                        <h2>Opening<strong className="white"> Times</strong></h2>
                    </div>
                </div>
            </div>
            <div className="opening_bg">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="times">
                            <ul>
                                <li><span>Monday</span><span className="float-right">9:00am       <strong className="bbbb">9:00pm</strong></span></li>
                                <li><span>Tuesday </span><span className="float-right">9:00am       <strong className="bbbb">9:00pm</strong></span></li>
                                <li><span>Wednesday</span><span className="float-right">9:00am      <strong className="bbbb">9:00pm</strong></span></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="times">
                            <ul>
                                <li><span>Thursday </span><span className="float-right">9:00am       <strong className="bbbb">9:00pm</strong></span></li>
                                <li><span>Friday</span><span className="float-right">9:00am       <strong className="bbbb">9:00pm</strong></span></li>
                                <li><span>Saturday</span><span className="float-right">9:00am        <strong className="bbbb">9:00pm</strong></span></li>
                                <li><span>Sunday</span><span className="float-right">Close</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
                    </div>
                    </>
                    
  )
}
