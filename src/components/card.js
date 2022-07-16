import React from "react";
import profile from '../images/profile1.svg';

import { FaGithub, FaSteam, FaInstagram } from 'react-icons/fa';

function Card()
{
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xl mx-auto  p-5 bg-gray-300 rounded-xl">
                <div className="">
                    <img className="w-60 mx-auto " src={profile} alt = 'profile face' />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl text-black">
                        Alif Zulfanur
                    </p>
                    <p className="text-xs  sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Front End Developer & Mobile Developer
                    </p>
                    <div className="flex align-center justify-center mt-4">

                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  rounded-full " href="https://github.com/f0rsecond"> 
                            <FaGithub />                            
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  rounded-full " href="https://steamcommunity.com/id/azulfanur"> 
                            <FaSteam />                       
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  rounded-full " href="https://instagram.com/a.zulfanur"> 
                            <FaInstagram />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;