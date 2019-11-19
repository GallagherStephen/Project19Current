import React from 'react';
import '../App.css';

class Contact extends React.Component {



  render() {
    return (
      <div className="App">
        <h1 font= "sans-serif-medium">Contact Page</h1>
        <img width = "300" height= "200" src="https://middle.pngfans.com/20190416/tr/contact-number-icon-png-computer-icons-mobile-phon-18f8b9cf27c92026.jpg" alt="Flowers in Chania"></img> 
        <h2>Curent Time : {new Date().toLocaleTimeString()}.</h2>
        <h7>*Website Maintenance due at 12:00pm*</h7>
        <h2> </h2>
        <h4></h4>
        <h4>Email:cars@hotmail.com</h4>
        <h4></h4>
        <h4>Phone: 091-57800</h4>



      </div>
    );
  }
}

export default Contact;