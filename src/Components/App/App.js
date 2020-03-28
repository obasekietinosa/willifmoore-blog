import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Posts from '../Posts/Posts';
import Default from '../Default/Default';
import PrivacyPolicy from '../Pages/PrivacyPolicy';

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
            <Route path="/privacy">
              <PrivacyPolicy />
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
