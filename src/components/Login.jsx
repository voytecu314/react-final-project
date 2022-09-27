import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import loginMan from '../assets/loginMan.png';

export const Login = () => {

    const {authorized, setAuthorized} = useContext(MyContext);

    const NAME = process.env.REACT_APP_NAME;
    const PASSWORD = process.env.REACT_APP_PASSWORD;

    const navigate = useNavigate(); 

    const success = () => {
        setAuthorized(true);
        navigate('/', {state: {authorized}});
    }

    const handleSubmit = (e) => {

        NAME === e.target.previousSibling.previousSibling.firstChild.value && PASSWORD === e.target.previousSibling.firstChild.value 
        ? success()
        : navigate('/not-authorized');

    }


  return (
    <div id="contact" className="contact">
                    <div className="container">
                        <div className="row">
                            <div className=" col-md-12">
                                <div className="title">
                                    <h2><strong className="white"> Login</strong></h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                                <form className="main_form">
                                    <div className="row">

                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" value="User1" type="text" name="Your Name"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" value="1234" type="password" name="Email"/>
                                        </div>
                                        
                                            <div className="send" onClick={handleSubmit}
                                                style={{textAlign:'center'}}>Send</div>
                                        
                                        {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" placeholder="Email" type="text" name=" Email"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input className="form-control" placeholder="Date" type="date" name=" Date"/>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                                        </div> */}
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                                 style={{display: 'grid', placeItems: 'center'}}>
                                <div className="img-box">
                                    <figure><img src={loginMan} alt="login symbol" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
  )
}
