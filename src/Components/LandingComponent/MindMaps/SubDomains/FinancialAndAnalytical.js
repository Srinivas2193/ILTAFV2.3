// import React from 'react';
// import { Link } from 'react-router-dom';
// import map1 from './../../../../assets/Images/Mindmaps/map-1.png';
// import map2 from './../../../../assets/Images/Mindmaps/map-2.png';
// import map3 from './../../../../assets/Images/Mindmaps/map-3.png';
// import map4 from './../../../../assets/Images/Mindmaps/map-4.png';

// const FinancialAndAnalytical = () => {

//   const FinancialAndAnalytical = [
//     { img: map1, url: "mindmap-1", title: "Mindmap-1" },
//     { img: map2, url: "mindmap-2", title: "Mindmap-2" },
//     { img: map3, url: "mindmap-3", title: "Mindmap-3" },
//     { img: map4, url: "mindmap-4", title: "Mindmap-4" },

//   ]
//   return (
//     <>
//     <div className="flex flex-row flex-wrap justify-center px-5 mb-16 mt-14 gap-36 ">
//         {FinancialAndAnalytical.map((res, i) => {
//           return (
//             <>
//               <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
//                 <div>
//                   <img src={res.img} alt={res.title} />
//                 </div>
//                 {/* <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
//                   {res.icon}
//                 </div> */}
//                 <Link to={`/home/mind-maps/blockchain/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </>
//   )
// }

// export default FinancialAndAnalytical;

import React, { useCallback, useState } from "react";

import { Link } from "react-router-dom";

import map1 from "./../../../../assets/Images/Mindmaps/map-1.png";

import map2 from "./../../../../assets/Images/Mindmaps/map-2.png";

import map3 from "./../../../../assets/Images/Mindmaps/map-3.png";

import map4 from "./../../../../assets/Images/Mindmaps/map-4.png";

import ImageViewer from "react-simple-image-viewer";
import Bredcrumb from "../../../Molecules/BredCrumbs/Bredcrumb";

const FinancialAndAnalytical = () => {
  const MdConstruction = [
    { img: map1, url: "mindmap-1", title: "Mindmap-1" },

    { img: map2, url: "mindmap-2", title: "Mindmap-2" },

    { img: map3, url: "mindmap-3", title: "Mindmap-3" },

    { img: map4, url: "mindmap-4", title: "Mindmap-4" },
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

  const Pics = [map1, map2, map3, map4];

  return (
    <>
      {/* <Bredcrumb to1={`/home/mind-maps`} to2={`/home/mind-maps/financial-analytical`} prev={`Mind Maps`} current={`Financial And Analytical`} /> */}

      <div
        className="flex flex-row flex-wrap justify-center px-5 mt-14 mb-52 gap-36"
        onClick={() => openImageViewer()}
      >
        {MdConstruction.map((res, i) => {
          return (
            <>
              <div className=" w-[300px] h-[250px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img src={res.img} alt={res.title} />
                </div>

                {/* <div className="text-[120px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">

                  {res.icon}

                </div> */}

                <p
                  to={`/home/mind-maps/blockchain/${res.url}`}
                  className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"
                >
                  {" "}
                  {res.title}
                </p>
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

export default FinancialAndAnalytical;
