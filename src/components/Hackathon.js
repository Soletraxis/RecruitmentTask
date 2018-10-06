import React, {Component} from 'react';
import "./Hackathon.css"
import { Carousel } from 'react-bootstrap'
import PrzemyslawImg from '../img/ct/przemyslaw.jpg'
import DominikImg from '../img/ct/dominik.jpg'

class Hackathon extends Component {
    render() {
      const carouselContent = [ DominikImg, PrzemyslawImg, PrzemyslawImg]

        return (
            <div className="hackathon">
                <Carousel
                  bsClass='carousel'
                >
                  {carouselContent.map((user) =>
                    <Carousel.Item>
                      <div className='containerImg'>
                        <img className='img' alt='900x600' src={user} />
                      </div>
                    </Carousel.Item>
                  )}
                </Carousel>
            </div>
        );
    }
}

export default Hackathon;
