import { useState } from "react";
import useFetch from "../hooks/useFetch";
import APIS from "../assets/apis";
import { Loading } from "./Loading";


export const Cocktails = () => {

    const [query, setQuery] = useState('');
    
    const data = useFetch(APIS[7].fetchUrl+query);
    const {results, loading, error} = data;

    console.log(data);

    const submitHandler = (e) => {
        e.preventDefault();
        setQuery(e.target.firstChild.value)
      }

    const loopCarouselIndicators = () => {

        let indicators = [];

        for(let i=1; i<Math.ceil(results.drinks.length/3);i++ ) {
            indicators.push(<li data-target="#myCarousel" data-slide-to={i.toString()}></li>);
        }

        return indicators;
    }
  
      if(loading) return <Loading />;
      if(error) return <div>{error}</div>;
      /* if(!data.results.drinks) return <div>No such drink</div>; */

  return (
    <div id="service" className="service">
                <div className="container">
                {/* Input from Contacts */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <form onSubmit={submitHandler}>
                        <input className="form-control" placeholder="Your favorite drink" type="text" name="Cocktail"/>
                    </form>
                </div>

                   {data.results?.drinks && (<> <div className="row">
                        <div className="col-md-12">
                            <div className="ourheading">
                                <h2>Search for your<strong className="white_ll"> favorite cocktail</strong></h2>
                                <span> </span>
                            </div>
                        </div>
                    </div>

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            {loopCarouselIndicators()}
                        </ol>
                        <div className="carousel-inner">

                             <div className="carousel-item active">

                            <div className="container">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[0].strDrinkThumb} alt={`${results.drinks[0]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[0]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[0]?.strInstructions}</p>
                                                </div>
                                            </div>
                                            {results.drinks[1]?.strDrinkThumb && (<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[1]?.strDrinkThumb} alt={`${results.drinks[1]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[1]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[1]?.strInstructions}</p>
                                                </div>
                                            </div>)}
                                            {results.drinks[2]?.strDrinkThumb && (<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[2]?.strDrinkThumb} alt={`${results.drinks[2]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[2]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[2]?.strInstructions}</p>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {loopCarouselIndicators().length>1 && loopCarouselIndicators().map((item,i)=>(<div key={results.drinks[3*i+3]?.idDrink} className="carousel-item">

                                <div className="container">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            {results.drinks[3*i+3]?.strDrinkThumb && (<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[3*i+3].strDrinkThumb} alt={`${results.drinks[3*i+3]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[3*i+3]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[3*i+3]?.strInstructions}</p>
                                                </div>
                                            </div>)}
                                            {results.drinks[3*i+4]?.strDrinkThumb && (<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[3*i+4].strDrinkThumb} alt={`${results.drinks[3*i+4]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[3*i+4]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[3*i+4]?.strInstructions}</p>
                                                </div>
                                            </div>)}
                                            {results.drinks[3*i+5]?.strDrinkThumb && (<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[3*i+5].strDrinkThumb} alt={`${results.drinks[3*i+5]?.strDrink}`}/></figure>
                                                    <h3>{results.drinks[3*i+5]?.strDrink}</h3>
                                                    <p style={{overflowY: 'scroll', height: '75px'}}>{results.drinks[3*i+5]?.strInstructions}</p>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                            {/*
                            <div className="carousel-item">

                                <div className="container">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[4].strDrinkThumb} alt={`${results.drinks[4]?.strDrink}`}/></figure>
                                                    <h3>Clean Shave</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[5].strDrinkThumb}alt={`${results.drinks[5]?.strDrink}`}/></figure>
                                                    <h3> Haircut Styles</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[6].strDrinkThumb} alt={`${results.drinks[6]?.strDrink}`}/></figure>
                                                    <h3>Face Masking</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">

                                <div className="container">
                                    <div className="carousel-caption">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[7].strDrinkThumb} alt={`${results.drinks[7]?.strDrink}`} /></figure>
                                                    <h3>Clean Shave</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[8].strDrinkThumb}alt={`${results.drinks[8]?.strDrink}`} /></figure>
                                                    <h3> Haircut Styles</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                                <div className="service_box">
                                                    <figure><img src={results.drinks[9].strDrinkThumb} alt={`${results.drinks[9]?.strDrink}`} /></figure>
                                                    <h3>Face Masking</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div></>)}
                    {(!data.results.drinks) && <div>No such drink</div>}

                </div>
            </div>
  )
}
