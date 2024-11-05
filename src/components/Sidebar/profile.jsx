import React from 'react'
import { ProfileContainer } from './style'
import nImg from '../../assets/images/noUser.webp'
function Profile() {
  return (
    <ProfileContainer>
        <ProfileContainer.Img src={nImg} alt='profile img'/>
        <div>
            <ProfileContainer.Name>Asadbek</ProfileContainer.Name>
            <ProfileContainer.Email>asadbek@gmail.com </ProfileContainer.Email>
        </div>
    </ProfileContainer>
  )
}

export default Profile;