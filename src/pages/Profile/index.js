import React from 'react'
import SignInSideComp from '../../components/SignInSideComp/SignInSideComp'

const Profile = (props) => {
  return (
    <div>
      Profile{props.user._id}
    </div>
  )
}

export default Profile