import { useContext } from "react";
import MyContext from "../context/MyContext";
import logo from '../assets/react-icon-15.jpg';
import martini from '../assets/martini-icon.png';

export const Header = () => {

    const {authorized, setAuthorized, hideMap} = useContext(MyContext);
    console.log(authorized);

  return (
    <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="full">
                                <a className="logo" href="index.html"><img src={logo} alt="Logo" width="100"/></a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="full">
                                <div className="right_header_info">
                                    <ul>
                                        {/* <li className="dinone"><img style={{marginRight: '15px',marginLeft: '15px'}} src="images/phone_icon.png" alt="#"/><a href="#">987-654-3210</a></li>
                                        <li className="dinone"><img style={{marginRight: '15px'}} src="images/mail_icon.png" alt="#"/><a href="#">demo@gmail.com</a></li>
                                            */}
                                        {/* {authorized && <li className="dinone" style={{color: 'black',marginRight: '150px'}}>Hello handsome, you are logged in
                                            <img style={{marginRight: '150px'}} src={martini} alt="martini icon" width="35"/>
                                        </li>} */}
                                         <li className="button_user"> 
                                         {authorized?<a className="button" href="#/login" onClick={()=>{setAuthorized(false);
                                                                                                        hideMap()}}>
                                         LOGOUT</a>:
                                             <a className="button" href="#/login">
                                             LOGIN</a>}
                                             </li>

                                        <li>
                                            <button type="button" id="sidebarCollapse">
                                                <a href="#"  onClick={hideMap}>MENU</a>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
  )
}
