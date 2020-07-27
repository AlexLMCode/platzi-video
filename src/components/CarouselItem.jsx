import React from 'react';
import PropTypes from 'prop-types';

import logoPlay from '../assets/images/play-icon.png';
import logoPlus from '../assets/images/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRaiting, duration }) => {

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt=""/>
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={logoPlay} alt="Play Icon"/>
          <img className="carousel-item__details--img" src={logoPlus} alt="Plus Icon"/>
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{year} {contentRaiting} {duration} minutes</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number
};

export default CarouselItem;
