import React from 'react';
import CarObject from './carobject';

class Cars extends React.Component{

    render(){
        return this.props.myCars.map((car)=>{
            //console.log({car});
            return <CarObject key={car.picture} car={car}></CarObject>
        });
    }
}
export default Cars;