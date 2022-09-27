import APIS from "../../assets/apis";
import useFetch from "../../hooks/useFetch";

export const Joke = ({count}) => {

    const data = useFetch(APIS[2].fetchUrl, count);
    const {results, loading, error} = data;

    if(loading) return <div style={{height: '20vh', textAlign:'center'}}>Loading a joke...</div>;
    if(error) return <div>{error}</div>;

  return (
    <div className="row" style={{height: '20vh'}}>
         <div className="col-md-12">
                <div className="ourheading">
                        <h2>Random<strong className="white"> Joke</strong></h2>
                        <h3 style={{color:'lightblue'}}>Category: {results.category}</h3>
                        <h3>{results.type==='single'?results.joke:results.setup+' '+results.delivery }</h3>
                </div>
           </div>
    </div>
  )
}
