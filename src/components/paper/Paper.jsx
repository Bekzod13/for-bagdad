import React, {useContext} from 'react';
import { Context } from '../../context/Context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './paper.css';


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

const Paper = (props) => {

    const papers = useContext(Context);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className='container'>
            <h1 className="communitte-header">COMMITTEE</h1>
            {/* carusel */}
            <Slider {...settings}>
                {
                    papers.papers.map(item => (
                        <div className='paper-card' key={item.id}> 
                            <img src={item.image} alt={item.title} />
                            <div className='paper-title'>{item.title}</div>
                        </div>
                    ))
                }
            </Slider>
            <h3 className="communitte-footer">Call For tutorials</h3>
        </div>
    )
}

export default Paper
