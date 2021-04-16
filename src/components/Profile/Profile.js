import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">My Account</div>
            <hr />
            <div className="profile-info">
                <div className="profile-order">
                    <div className="section-heading">Order History</div>
                    <div className="my-order">
                        <img src="https://images.unsplash.com/photo-1547409594-d172436140a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80" 
                            className="order-image"/>
                        <div className="order-info">
                            <div className="order-name">some shirt</div>
                            <div className="order-date">12/12/2012</div>
                        </div>
                    </div>
                </div>
                <div className="profile-address">
                    <div className="section-heading">My Addresses</div>
                    <div className="address">221-B Baker Street, London, UK</div>
                    <form className="add-address">
                        <label>Add new Address</label>
                        <textarea id="new-address" name="new-address" rows="5" cols="33"></textarea>
                        <button className="submit-address">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
