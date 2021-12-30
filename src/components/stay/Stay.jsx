import React, {useContext} from 'react';
import { Context } from '../../context/Context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './stay.css';


// arrows
function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div
        className="slick-arrow slick-next angle"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev angle"
        onClick={onClick}
      />
    );
  }

const Stay = (props) => {

    const stays = useContext(Context);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className='container'>
            <h1 className="communitte-header">COMMITTEE</h1>
            {/* carusel */}
            <Slider {...settings}>
                {
                    stays.stays.map(item => (
                        <div className='paper-card stay' key={item.id}> 
                            <img src={item.image} alt={item.title} />
                            <div className='paper-title stay-title'>
                                <span>{item.title}</span><br />
                                <a href="#" className='stay-link'>visit website</a>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <h3 className="communitte-footer">Visa Support</h3>
        </div>
    )
}

export default Stay
