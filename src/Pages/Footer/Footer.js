import React from 'react';
import "./Footer.css";
import {SiFacebook} from 'react-icons/si';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

export default function Footer()
{

    return(
        <>
        <div className="bg-black footerStyle h-[40px] flex flex-row flex-grow justify-center" >
            <p className='flex flex-row items-center gap-2 py-2 text-center text-white'> &copy; Quality Assurance 2022  &nbsp;|<a className='hover:text-orange-500' href='https://www.facebook.com/'><SiFacebook /></a>  &nbsp; <a className='text-[20px] hover:text-orange-500' href='https://www.instagram.com/'><AiFillInstagram /></a>  &nbsp; <a className='hover:text-orange-500 text-[20px]' href='https://twitter.com/?lang=en-in'><AiFillTwitterCircle /></a>  &nbsp; <a className='hover:text-orange-500 text-[20px]' href='https://in.linkedin.com/'><AiFillLinkedin /></a> </p>
        </div>
        </>
    )
}