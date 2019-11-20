import React from 'react';
import '../App.css';

class Content extends React.Component {



  render() {
    return (
      <div className="App">
        <h1 font= "sans-serif-medium">Car Central</h1>
        <img width = "600" height= "400" src="https://purepng.com/public/uploads/large/purepng.com-jaguar-f-type-carcarvehicletransportjaguar-961524666606ptsmh.png" alt="Flowers in Chania"></img> 
        <h2>Curent Time : {new Date().toLocaleTimeString()}.</h2>
        <h7>*Website Maintenance due at 12:00pm 1st/Jan/20*</h7>
      </div>
    );
  }
}

export default Content;