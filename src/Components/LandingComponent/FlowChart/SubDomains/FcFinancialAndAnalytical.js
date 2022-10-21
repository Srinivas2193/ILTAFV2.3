import React from 'react';
import { Link } from 'react-router-dom';
import Bredcrumb from '../../../Molecules/BredCrumbs/Bredcrumb';
import chart1 from './../../../../assets/Images/FlowCharts/flowchart.png';
import chart2 from './../../../../assets/Images/FlowCharts/flowchart.png';
import chart3 from './../../../../assets/Images/FlowCharts/flowchart.png';
import chart4 from './../../../../assets/Images/FlowCharts/flowchart.png';
import FcBlockChain from './FcBlockChain';

const FcFinancialAndAnalytical = () => {

  const FcFinancialAndAnalytical = [
    { img: chart1, url: "flowchart-1", title: "flowchart-1" },
    { img: chart2, url: "flowchart-2", title: "flowchart-2" },
    { img: chart3, url: "flowchart-3", title: "flowchart-3" },
    { img: chart4, url: "flowchart-4", title: "flowchart-4" },
   

  ]
  return (
    <>
            <Bredcrumb to1={`/home/flow-chart`} to2={`/home/flow-chart/financial-analytical`} prev={`Flow Chart`} current={`Financial And Analytics`} />

    <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
        {FcFinancialAndAnalytical.map((res, i) => {
          return (
            <>
              {/* <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img src={res.img} alt={res.title} />
                </div>

                <Link to={`/home/flow-chart/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div> */}
              <FcBlockChain />
            </>
          );
        })}
      </div>
    </>
  )
}

export default FcFinancialAndAnalytical;