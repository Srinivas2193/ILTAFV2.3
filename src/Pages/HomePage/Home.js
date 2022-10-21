import React from "react";
// import Cards from "./Cards";
import { BiAnalyse } from "react-icons/bi";
import { FcMindMap } from "react-icons/fc";
import { GiBlackHoleBolas } from "react-icons/gi";
import { FcFlowChart } from "react-icons/fc";
import { GiDigitalTrace } from "react-icons/gi";
import { SiAntdesign } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdMotionPhotosAuto } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { MdSecurity } from "react-icons/md";
import { MdOutlineApi } from "react-icons/md";
import Card from './../../Components/Molecules/Cards/card'
import { Link } from "react-router-dom";

export const Home = () => {


  const domains = [
    {
      id: "d-1",
      title: "Requirement Analysis",
      icon: <BiAnalyse />,
      url:"requirement-analysis",
    },
    {
      id: "d-2",
      title: "Mindmaps",
      icon: <FcMindMap/>,
      url:"mind-maps"
    },
    {
      id: "d-3",
      title: "Inter Locking",
      icon: <GiBlackHoleBolas />,
      url:"inter-locking"
    },
    {
      id: "d-4",
      title: "Flow Chart",
      icon: <FcFlowChart />,
      url:"flow-chart"
    },
    {
      id: "d-5",
      title: "Requirement Traceability",
      icon: <GiDigitalTrace />,
      url:"requirement-traceability"
    },
    {
      id: "d-6",
      title: "Test Design",
      icon: <SiAntdesign />,
      url:"test-design"
    },
    {
      id: "d-7",
      title: "Build and Deployment Process",
      icon: <AiOutlineDeploymentUnit />,
      url:"build-deployment"
    },
    {
      id: "d-8",
      title: "API Testing",
      icon: <MdOutlineApi />,
      url:"api-testing"
    },
    {
      id: "d-9",
      title: "Functional Automation Testing",
      icon: <MdMotionPhotosAuto />,
      url:"functional-automation"
    },
    {
      id: "d-10",
      title: "Performance Testing",
      icon: <GoGraph />,
      url:"performance-testing"
    },
    {
      id: "d-11",
      title: "Security Testing",
      icon: <MdSecurity />,
      url:"security-testing"
    },
  ];


  return (
    <>
      {/* <div className="flex flex-row flex-wrap justify-center gap-16 px-5 mt-10 mb-16 ">
        {domains.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-center items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div> */}
      <Card domains={domains} />

      
    </>
  );
};
export default Home;
