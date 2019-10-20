import React from 'react';
import './App.css';
import Home from "./views/Home"
import MovieInfo from "./views/MovieInfo";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
function App() {
  return (
    <>

            <BrowserRouter basename={process.env.public_url}>
                <Header/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path={"/:event"} component ={MovieInfo}/>
                    <Route render={() => (
                        <Redirect to="/"/>
                    )}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </>
  );
}

export default App;
