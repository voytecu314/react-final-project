import APIS from "../../assets/apis";
import useFetch from "../../hooks/useFetch";

export const Fact = ({count}) => {

    const data = useFetch(APIS[8].fetchUrl, count);
    const {results, loading, error} = data;

    if(loading) return <div style={{height: '20vh', textAlign:'center'}}>Loading activity...</div>;
    if(error) return <div>{error}</div>;
    
  return (
    <div className="row" style={{height: '20vh'}}>
         <div className="col-md-12">
                <div className="ourheading">
                        <h2>Useless<strong className="white"> Fact</strong></h2>
                         <h3>{results.text}</h3>
                </div>
           </div>
    </div>
  )
}