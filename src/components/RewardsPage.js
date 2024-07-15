import React from 'react';
import './Sidebar.js';
import './Widget.js'
import './RewardsPage.css'; 

function RewardsPage() {
    return (
        <div className="rewards-page">
            <h1>Your Rewards</h1>
            <div className="rewards-container">
                <div className="points">
                    <h2>Available Points</h2>
                    <p>12,043 Points</p>
                    <p>Equals $144.21</p>
                </div>
                <div className="actions">
                    <button className="earn-button">Earn</button>
                    <button className="redeem-button">Redeem</button>
                </div>
                <div className="refer-friends">
                    <h3>Refer your Friends</h3>
                    <p>You get a coupon voucher</p>
                    <p>They get a free shipping coupon</p>
                    <small>**terms & conditions apply**</small>
                </div>
            </div>
        </div>
    );
};

export default RewardsPage;
