import { useContext } from "react";
import MyContext from "../context/MyContext";
import comet from '../assets/comet-animation-blue.gif';
import { EventsMapLogged } from "./EventsMapLogged";

export const EventsMap = () => {

    const {authorized} = useContext(MyContext);


    if(authorized) document.getElementById('events').style.display='flex';

  return (
    <div className="about" style={{minHeight: '50vh'}}>
               {!authorized? ( <div className="container">

               <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_box">
                                <span>You need to login first 🔒</span>
                                <h2><strong className="white"> Events Map </strong>API</h2>
                                <p>Get all the places where your favorite artist will be performing</p>
                                <a href="https://developer.ticketmaster.com/">Read more</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_img">
                                <figure><img src={comet} alt="comet gif" /></figure>
                            </div>
                        </div>
                    </div>

                </div>) : null}
            </div>
  )
}
