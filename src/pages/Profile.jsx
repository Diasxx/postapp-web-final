// Profile.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <img
                src="https://desu.shikimori.one/uploads/poster/characters/17/main_2x-8610114af223365de61e530d7c9681fd.webp"
                alt="Profile"
                className="profile-image"
            />
            <div>
                <h2>Naruto Uzumaki</h2>
                <p className="profile-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    facilisis dapibus felis, sit amet eleifend ipsum suscipit nec.
                </p>
                <div className="additional-info">
                    <p><strong>Age:</strong> 17</p>
                    <p><strong>Occupation:</strong> Hokage</p>
                    <p><strong>Village:</strong> Hidden Leaf Village</p>
                    <p><strong>Ninja Rank:</strong> Genin (formerly), Hokage</p>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
