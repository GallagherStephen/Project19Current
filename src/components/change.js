import React from 'react'; 
import '../App.css';
import axios from 'axios'; //to talk to the server 
import { thisExpression } from '@babel/types';

class Change extends React.Component {

  constructor(props){
    super(props);

    this.state = {Name: '',
                  Released: '',
                  Picture: '',
                  Information: '',
                  _id:'',
                  Base64Image: ''}; //for embedded image


    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleChangeInformation = this.handleChangeInformation.bind(this);
    this.handleChangeCarReleased = this.handleChangeCarReleased.bind(this);
    this.handleChangeCarPicture = this.handleChangeCarPicture.bind(this);
    this.handleEmbeddedImage = this.handleEmbeddedImage.bind(this); //for embedded image
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //-------------------------------------------------
  //HANDLE CHANGE EVENTS:
  //-------------------------------------------------
  handleChangeCarName(e) {
    this.setState({Name: e.target.value});
  }

  handleChangeCarReleased(e) {
    this.setState({Released: e.target.value});
  }

  handleChangeInformation(e){
    this.setState({Information: e.target.value});
  }


  getBase64(file,cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    }
    reader.onerror = function (error){
    console.log('Error:',error);
  };
}




 //for embedded image below:
  handleEmbeddedImage(e) {
    this.getBase64(e.target.files[0] , (base64) => {
      this.setState({Base64Image:base64})
    });
  }


  
  handleChangeCarPicture(e) {
    this.setState({Picture: e.target.value});
  }
  //-------------------------------------------------

  handleSubmit(e) {
    alert( 'Car:  ' + this.state.Name + "  "  + this.state.Released + "  "  + this.state.Information + "  " + this.state.Picture);
    e.preventDefault();

    const newCar = {
      name:this.state.Name,
      released:this.state.Released,
      information:this.state.Information,
      picture:this.state.Picture
    }

    axios.put('http://localhost:4000/api/cars/' + this.state._id, newCar) //takes the url of car we are editing and the body 
    .then()
    .catch()

    //the following to make the inputs of edit blank after submit button Clicked
    this.setState({Name:'',
                   Released:'',
                   Information:'',
                   Picture:'',
                  });
    
  }

  //---------------------------------------------------------
  //FOR EDIT CHANGE USING ID

  //read the data when u click on component
  componentDidMount(){
 alert(this.props.match.params.id) //passes id as part of the url for edit
    axios.get('http://localhost:4000/api/cars/'+ this.props.match.params.id) //comes back with json in url and update state
    .then((Response)=>{
      this.setState({
          _id:Response.data._id,
          Name:Response.data.name,
          Released:Response.data.released,
          Information:Response.data.information,
          Picture:Response.data.picture
      });
    })
    .catch();
  }

  //---------------------------------------------------------
  //WHAT U SEE ON PAGE BELOW:
  //---------------------------------------------------------
  render() { //visual piece
    return (
      <div>
      <h1>Hello from Change component</h1>
      <form onSubmit={this.handleSubmit}>

      <div className='form-group'>
      <label>

        Car Name:
        </label>

        <input type="text" 
         className= 'form-control'  
         value={this.state.Name}  
         onChange={this.handleChangeCarName} />
    </div>

    <div className='form-group'>
      <label>

        Information:
        </label>

        <input type="text" 
         className= 'form-control'  
         value={this.state.Information}  
         onChange={this.handleChangeInformation} />
    </div>

      

      <div className='form-group'>
      <label>
        Car Released:
        </label>

        <input type="text" 
        className= 'form-control'
        value={this.state.Released}
         onChange={this.handleChangeCarReleased} />
         


      <div className = 'form-group'>
        <label>
          Car Picture URL:
          </label>
          <textarea
          rows='3'
          className='form-control'
          value={this.state.Picture}
          onChange={this.handleChangeCarPicture}></textarea>
      </div>



        </div>
        <input type="submit" value="Submit" />

       
        
        <div>
        <label>Real image</label>

            <input
             type="file" 
            className= 'form-control'
           
            onChange={this.handleEmbeddedImage} />
        </div>

        </form>
      <img src={this.state.Base64Image}></img> 
       
    </div>
    );
  }
}

export default Change;
