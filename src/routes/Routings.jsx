import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { Dictionary } from '../components/Dictionary';
import { Cocktails } from '../components/Cocktails';
import { Exchange } from '../components/Exchange';
import { Random } from '../components/Random';
import { Login } from '../components/Login';
import { Footer } from '../components/Footer';
import { NotAuthorized } from "../components/NotAuthorized";
import { EventsMap } from "../components/EventsMap";


export const Routings = () => {
  return (
    <Router>
        <div className="wrapper">
            <Sidebar />
                <div id="content" style={{height: '100vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <Header />

                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/dictionary" element={<Dictionary />} />
                        <Route path="/events-map" element={<EventsMap />} />
                        <Route path="/cocktails" element={<Cocktails />} />

                    </Routes>

                    <div className="pricing">
                    <Routes>

                        <Route path="/exchange" element={<Exchange />} />
                        <Route path="/random" element={<Random />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/not-authorized" element={<NotAuthorized />} />
                    
                    </Routes>
                    
                    
                    <Footer />
                    </div>

                </div>
        </div>
    </Router>
  )
}
