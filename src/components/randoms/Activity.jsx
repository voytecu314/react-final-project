import APIS from "../../assets/apis";
import useFetch from "../../hooks/useFetch";

export const Activity = ({count}) => {

    const data = useFetch(APIS[6].fetchUrl, count);
    const {results, loading, error} = data;

    if(loading) return <div style={{height: '20vh', textAlign:'center'}}>Loading activity...</div>;
    if(error) return <div>{error}</div>;

  return (
    <div className="row" style={{height: '20vh'}}>
         <div className="col-md-12">
                <div className="ourheading">
                        <h2>Activity<strong className="white"> Idea</strong></h2>
                         <h1>{results.activity}</h1>
                </div>
           </div>
    </div>
  )
}
