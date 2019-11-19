import React from 'react'
import Cars from './cars';
import axios from 'axios'; //imported for axios

class ContentPage extends React.Component{

    state = {
        cars: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/cars') //the servers url which gets the cars api data . not allowed to work untill install cors in server.js
        .then((response)=> {
            this.setState({cars:response.data.cars}) //must be .cars as api cars will get u back the cars section of the api
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        return(
            <div>
                <h1> Luxury sports Cars </h1>
                <Cars myCars={this.state.cars}></Cars>
            </div>
        );
    }
}
export default ContentPage;
