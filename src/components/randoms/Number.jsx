import APIS from "../../assets/apis";
import useFetch from "../../hooks/useFetch";

export const Number = ({count}) => {

    const data = useFetch(APIS[4].fetchUrl, count);
    const {results, loading, error} = data;

    if(loading) return <div style={{height: '20vh', textAlign:'center'}}>Loading random number...</div>;
    if(error) return <div>{error}</div>;

  return (
    <div className="row" style={{height: '20vh'}}>
         <div className="col-md-12">
                <div className="ourheading">
                        <h2>Number<strong className="white"> {results.number} </strong></h2>
                         <h3>{results.text}</h3>
                </div>
           </div>
    </div>
  )
}
