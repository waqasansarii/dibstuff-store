import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Offer from "./containers/Offer";
// import Home from "./containers/Home";
// import Signup from "./containers/Signup";
// import Login from "./containers/Login";
// import Navbar from "./components/Navbar/Navbar";
// import InputBar from "./components/Navbar/InputBar/InputBar";
// import About from "./containers/About";
import Card from './components/card/card'
import "./App.css";
import AppRouter from './router/router'

export default function App() {
  return (
   <>
    <AppRouter />
    {/* <Card  value='hello' text='hfdjf'  onClick={()=>console.log('card1')}/> */}
    {/* <Card  value='world' text='hfdjf' onClick={()=>console.log('card2')}  /> */}
   </>
    // <Router>
    //   <Switch>
    //     <Route path="/offer">
    //       <Offer />
    //     </Route>
    //     <Route path="/signup">
    //       <Signup />
    //     </Route>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}
