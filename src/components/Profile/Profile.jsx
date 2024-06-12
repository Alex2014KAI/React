import React from 'react';
import classesProfile from './Profile.module.css';

console.log(classesProfile);

const Profile = ()=>{
    return (
        <div className = {classesProfile.content}> 
        <img className = {classesProfile.content__img} src='https://img.freepik.com/premium-vector/modern-color-gradient-background-wallpaper-with-abstract-wave-objects_571074-254.jpg'></img>
        <div className = {classesProfile.cart}> 
          <img className = {classesProfile.cart__img} src='https://kartinki.pics/uploads/posts/2022-02/1645750181_1-kartinkin-net-p-kartinki-milie-sobachki-1.jpg'></img>
          <div className = {classesProfile.cart__content}>
            <div className = {classesProfile.Name}> Alex P</div>
            <div className = {classesProfile.dataBritch}> Data of Dritch: 2 December</div>
            <div className = {classesProfile.City}> City: London</div>
            <div className = {classesProfile.Education}> Education: BSU'1</div>
            <div className = {classesProfile.WebSite}> Web Site: http://</div>
          </div>
        </div>
        <div className={classesProfile.content__myPost}>
          <h2> My post </h2>
          <input className={classesProfile.input} placeholder='your news...'></input>
          <button className={classesProfile.btn}> Send </button>
        </div>
        <div className={classesProfile.content__otherPosts}>
          <ul>
            <li> Hey, why nobody love me?</li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
      </div>
    );
}

export default Profile;