import React from 'react';
import { Link } from 'react-router-dom';
import {SiApachejmeter} from 'react-icons/si';
import {SiWebflow} from 'react-icons/si';
import {DiAndroid} from 'react-icons/di';
import {SiApple} from 'react-icons/si';
import {GiTaurus} from 'react-icons/gi';
import {GoBug} from 'react-icons/go';


const PTAnalytics = () => {

  const PTAnalytics = [
    { icon: <SiApachejmeter />, url: "jmeter-api", title: "JMeter API" },
    { icon: <SiWebflow />, url: "jmeter-web", title: "JMeter WEB" },
    { icon: <DiAndroid />, url: "jmeter-android", title: "JMeter Android" },
    { icon: <SiApple />, url: "jmeter-ios", title: "JMeter ios" },
    { icon: <GiTaurus />, url: "jmeter-taurus", title: "JMeter Taurus" },
    { icon: <GoBug />, url: "locust", title: "Locust" },

    
  ]
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center gap-12 px-5 mt-14 ">
        {PTAnalytics.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/performance-testing/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default PTAnalytics