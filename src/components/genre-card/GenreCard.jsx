import React from 'react';
import "./GenreCard.css";

const GenreCard = ({ image, tag }) => {
    return (
        <div className='genre-card' >
            <img src={image} alt={tag + " image"} />
            <div className='genre-card-tag' >
                <span>{tag}</span>
            </div>
        </div>
    )
}

export default GenreCard