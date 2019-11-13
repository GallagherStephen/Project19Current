import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; //added for delete button for movie line 25 //needed for delete button
import axios from 'axios'; //for delete button
import{Link} from 'react-router-dom'; //for being able to change url /edit for edit button

class MovieItem extends React.Component{

//------------------------------------------------------------------------
//NEEDED FOR DELETE BUTTON :

constructor(){
  super();
  this.DeleteMovie = this.DeleteMovie.bind(this);
}

DeleteMovie(e){
 console.log("delete button clicked");

 axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id) //returns a promise that its deleted
.then()
.catch();



}
//-----------------//IF I TAKE OUT STYLE IN LINE 38 IT STRETCHES THE READ ME PAGE ITEMS TO SIZE OF PAGE---------------------------------------------------------

    render(){
        return(
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img> */}



                <Card  border="primary" style={{ width: '28rem' }}> 
                


  <Card.Header>{this.props.movie.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.movie.poster}></img>
      <footer>
      {this.props.movie.year}                     
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteMovie}>Delete      </Button>
  <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link> 

</Card>
            </div>
        )
    }
}
export default MovieItem;