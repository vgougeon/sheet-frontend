import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Sidenav from "./sidenav/sidenav";
import Header from "./header/header";
import Home from '../views/home/home'
import './container.sass'
import Sheets from '../views/sheets/sheets';

function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100%)' }
  })
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/sheets" component={Sheets} />
        <Route exact path="/user/:username/:menu?" component={null} />
        <Route exact path="/game/:id/:menu?" component={null} />
        <Route exact path="/party/:game?" component={null} />
      </Switch>
    </animated.div>
  ))
}
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