import React from 'react'
import "./CSS/Profile.css";
import {CgProfile} from "react-icons/cg";

const ProfilePage = () => {
  // fetch data from local storage
  const user = JSON.parse(localStorage.getItem('user'))
  
  return (

    <div className='ProfileContainer'>
    {/* create a ui for profile page without img */}
      <div className='Profile'>
        <div className='ProfileIcon'>
          <CgProfile className='Profileimg'/>
        </div>
        <div className='ProfileInfo'>
          <h1>Name: {user.name}</h1>
          <h3>Email: {user.Email}</h3>
          <h3>Phone Number: {user.mobile}</h3>
          <h3>Address: {user.Address}</h3>
        </div>
    </div>
    </div>
  )
}

export default ProfilePage