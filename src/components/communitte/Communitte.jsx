import React, {useContext} from 'react';
import { Context } from '../../context/Context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './communitte.css';

// arrows
function SampleNextArrow(props) {
    const { onClick } = props;
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

const Communitte = (props) => {

    const caruselItems = useContext(Context);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className='container'>
            <h1 className="communitte-header">COMMITTEE</h1>
            {/* carusel */}
            <Slider {...settings}>
                {
                    caruselItems.communitte.map(item => (
                        <div className='com-user-card' key={item.id}>
                            <div className="com-img-box">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3>{item.job}</h3>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </Slider>
            <h3 className="communitte-footer">INTERNATIONAL SCIENTIFIC & TECHNICAL COMMITTEE</h3>
        </div>
    )
}

export default Communitte
