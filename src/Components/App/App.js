import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Default from '../Default/Default';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route component={ Default } />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
