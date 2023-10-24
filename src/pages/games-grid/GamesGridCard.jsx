import React, { useState } from 'react';
import "./GamesGrid.css";

import InfoIcon from "../../assets/info.png";

const GamesGridCard = ({ image, name }) => {
    const [show, setShow] = useState(false);

    const showDetails = () => {
        setShow(!show);
    }
    return (
        <div className='outer-grid-box'>
            <div className='inner-grid-box' >
                <img src={image} alt={name} />
                <div className='game-grid-details' >
                    <div className='grid-details-btn' >
                        <img src={InfoIcon} alt='info-icon' onClick={showDetails} />
                    </div>

                    <div className={show ? 'inner-details' : 'hide-details'} >
                        <span>{name}</span>
                        <span>EA Games</span>
                        <span>Genre</span>
                        <span>March, 2021</span>
                        <span>PC, PS4, PS5, XBOX</span>
                        <span>Rating: 9.6</span>
                    </div>
                </div>
            </div>
            <div className='game-names' >
                {
                    name
                }
            </div>

        </div>
    )
}

export default GamesGridCard