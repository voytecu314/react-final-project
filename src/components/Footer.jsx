import fb from '../assets/fb.png';
import tw from '../assets/tw.png';
import you from '../assets/you.png';

export const Footer = () => {
  return (<footer>
    <div className="footer">
        <div className="container">
            <div className="row">
                {/* <div className="col-md-12">
                    <div className="footer_logo">
                        <a href="index.html"><img src="images/logo1.png" alt="logo" /></a>
                    </div>
                </div> */}
                <div className="col-md-12">
                    <div className="address">
                        <p>
                            Wojtek Urbanski DCI
                            <br/> Github: https://github.com/voytecu314/
                            <br/> Email: voytecu@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="lik">

                        <li> <img src={fb} alt="#" /></li>
                        <li> <img src={tw} alt="#" /></li>
                        <li> <img src={you} alt="#" /></li>

                    </ul>

                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p>© 2022 All Rights Reserved.</p>
            </div>
        </div>
    </div>

</footer>
  )
}
