import React from "react";
import Bredcrumb from "../../Molecules/BredCrumbs/Bredcrumb";

import "./requirementAnalysis.css";

const RequirementAnalysis = () => {
  return (<>
  <Bredcrumb to1={`../`} to2={`/home/requirement-analysis`} prev={`Home`} current={`Requirement Analysis`} />
    <div className="pic min-h-[815px] flex flex-row gap-7">
      <div className="mt-[40px] ml-9">
        <img
          src="https://main.d2gqjma687qi0b.amplifyapp.com/static/media/Req-Analysis.40f6446b3148c84443f5.png"
          alt="img"
          className=" mt-[30px] mr-[10p] hover:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        />
      </div>

      <div className="ml-[30px] mt-[100px]">
        <li className="text-[25px] mt-[50px] tracking-wide">
          QA team needs Updated/Approved requirement documents and required
          information in user stories to test the given functionality
        </li>

        <li className="text-[25px] mt-[10px] tracking-wide">
          QA team will analyze the requirement and identify the impact analysis
          if there are any change request added
        </li>

        <li className="text-[25px] mt-[10px] tracking-wide">
          We will maintain all the Queries related to product in Query tracker
          and once review is done by QA Manager will update in respective
          project management tool
        </li>

        <li className="text-[25px] mt-[10px] tracking-wide">
          QA team will not only test as per requirement but also give
          Improvements, Idea’s how to improve the product
        </li>
      </div>
    </div>
    </>);
};

export default RequirementAnalysis;
