import { useContext } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom"

export const Sidebar = () => {

    const {authorized} = useContext(MyContext);

  return ( <div className="sidebar">   
  
    <nav id="sidebar">

    <div id="dismiss">
        <i className="fa fa-arrow-left"></i>
    </div>

    <ul className="list-unstyled components">

        <li className="active">
            <Link to="/">Home</Link>
        </li>
        
        <li>
            <Link to="/cocktails">Cocktails</Link>
        </li>
        <li>
            <Link to="/exchange">Exchange</Link>
        </li>
        <li>
            <Link to="/random">Random</Link>
        </li>
        <li>
            <Link to="/dictionary">Dictionary {authorized?'🔓':'🔒'}</Link>
        </li>
    </ul>

</nav></div>
  )
}
