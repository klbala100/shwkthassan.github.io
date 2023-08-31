import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
            <a href="https://facebook.com" target="_blank"><BsFacebook/></a>
            <a href="https://telegram.com" target="_blank"><BsTelegram/></a>

        </div>
    )
}

export default HeaderSocials