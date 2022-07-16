import React from "react";
import { FaGithub, FaSteam, FaInstagram } from 'react-icons/fa';

function Skill()
{
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-1">
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
            <div className="flex justify-center mt-2">
                <p className="text-black mb-4">
                    Made with <span className="mr-2" role="link" aria-label='heart'>💙</span>by<a className="text-blue-500"> Alif Zulfanur</a>
                </p>
            </div>
        </div>
    )
}

export default Skill;