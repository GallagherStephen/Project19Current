import React from 'react';
import '../App.css';

class Contact extends React.Component {



  render() {
    return (
      <div className="App" style ={ { backgroundImage: "url('https://i.pinimg.com/originals/66/fe/3f/66fe3fb9d3f51c1a781d45a32ab39935.jpg')" } }>
        <h1 font= "sans-serif-medium">Welcome!</h1>
        <h5 font= "sans-serif-medium">Please find below the websites contact information details below.</h5>
        <h5>please feel free to contact us at any time and we will get back to you as soon as possible!.</h5>
        <img width = "140" height= "100" src="http://www.pngmart.com/files/7/Call-Button-PNG-Clipart.png" alt="Flowers in Chania"></img> 
        <h2>Curent Time :</h2>
        <h3> {new Date().toLocaleTimeString()}</h3>
        <h7>*Website Maintenance due at 12:00pm 1st/Jan/20*</h7>
        <h2> </h2>
        <br></br>
        <h4>Email:</h4>
        <h7>cars@hotmail.com</h7>
        <br></br>
        <br></br>
        <h4>Phone:</h4>
        <h7>091-57800</h7>
        
           
           <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

      </div>
    );
  }
}

export default Contact;