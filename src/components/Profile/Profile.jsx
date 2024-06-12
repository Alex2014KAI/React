import React from 'react';
import classesProfile from './Profile.module.css';

import MyPost from './MyPost/MyPost';
import CartUser from './CartUser/CartUser';


const Profile = ()=>{
    return (
        <div className = {classesProfile.content}> 
        <CartUser />
        <MyPost />
      </div>
    );
}

export default Profile;