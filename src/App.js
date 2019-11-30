import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Add from './components/add';
import Change from './components/change';
import ContentPage from './components/contentPage';
import Contact from './components/contact';
import About from './components/about';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar bg="light" variant="Primary">
            <Nav className="mr-auto"> 
              <img  src="https://www.wolfrace.co.uk/images/alloywheels/ats_streetrallye_rally_white.jpg"
                width="50"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"/>                   
              <Nav.Link href="/">Homepage</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/content">Content</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
              <Nav.Link href="/contact">contact</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/add" component={Add} />
            <Route path="/about" component={About} />
            <Route path="/content" component={ContentPage} />
            <Route path="/change/:id" component={Change} />   
            <Route path="/contact" component={Contact} /> 
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;