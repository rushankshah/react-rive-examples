import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import SimpleAnimation from './animations/SimpleAnimation';
import KnightAnimation from './animations/KnightAnimation';
import EyeAnimation from './animations/EyeAnimation';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/simple' render={(props) => (
          <SimpleAnimation {...props} file='my_anim.riv' animation='Bounce' />)
        } />
        <Route path='/knight' component={KnightAnimation} />
        <Route path='/eye' component={EyeAnimation} />
      </Switch>
    </div>
  );
}

export default App;
