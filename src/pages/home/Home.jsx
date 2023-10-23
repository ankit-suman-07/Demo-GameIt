import React from 'react';
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import ImageSlider from '../../components/image-slider/ImageSlider';
import GameSlider from '../../components/games-slider/GameSlider';
import PassPlans from '../../components/pass-plans/PassPlans';

const Home = () => {
    return (
        <div className='home' >
            <nav>
                <Navbar />
            </nav>
            <section>
                <ImageSlider />
            </section>
            <main>
                <div className="slider-head" >
                    Continue Playing
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Role-Playing Games
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Action-Adventure Games
                </div>
                <GameSlider />

                <PassPlans />
            </main>
        </div>
    )
}

export default Home