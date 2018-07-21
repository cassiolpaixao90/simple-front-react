import React from 'react'

class NavBarComponent extends React.Component{


    render(){
        return(
            <div>
                <header className="masthead">
                    <div className="sidebar-switcher">
                        <a href="#" className="sidebar-left-toggle">
                            <i className="fa fa-align-left"></i>
                            <span className="screen-reader-text">Move sidebar to the left</span>
                        </a> 
                        <a href="#" className="sidebar-right-toggle">
                            <i className="fa fa-align-right"></i>
                            <span className="screen-reader-text">Move sidebar to the right</span>
                        </a> 
                        <a href="#" className="no-sidebar-toggle">
                            <i className="fa fa-align-justify"></i>
                            <span className="screen-reader-text">Remove sidebar</span>
                        </a>  
                        <a href="#" className="hide-sidebar-toggle">
                            <i className="fa fa-arrow-circle-right"></i>
                            <span className="screen-reader-text">Remove sidebar</span>
                        </a>
                    </div>

                     <div className="centered">
                        <div className="site-branding">
                            <h1 className="site-title">Flexbox Demo: Full Site</h1>
                        </div>
                    </div>

                    
                     <div className="nav-mixed menu">
                        <nav id="multi-level-nav" className="multi-level-nav" role="navigation">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li className="has-children">
                                    <a href="#">Food<button className="dropdown-toggle" aria-expanded="false"><span className="screen-reader-text">Expand child menu</span></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Chef for Hire</a></li>
                                        <li><a href="#">Catering</a></li>
                                        <li><a href="#">Restaurant</a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#">ClassNamees<button className="dropdown-toggle" aria-expanded="false"><span className="screen-reader-text">Expand child menu</span></button></a>
                                    <ul className="sub-menu">
                                        <li><a href="#">ClassName Schedule</a></li>
                                        <li><a href="#">Register</a></li>
                                        <li><a href="#">Breakfast Class</a></li>
                                        <li><a href="#">Brunch Class</a></li>
                                        <li><a href="#">Lunch Class</a></li>
                                        <li><a href="#">Dinner Class</a></li>
                                        <li><a href="#">Dessert Class</a></li>
                                        <li><a href="#">Baking Class</a></li>
                                        <li><a href="#">Canning Class</a></li>
                                        <li><a href="#">Shopping Class</a></li>
                                        <li><a href="#">Tools Class</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">About</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">The Eat Story</a></li>
                                        <li><a href="#">Meet the Chef</a></li>
                                        <li><a href="#">Meet the Team</a></li>
                                        <li><a href="#">Our Vendors</a></li>
                                        <li><a href="#">Legal</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact</a></li>
                             </ul>
                        </nav>

                        <nav id="social-menu" className="social-menu" role="navigation">
                            <ul>
                                <li><a href="http://twitter.com"><span className="screen-reader-text">Twitter</span></a></li>
                                <li><a href="http://facebook.com"><span className="screen-reader-text">Facebook</span></a></li>
                                <li><a href="http://linkedin.com"><span className="screen-reader-text">LinkedIn</span></a></li>
                                <li><a href="http://youtube.com"><span className="screen-reader-text">YouTube</span></a></li>
                                <li><a href="http://instagram.com"><span className="screen-reader-text">Instagram</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }

}

export default NavBarComponent