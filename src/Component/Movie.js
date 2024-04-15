import React from 'react';
import './movie.css';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

function Movie({ imgUrl, title, subtitle, duration, type, description }) {
  return (
    <div className='main-cont' style={{
        backgroundImage:`linear-gradient(45deg,
            rgba(0, 0, 0, 0.75),
            rgba(8, 83, 156, 0.75)), url(${imgUrl})`
    }}>
      <div className='container'>
        <div className='img'>
          <img src={imgUrl} alt='' />
        </div>
        <div className='title-cont'>
          <label>{title}</label>
          <label>{subtitle}</label>
          <div>
            <label>{duration}</label>
            <label>{type}</label>
          </div>
        </div>
      </div>
      <div className='disc'>
        <label>{description}</label>
      </div>
      <div className='share'>
        <div><FaShareAlt/></div>
        <div><FaCommentAlt/></div>
        <div><FaHeart/></div>
      </div>
    </div>
  );
}

export default Movie;
