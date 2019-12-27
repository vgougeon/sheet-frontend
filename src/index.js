import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import * as serviceWorker from './serviceWorker';
import Container from './components/layout/container'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter> 
      <Container />
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
