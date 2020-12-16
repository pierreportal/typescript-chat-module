import './App.css';
import Header from "./components/baseLayout/Header"
import React from "react"

import devData from "./portfolio-maker-json-data.json"
import SideBar from './components/baseLayout/SideBar';
import RouteMapper from './components/baseLayout/RouteMapper';

const devMode = true

const App: React.FC = () => {
  const {user, configs, templates, articles} = devData;

  const {sideBar, headerMenu, routes, mainTitle} = configs;

  return (
    <div className={`App ${devMode ? "dev-mode":""}`}>

      {headerMenu.displayed && <Header routes={routes} user={user} mainTitle={mainTitle} devMode={devMode}/> }

      <div className="full-size row">
      
        {sideBar.displayed && <SideBar routes={routes} user={user} mainTitle={mainTitle} devMode={devMode}/>}
      
        <RouteMapper routes={routes} prefix={""}/>
      </div>
    </div>
  );
}

export default App;
