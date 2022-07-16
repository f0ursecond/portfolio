import React from "react";
import ScrollIntoView from 'react-scroll-into-view';

import {FaChevronDown} from 'react-icons/fa';

function About()
{
    return (
        <div className="max-w-4xl mt-10 mx-auto">
            <p className="text-2xl text-black md:text-3xl font-bold text-center">
                Hello!
            </p>
            <p className="text-1xl text-black md:text-4xs  text-center pt-1">
                Nama Saya Alif Zulfanur berasal dari Semarang dan berumur 17 Tahun.
            </p>
            <p className="text-1xl text-black md:text-4xs  text-center pt-1">
                Saya sedang menekuni Flutter dan React Js , walaupun gk tekun-tekut banget.
            </p>


            <ScrollIntoView selector="">
                <div className="mx-auto p-20">
                    <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-300'/>
                </div>
            </ScrollIntoView>
        </div>
    )    
}

export default About;