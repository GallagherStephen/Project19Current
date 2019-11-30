import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Content extends React.Component {



  render() {
    return (
      <div className="App" style ={ { backgroundImage: "url('https://i.pinimg.com/originals/66/fe/3f/66fe3fb9d3f51c1a781d45a32ab39935.jpg')" } } >
        
        <Carousel>
  <Carousel.Item  >
    <Carousel.Caption>
      <h3>Welcome to Car Central!</h3>
      <p>Look no Further,We have everything</p>
    </Carousel.Caption>
    <img
       height="610"
      className="d-block w-100"
      src="https://i.pinimg.com/originals/fe/c0/81/fec0811daca1c2e32cfad6c861097659.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      height="610"
      className="d-block w-100"
      src="https://wallpapersmug.com/download/3840x2160/2a8e9b/luxury-car-Bugatti-Chiron-4k.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>No1 place for Car Information!</h3>
      <p>Models , Year , Description</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height="610"
      className="d-block w-100"
      src="https://i.pinimg.com/originals/7f/fc/6c/7ffc6cca4f6566eef3a9bf79999f2b1d.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Enjoy the Content</h3>
      <p>Even add to it if you wish!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>
    );
  }
}

export default Content;