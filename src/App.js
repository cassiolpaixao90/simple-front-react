import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import {TableComponent} from "./components/TableComponent";
import { Button } from 'primereact/components/button/Button';
import NavBarComponent from './components/common/NavBarComponent'
import SideNavComponent from './components/common/SideNavComponent'
import MainComponent from './components/common/MainComponent'


class App extends Component {
  render() {
    return (
      <div className="outer-wrap">
        <NavBarComponent />
        <div className="content"> 
            <SideNavComponent />
            <MainComponent />
        </div>
       

        {/* <a href="#menu" id="menuLink" className="menu-link">

          <span></span>
        </a> */}

        {/* <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Ciço Livraria</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
            </ul>
          </div>
        </div> */}

    
      </div>
    );
  }
}

export default App;

{/* <Button label="Adicionar" icon="fa-plus" iconPos="right" style={{ marginBottom: 10}} />
<TableComponent /> */}