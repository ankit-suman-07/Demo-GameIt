import React from 'react';
import "./GamesGrid.css";

import Navbar from '../../components/navbar/Navbar';
import GamesGridCard from './GamesGridCard';



import Mario from "../../assets/Mario.jpg";
import GTA from "../../assets/GTA.jpg";
import SpiderMan from "../../assets/Spider Man.jpg";
import EldenRings from "../../assets/Elden Rings.jpg";
import GOW from "../../assets/God of War.jpg";
import AC from "../../assets/slider_4.png";
import Batman from "../../assets/Batman.jpg";
import Witcher from "../../assets/witcher_3.jpg";
import Skyrim from "../../assets/Skyrim.jpg";

const GamesGrid = () => {



    const images = [
        Skyrim,
        Batman,
        Mario,
        GTA,
        SpiderMan,
        EldenRings,
        GOW,
        AC,
        Batman,
        Mario,
        GTA,
        SpiderMan,
        Witcher,
        Skyrim,
        Batman,
        Mario,
        GTA,
        SpiderMan,
        EldenRings,
        GOW,
        AC,
        Batman,
        Mario,
        GTA,
        SpiderMan,
        Witcher,
        Skyrim
    ];

    const names = [
        "Skyrim", "Batman: Arkham Knight", "Mario", "Grand Theft Auto", "Spider Man", "Elden Rings",
        "God Of War", "Assassins Creed", "Batman: Arkham Knight", "Mario",
        "Grand Theft Auto", "Spider Man", "Witcher 3", "Skyrim", "Batman: Arkham Knight",
        "Mario", "Grand Theft Auto", "Spider Man", "Elden Rings",
        "God Of War", "Assassins Creed", "Batman: Arkham Knight", "Mario",
        "Grand Theft Auto", "Spider Man", "Witcher 3", "Skyrim"
    ];

    return (
        <div className='games-grid' >
            <nav>
                <Navbar />
            </nav>

            <main className='games-grid-box'>

                {
                    images.map((image, idx) => {
                        return (
                            <div key={idx} >
                                <GamesGridCard image={image} name={names[idx]} />
                            </div>
                        );
                    })
                }


            </main>
        </div>
    )
}

export default GamesGrid