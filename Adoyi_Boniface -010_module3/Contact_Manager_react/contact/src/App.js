import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Header from './Components/Layout/Header';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import { Provider } from './context';
import Contacts from './Components/Contacts/Contacts';
import AddContact from './Components/Contacts/AddContacts';
import EditContact from './Components/Contacts/EditContact';


export class App extends Component {
  render() {
    return (
      <Provider>
    <BrowserRouter>
         <div className="App">
        <Header headName="Contact Manager"/>
        <div className="container">
        <Switch>
        <Route exact path="/"  component={Contacts}/>
        
                <Route path="/Contact/add" exact component={AddContact}/>
                <Route path="/Contact/edit/:id" exact component={EditContact}/>
                <Route path="/" exact component={Contacts}/>
                <Route exact path="/about"  component={About}/>
                <Route component={NotFound}/>




                </Switch>
      
      </div>
      </div>
      </BrowserRouter>
      </Provider>
    )
  }
}

export default App
