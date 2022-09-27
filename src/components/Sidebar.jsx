import { useContext } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom"

export const Sidebar = () => {

    const {authorized, hideMap} = useContext(MyContext);

  return ( <div className="sidebar">   
  
    <nav id="sidebar">

    <div id="dismiss">
        <i className="fa fa-arrow-left"></i>
    </div>

    <ul className="list-unstyled components">

        <li onClick={hideMap} className="active">
            <Link to="/">Home</Link>
        </li>
        
        <li onClick={hideMap}>
            <Link to="/cocktails">Cocktails</Link>
        </li>
        <li onClick={hideMap}>
            <Link to="/exchange">Exchange</Link>
        </li>
        <li onClick={hideMap}>
            <Link to="/random">Random</Link>
        </li>
        <li onClick={hideMap}>
            <Link to="/dictionary">Dictionary {authorized?'🔓':'🔒'}</Link>
        </li>
        <li>
            <Link to="/events-map">Events MAP {authorized?'🔓':'🔒'}</Link>
        </li>
    </ul>

</nav></div>
  )
}
