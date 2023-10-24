import React from 'react';
import "./ProfileUser.css";
import Navbar from '../../components/navbar/Navbar';
import ProfileCard from '../../components/profilecard/ProfileCard';
import GameSlider from '../../components/games-slider/GameSlider';

const ProfileUser = () => {
    return (
        <div className='profile-user' >
            <nav>
                <Navbar />
            </nav>
            <section>
                <ProfileCard />
            </section>
            <main>
                <div className="slider-head" >
                    Currently Playing
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Saved Games
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Games Owned
                </div>
                <GameSlider />
            </main>
        </div>
    )
}

export default ProfileUser