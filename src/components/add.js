import React from 'react';
import axios from 'axios'; //imported

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Name: '',
                  Released: '',
                  Information: '',
                  Picture: ''};

                  
    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleChangeCarReleased = this.handleChangeCarReleased.bind(this);
    this.handleChangeInformation = this.handleChangeInformation.bind(this);
    this.handleChangeCarPicture = this.handleChangeCarPicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCarName(e) {
    this.setState({Name: e.target.value});
  }

  handleChangeCarReleased(e) {
    this.setState({Released: e.target.value});
  }

  handleChangeInformation(e) {
    this.setState({Information: e.target.value});
  }

  handleChangeCarPicture(e) {
    this.setState({Picture: e.target.value});
  }

  //------------------------------------------------------------------------------------------------------
  // for (9) in server.js for writing data 
  //------------------------------------------------------------------------------------------------------

  handleSubmit(e) {
    alert( 'Car:  ' + this.state.Name + "  "  + this.state.Released + "  "+ this.state.Information + "  " + this.state.Picture);
    e.preventDefault();

    const newCar = {
      name:this.state.Name,
      released:this.state.Released,
      information: this.state.Information,
      picture:this.state.Picture
    }
    axios.post('http://localhost:4000/api/cars',newCar)
    .then(window.location.reload())
    .catch();
  }


  

  render() {
    return (
      <div style ={ { backgroundImage: "url('https://i.pinimg.com/originals/66/fe/3f/66fe3fb9d3f51c1a781d45a32ab39935.jpg')" } }>
        <h1>Welcome!</h1>
        <h1>Feel free to add Luxury Cars To the website Below!</h1>
        <img width = "400" height= "200" src="https://purepng.com/public/uploads/large/purepng.com-jaguar-f-type-carcarvehicletransportjaguar-961524666606ptsmh.png" alt="Flowers in Chania"></img> 
        <form onSubmit={this.handleSubmit}>

        <div className='form-group'>
        <label>
          car name:
          </label>

          <input type="text" 
          placeholder='Input Name Here'
          className= 'form-control'
          value={this.state.Title}
           onChange={this.handleChangeCarName} />
      </div>

      <div className='form-group'>
        <label>
          Information:
          </label>

          <input type="text" 
          placeholder='Input Information Here'
          className= 'form-control'
          value={this.state.Information}
           onChange={this.handleChangeInformation} />
      </div>
        

        <div className='form-group'>
        <label>
          Car Released:
          </label>

          <input type="text" 
          placeholder='Input Year Here'
          className= 'form-control'
          value={this.state.Released}
           onChange={this.handleChangeCarReleased} />

 
        <div className = 'form-group'>
          <label>
            Car Picture URL:
            </label>
            <textarea
            rows='3'
            placeholder='Input picture URl Here'
            className='form-control'
            value={this.state.Picture}
            onChange={this.handleChangeCarPicture}></textarea>
        </div>
          </div>
          <input type="submit" value="Submit" />
          

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </form>
        </div>
    );
  }
}

export default Add;
