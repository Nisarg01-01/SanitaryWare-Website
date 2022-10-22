import React from 'react'
import "./CSS/Profile.css";
const ProfilePage = () => {
  // fetch data from local storage
  const user = JSON.parse(localStorage.getItem('user'))
  
  return (

    <div className='ProfileContainer'>
      <h1>Profile Page</h1>
      <h2>{user.name}</h2>
      <h2>{user.Email}</h2>

    </div>
  )
}

export default ProfilePage