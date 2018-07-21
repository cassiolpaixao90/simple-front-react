import React from 'react'

class SideNavComponent extends React.Component {

    render(){
        return(
            <div className="sidebar sidebar-left">
                <div className="squish-container">
                    <h3>Explore the Demos:</h3>
                    <nav className="example-menu">
                        <ul>
                            <li><a href="#">Flexbox Menus</a></li>
                            <li><a href="#">Card Layout</a></li>
                            <li><a href="#">Holy Grail</a></li>
                            <li><a href="#">All Together Now</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default SideNavComponent;