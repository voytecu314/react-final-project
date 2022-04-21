import { useContext } from "react";
import MyContext from "../context/MyContext";
import comet from '../assets/comet-animation-blue.gif'
import { DictionaryLogged } from "./DictionaryLogged";

export const Dictionary = () => {

    const {authorized} = useContext(MyContext);

  return (
    <div id="about" className="about">
                <div className="container">

                   {authorized?<DictionaryLogged />:(<div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_box">
                                <span>You need to login first 🔒</span>
                                <h2>About<strong className="white"> dictionary </strong>API</h2>
                                <p>It searches the internet to index information and making them accessible via HTTP APIs. Currently, it offers an English dictionary API. Web applications or mobile apps can use Owlbot dictionary API to get the definition of English words, and in some cases, pronunciation, picture, example sentence, and emoji if available.</p>
                                <a href="https://owlbot.info/">Read more</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about_img">
                                <figure><img src={comet} alt="comet gif" /></figure>
                            </div>
                        </div>
                    </div>) }
                </div>
            </div>
  )
}
