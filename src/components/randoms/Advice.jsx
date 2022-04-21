import APIS from "../../assets/apis";
import useFetch from "../../hooks/useFetch";

export const Advice = ({count}) => {

    const data = useFetch(APIS[10].fetchUrl, count);
    const {results, loading, error} = data;
    console.log(data);
    if(loading) return <div style={{height: '20vh', textAlign:'center'}}>Loading activity...</div>;
    if(error) return <div>{error}</div>;
    
  return (
    <div className="row" style={{height: '20vh'}}>
         <div className="col-md-12">
                <div className="ourheading">
                        <h2>Some<strong className="white"> Advice</strong></h2>
                         <h3>{results.slip.advice}</h3>
                </div>
           </div>
    </div>
  )
}