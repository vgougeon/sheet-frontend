import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import Sidenav from "./sidenav/sidenav";
import Header from "./header/header";
import Home from '../views/home/home'
import './container.sass'



const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/games" component={null} />
    <Route exact path="/user/:username/:menu?" component={null} />
    <Route exact path="/game/:id/:menu?" component={null} />
    <Route exact path="/party/:game?" component={null} />
  </Fragment>
)
const Container = () => {
  return (
    <div className="flex">
      <Sidenav />
      <div className="w-100">
        <Header />
        <section>
          <Routes />
        </section>
      </div>
    </div>
  );
}

 
export default Container;