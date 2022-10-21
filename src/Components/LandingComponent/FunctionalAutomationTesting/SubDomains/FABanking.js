import React from 'react';
import { Link } from 'react-router-dom';
import {SiSelenium} from 'react-icons/si';
import {SiCypress} from 'react-icons/si';
import {TbLanguageKatakana} from 'react-icons/tb';
import {IoLogoPython} from 'react-icons/io';
import {SiCucumber} from 'react-icons/si';
import {SiProtractor} from 'react-icons/si';
import Bredcrumb from '../../../Molecules/BredCrumbs/Bredcrumb';


const FABanking = () => {

  const FABanking = [
    { icon: <SiSelenium />, url: "selenium", title: "Selenium" },
    { icon: <SiCypress />, url: "cypress", title: "Cypress" },
    { icon: <TbLanguageKatakana />, url: "katalon", title: "Katalon" },
    { icon: <IoLogoPython />, url: "python", title: "Python" },
    { icon: <SiCucumber />, url: "cucumber", title: "Cucumber (BDD)" },
    { icon: <SiProtractor />, url: "protractor", title: "Protractor" },

    
  ]
  return (
    <>
    <Bredcrumb to1={`/home/functional-automation`} to2={`/home/functional-automation/banking`} prev={`Functional And Automation testing`} current={`Banking`} />


    <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
        {FABanking.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/functional-automation/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default FABanking