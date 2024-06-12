import React from 'react';

import classesCartUser from './CartUser.module.css'


const CartUser = ()=>{
    return (<div>
        <img className = {classesCartUser.content__img} src='https://img.freepik.com/premium-vector/modern-color-gradient-background-wallpaper-with-abstract-wave-objects_571074-254.jpg'></img>
        <div className = {classesCartUser.cart}> 
          <img className = {classesCartUser.cart__img} src='https://kartinki.pics/uploads/posts/2022-02/1645750181_1-kartinkin-net-p-kartinki-milie-sobachki-1.jpg'></img>
          <div className = {classesCartUser.cart__content}>
            <div className = {classesCartUser.Name}> Alex P</div>
            <div className = {classesCartUser.dataBritch}> Data of Dritch: 2 December</div>
            <div className = {classesCartUser.City}> City: London</div>
            <div className = {classesCartUser.Education}> Education: BSU'1</div>
            <div className = {classesCartUser.WebSite}> Web Site: http://</div>
          </div>
        </div>
    </div>
    );
}

export default CartUser;