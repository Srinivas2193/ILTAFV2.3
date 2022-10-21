import React from "react";
import Bredcrumb from "../../Molecules/BredCrumbs/Bredcrumb";
import "./RequirementTraceability.css";

const RequirementTraceability = () => {
  return (<>
  <Bredcrumb to1={`../`} to2={`/home/requirement-traceability`} prev={`Home`} current={`Requirement Traceability`} />
    <div className="flex flex-row pics">
      <div className="flex flex-row ">
        <img
          src="https://reqtest.com/wp-content/uploads/2018/11/Requirements-traceability-matrix-featured.jpeg"
          alt="RT"
          className="w-[871px] ml-4 mt-[100px] rounded-xl"
        />
      </div>

      <div>
        <div className="ml-[80px] text-[25px] mt-[180px]">
          <li className="mt-[10px]">It maps the requirements to test cases </li>

          <li className="mt-[10px]">It confirms 100% test coverage </li>

          <li className="mt-[20px]">
            {" "}
            It highlights any requirements missing or document inconsistencies{" "}
          </li>

          <li className="mt-[10px]">
            It shows the overall defects or execution status with a focus on
            business requirements{" "}
          </li>

          <li className="mt-[10px]">
            It helps in analyzing or estimating the impact on the QA team's work
            with respect to revisiting or{" "}
            <span className="ml-[30px]"> reworking on the test case </span>
          </li>
        </div>
      </div>
    </div>
    </> );
};

export default RequirementTraceability;
