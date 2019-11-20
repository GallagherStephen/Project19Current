import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; //added for delete button for car line 25 //needed for delete button
import axios from 'axios'; //for delete button
import{Link} from 'react-router-dom'; //for being able to change url /change for change button

class CarObject extends React.Component{

//------------------------------------------------------------------------
//NEEDED FOR DELETE BUTTON :

constructor(){
  super();
  this.DeleteCar = this.DeleteCar.bind(this);
}

DeleteCar(e){
 console.log("delete button clicked");

 axios.delete('http://localhost:4000/api/cars/'+this.props.car._id) //returns a promise that its deleted
.then(window.location.reload())
.catch();



}
//-----------------//IF I TAKE OUT STYLE IN LINE 38 IT STRETCHES THE READ ME PAGE ITEMS TO SIZE OF PAGE---------------------------------------------------------

    render(){
        return(
            <div>
                {/* <h4>{this.props.car.Name}</h4>
                <p>{this.props.car.Released}</p>
                <img src={this.props.car.Picture}></img> */}



                <Card  border="primary" style={{ width: '36rem' }}> 
                


  <Card.Header>{this.props.car.Name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">

    <img align = "center" height = "300" width = "500" src={this.props.car.picture}></img>
      <footer>
      {this.props.car.released}                     
      </footer>
    </blockquote>
  </Card.Body>
  <Button  class = "btn1" variant="danger" onClick={this.DeleteCar}> Delete  </Button>
  <Link to={"/change/"+this.props.car._id} className="btn btn-primary">Change</Link> 

</Card>
            </div>
        )
    }
}
export default CarObject;
