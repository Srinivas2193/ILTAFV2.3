import React from "react";
import Bredcrumb from "../../Molecules/BredCrumbs/Bredcrumb";

const TestDesign = () => {
  return (<>
  <Bredcrumb to1={`../`} to2={`/home/test-design`} prev={`Home`} current={`Test Design`} />
    <div>
      <div className="flex flex-row gap-24 bg-white">
        <img
          src="https://main.d2gqjma687qi0b.amplifyapp.com/static/media/testDesign.e243cb8c77bdf46f2fbb.png"
          alt="4"
          className="rounded-lg mt-[30px] ml-[30px]"
        />

        <div className=" text-[25px] mt-[100px] ">
          <li className="mt-[20px]">
            Basically, test design is the act of creating and writing test
            suites for testing a product.
          </li>

          <li className="mt-[20px]">
            <span className="font-bold">Test Design Techniques:</span> There are
            two techniques to write the test cases
          </li>

          <h1 className="mt-[20px]"> Boundary Value Analysis</h1>

          <h1 className="mt-[20px]"> Equivalent Class Partition</h1>

          <li className="mt-[20px]">
            <span className="font-bold">Test Case:</span>Test case contains
            below list of items
          </li>
          <li className="mt-[20px]">
            <span className="font-bold">2. Negative:</span>Includes test cases
            related to invalid input or unexpected user behaviour
          </li>

          <li className="mt-[20px]">
            <span className="font-bold">3. Validational :</span>Verifying the
            rules for various fields in respective screens
          </li>

          <li className="mt-[20px]">
            <span className="font-bold">4. User Interface :</span> Includes test
            cases related to Alignment, Font Size, Colors, Spelling etc
          </li>
        </div>
      </div>
    </div>
    </> );
};

export default TestDesign;
