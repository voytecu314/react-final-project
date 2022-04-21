import Owlbot from "owlbot-js";
import { useState } from "react";
import { Loading } from "./Loading";

export const DictionaryLogged = () => {

    const [result, setResult] = useState({result: null, loading: true, error: null});

    const TOKEN = process.env.REACT_APP_AUTH_TOKEN;
    
    const client = Owlbot(TOKEN);
    
    const getWord = (e) => {
        e.preventDefault();

        client.define(e.target.firstChild.value).then(function(res){
            setResult({result: res, loading: false, error: null});
            }).catch(error=>setResult({result: null, loading: true, error}));

    }

    const reset = () => {
        setResult({result: null, loading: true, error: null})
    }

  return (
                <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_box">
                                <span>LOGGED</span>
                                <h2 style={{textAlign: 'center'}}>OWLbot<strong className="white"> Dictionary </strong></h2>
                                <p></p>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <form onSubmit={getWord}>
                                    <input className="form-control" placeholder="Type any word" type="text"/>
                                    {result.error && <p>{result.error.message}</p>}
                                    </form>
                                    {result.result && (<div style={{height: '10vh', overflowY: 'scroll'}}>
                                    {result.result.definitions.map((def,i)=><p key={i}>{i+1}. type: {def.type} <br /> {def.definition} {def.emoji}<br /> {def.example && `example: ${def.example}`}</p>)}
                                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_img">
                                <figure><img src={result.result?.definitions[0]?.image_url?
                                                  result.result.definitions[0].image_url
                                                  :require('../assets/owl-logo.png')} alt="owl api logo" style={{maxHeight: '45vh'}}/></figure>
                            </div>
                        </div>
                    </div>
  )
}
