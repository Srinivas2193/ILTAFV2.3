// import React from 'react';
// import { Link } from 'react-router-dom';
// import chart1 from './../../../../assets/Images/FlowCharts/flowchart.png';
// import chart2 from './../../../../assets/Images/FlowCharts/flowchart.png';
// import chart3 from './../../../../assets/Images/FlowCharts/flowchart.png';
// import chart4 from './../../../../assets/Images/FlowCharts/flowchart.png';

// const FcBlockChain = () => {

//   const FcBlockChain = [
//     { img: chart1, url: "flowchart-1", title: "flowchart-1" },
//     { img: chart2, url: "flowchart-2", title: "flowchart-2" },
//     { img: chart3, url: "flowchart-3", title: "flowchart-3" },
//     { img: chart4, url: "flowchart-4", title: "flowchart-4" },

//   ]
//   return (
//     <>
//     <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
//         {FcBlockChain.map((res, i) => {
//           return (
//             <>
//               <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
//                 <div>
//                   <img src={res.img} alt={res.title} />
//                 </div>
//                 {/* <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
//                   {res.icon}
//                 </div> */}
//                 <Link to={`/home/flow-chart/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   )
// }

// export default FcBlockChain;
import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import chart1 from "./../../../../assets/Images/FlowCharts/flowchart.png";

import chart2 from "./../../../../assets/Images/FlowCharts/flowchart.png";

import chart3 from "./../../../../assets/Images/FlowCharts/flowchart.png";

import chart4 from "./../../../../assets/Images/FlowCharts/flowchart.png";

import ImageViewer from "react-simple-image-viewer";
import Bredcrumb from "../../../Molecules/BredCrumbs/Bredcrumb";

const FcBlockChain = () => {
  const FcBlockChain = [
    { img: chart1, url: "flowchart-1", title: "flowchart-1" },

    { img: chart2, url: "flowchart-2", title: "flowchart-2" },

    { img: chart3, url: "flowchart-3", title: "flowchart-3" },

    { img: chart4, url: "flowchart-4", title: "flowchart-4" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);

    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(1);

    setIsViewerOpen(false);
  };

  const Pics = [chart1, chart2, chart3, chart4];

  return (
    <>
            {/* <Bredcrumb to1={`/home/flow-chart`} to2={`/home/flow-chart/blockchain`} prev={`Flow Chart`} current={`BlockChain`} /> */}

      <div
        className="flex flex-row flex-wrap justify-center px-5 mt-14 mb-52 gap-36 "
        onClick={() => openImageViewer()}
      >
        {FcBlockChain.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img src={res.img} alt={res.title} />
                </div>

                {/* <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">

                  {res.icon}

                </div> */}

                <Link
                  to={`/home/flow-chart/${res.url}`}
                  className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"
                >
                  {" "}
                  {res.title}
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <div>
        {isViewerOpen && (
          <ImageViewer
            src={Pics}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </>
  );
};

export default FcBlockChain;
