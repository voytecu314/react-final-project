import { useState, useEffect } from "react";

const useFetch = (url, count) => {

    const [data, setData] = useState({results:null, loading:true, error:null});

    //console.log(data);

    useEffect(()=>{

        const controller = new AbortController();

        fetch(url, {signal: controller.signal})
        .then(res=>res.json())
        .then(results=>setData({results, loading:false, error:null}))
        .catch(error=>{
            controller.signal.aborted ?
            console.log('Fetch aborted') :
            setData({results:null, loading:false, error: 'Error: '+error.message})
            });

        return ()=>controller.abort();

    },[url, count]);

  return data;
}

export default useFetch;