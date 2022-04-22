import { useState } from "react"
import { useEffect } from "react";
import {GoLocation} from "react-icons/go"
import {GoPencil} from "react-icons/go"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"

import UserPageMockAuctions from "../components/UserPageMockAuctions";

const ProfilePageUser = ({idOfLoggedInUser, chosenProfilePage, setChosenProfilePage}) => {

const [user, setUser] = useState()

  useEffect(() => {
    setUser(chosenProfilePage.user)
    setChosenProfilePage({
      user: null
    })
  }, [])

  return (
    (idOfLoggedInUser === user.id) ?

    <div className="profile-page">

      <div className="profile-page-pictures">
        <button className="profile-page-edit-button"><GoPencil className="profile-page-edit-icon"/></button>
        <img src="img/profileBackground.jpg" className="profile-background-picture" />
        <img src={user.imageUrl} className="profile-picture" />
      </div>
          
      <div className="profile-page-body">
        <div className='profile-page-top'>
          <div className="profile-page-info">
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.competence}</p>
            <p><GoLocation size={15} className="profile-page-icons"/>{user.town} - {user.phone}</p>
          </div>
          <div className="profile-cv">
            {user.cvUrl}
          </div>
        </div>
        <div className="profile-bio">
          {user.biography}
        </div>
        <div className="profile-references">
          {user.otherInfo}
        </div>
      </div>

      <div className="profile-page-social-media-links">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <FaTwitter size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedinIn size={25} className="profile-page-icons"/>
        </a>
      </div>

      <div className="previous-commisions">
          <UserPageMockAuctions />
          <UserPageMockAuctions />
          <UserPageMockAuctions />
          <UserPageMockAuctions />
      </div>

    </div>

    :

    <div className="profile-page">

      <div className="profile-page-pictures">
        <img src="img/profileBackground.jpg" className="profile-background-picture" />
        <img src={user.imageUrl} className="profile-picture" />
      </div>
          
      <div className="profile-page-body">
        <div className='profile-page-top'>
          <div className="profile-page-info">
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.competence}</p>
            <p><GoLocation size={15} className="profile-page-icons"/>{user.town} - {user.phone}</p>
          </div>
          <div className="profile-cv">
            {user.cvUrl}
          </div>
        </div>
        <div className="profile-bio">
          {user.biography}
        </div>
        <div className="profile-references">
          {user.otherInfo}
        </div>
      </div>

      <div className="profile-page-social-media-links">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <FaInstagram size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <FaTwitter size={25} className="profile-page-icons"/>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedinIn size={25} className="profile-page-icons"/>
        </a>
      </div>

    </div>
  )
}

export default ProfilePageUser