import React from 'react'
import { ProfileContainer } from './style'
import nImg from '../../assets/images/noUser.webp'
function Profile() {
  return (
    <ProfileContainer>
        <ProfileContainer.Img src={nImg} alt='profile img'/>
        <div>
            <ProfileContainer.Name>Sardorbek Muhtorov</ProfileContainer.Name>
            <ProfileContainer.Email>s.muhtorov@gmail.com </ProfileContainer.Email>
        </div>
    </ProfileContainer>
  )
}

export default Profile;