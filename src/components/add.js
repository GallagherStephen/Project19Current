import React from 'react';
import axios from 'axios'; //imported

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Name: '',
                  Released: '',
                  Picture: ''};

                  
    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleChangeCarReleased = this.handleChangeCarReleased.bind(this);
    this.handleChangeCarPicture = this.handleChangeCarPicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCarName(e) {
    this.setState({Name: e.target.value});
  }

  handleChangeCarReleased(e) {
    this.setState({Released: e.target.value});
  }

  handleChangeCarPicture(e) {
    this.setState({Picture: e.target.value});
  }

  //------------------------------------------------------------------------------------------------------
  // for (9) in server.js for writing data 
  //------------------------------------------------------------------------------------------------------

  handleSubmit(e) {
    alert( 'Car:  ' + this.state.Name + "  "  + this.state.Released + "  " + this.state.Picture);
    e.preventDefault();

    const newCar = {
      name:this.state.Name,
      released:this.state.Released,
      picture:this.state.Picture
    }
    axios.post('http://localhost:4000/api/cars',newCar)
    .then(window.location.reload())
    .catch();
  }


  

  render() {
    return (
      <div>
        <h1>Hello from Add component</h1>
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

          

        </form>
        </div>
    );
  }
}

export default Add;
