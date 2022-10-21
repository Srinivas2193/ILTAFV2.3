import React from 'react';
import { Link } from 'react-router-dom';
import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {IoLogoPython} from 'react-icons/io';
import {SiPostman} from 'react-icons/si';
import Bredcrumb from '../../../Molecules/BredCrumbs/Bredcrumb';


const ApiFinancialAndAnalytical = () => {

  const ApiFinancialAndAnalytical = [
    { icon: <FaJava />, url: "java", title: "Java" },
    { icon: <TbBrandJavascript />, url: "javascript", title: "Javascript" },
    { icon: <IoLogoPython />, url: "python", title: "Python" },
    { icon: <SiPostman />, url: "newman", title: "Newman" },
    
  ]
  return (
    <>
        <Bredcrumb to1={`/home/api-testing`} to2={`/home/api-testing/financial-analytical`} prev={`API Testing`} current={`Financial Analytics`} />

    <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
        {ApiFinancialAndAnalytical.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/api-testing/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default ApiFinancialAndAnalytical