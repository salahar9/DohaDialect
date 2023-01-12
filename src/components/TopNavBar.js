import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavBar.css';

class TopNavBar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12">
                <br></br>
                </div>
                <div className="col s12">
                    <nav className="black">
                        <div className="nav-wrapper">
                            <ul className="black">
                                <li><NavLink to="/group1">Group A</NavLink></li>
                                <li><NavLink to="/group2">Group B</NavLink></li>
                                <li><NavLink to="/group3">Group C</NavLink></li>
                                <li><NavLink to="/group4">Group D</NavLink></li>
                                <li><NavLink to="/group5">Group E</NavLink></li>
                                <li><NavLink to="/group6">Group F</NavLink></li>
                                <li><NavLink to="/group7">Group G</NavLink></li>
                                <li><NavLink to="/group8">Group H</NavLink></li>
                                <li className="Grey"><NavLink to="/knockout">Knockout</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default TopNavBar;