import React from 'react';
import {BrowserRouter as Router,NavLink, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Booking from './Booking';
import Ads from './Ads';
import Reports from './Reports';
import FAQ from './FAQ';

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-voilet bg-voilet">
                    <a className="navbar-brand" href="/">ZotAds</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink  to="/dashboard">Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/ads">Ads
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/booking">Booking
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/reports">Report
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/faq">FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Router>
                        <div>
                            <Route path = '/dashboard' exact component = {Dashboard} />
                            <Route path = '/ads' exact component = {Ads} />
                            <Route path = '/booking' exact component = {Booking} />
                            <Route path = '/reports' exact component = {Reports} />
                            <Route path = '/faq' exact component = {FAQ} />
                        </div>
                    </Router>
            </div>
        )
    }
}