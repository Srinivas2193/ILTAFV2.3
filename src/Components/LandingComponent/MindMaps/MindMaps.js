import React from 'react';
import { Link } from 'react-router-dom';
import {SiHiveBlockchain} from 'react-icons/si';
import {BsBank2} from 'react-icons/bs';
import {TiPointOfInterest} from 'react-icons/ti';
import {IoIosConstruct} from 'react-icons/io';
import {FaGlobe} from 'react-icons/fa';
import {MdAnalytics} from 'react-icons/md';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {DiGoogleAnalytics} from 'react-icons/di';
import Bredcrumb from '../../Molecules/BredCrumbs/Bredcrumb';

const MindMaps = () => {

  const MindMaps = [
    { icon: <SiHiveBlockchain />, url: "blockchain", title: "Blockchain" },
    { icon: <BsBank2 />, url: "banking", title: "Banking" },
    { icon: <TiPointOfInterest />, url: "fintech", title: "Fintech" },
    { icon: <IoIosConstruct />, url: "construction", title: "Real Estate" },
    { icon: <FaGlobe />, url: "iot", title: "IoT" },
    { icon: <MdAnalytics />, url: "financial-analytical", title: "Financial and Analytical" },
    { icon: <BsFillCartCheckFill />, url: "e-commerce", title: "e-Commerce" },
    { icon: <DiGoogleAnalytics />, url: "analytics", title: "Analytics" },

  ]
  return (
    <>
    {/* <div>
      <span><Link className='text-base hover:text-blue-400' to={`../`}>MindMaps &nbsp; {`>`} &nbsp;</Link> &nbsp; <Link className='text-base hover:text-blue-400' to={`/home/mind-maps`}>Blockchain</Link></span>
    </div> */}
    <Bredcrumb to1={`../`} to2={'/home/mind-maps'} prev={`Home`} current={`MindMaps`} />

    <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
        {MindMaps.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/mind-maps/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default MindMaps