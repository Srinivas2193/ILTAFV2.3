import React from "react";
import Bredcrumb from "../../Molecules/BredCrumbs/Bredcrumb";

import "./BuildDeploymentProcess.css";

const BuildDeploymentProcess = () => {
  return (<>
  <Bredcrumb to1={`../`} to2={`/home/build-deployment`} prev={'Home'} current={`Build And Deployment Process`} />
    <div>
      <div className="">
        <div className="flex flex-row items-center gap-16 align">
          <div>
            <img
              src="https://main.d2gqjma687qi0b.amplifyapp.com/static/media/buildDeployment.4d743cf6736d41eb65e9.png"
              alt="5"
              className="w-[900px] rounded-2xl  ml-4"
            />
          </div>

          <div className="w-[920px] mt-[40px]">
            <h1 className="font-bold text-[30px]">Build Deployment Process:</h1>

            <li className="mt-[10px] text-[25px]">
              QA team should be aware of the deployment process, they will
              understand the importance of completing their tasks within the
              planned time-frame.
            </li>

            <h1 className="font-bold text-[30px]">Advantages:</h1>

            <li className="mt-[10px] text-[25px]">
              Testers will get an idea if the issue is really a functionality
              bug or something caused during deployment.
            </li>

            <li className="mt-[10px] text-[25px]">
              Many non-issues could be avoided if the testers really are aware
              of the list that got deployed.
            </li>
            <h1 className="font-bold text-[30px]">Before Deployment :</h1>

            <li className="mt-[10px] text-[25px]">
              The entire test design phase takes place before the code is
              actually moved to the environment. It’s the test execution that
              depends on the code availability in the QA environment while the
              Deployment team works on getting the code deployed in QA, the QA
              team should ensure to have completed below activities:
            </li>

            <h1 className="mt-[10px] text-[25px]">
               Ensure the test cases are reviewed and approved
            </h1>

            <h1 className="mt-[10px] text-[25px]">
               Ensure the test team is available and resource planning is
              completed
            </h1>
            <h1 className="mt-[10px] text-[25px]">
               Ensure the test data needs are identified After Deployment
            </h1>

            <h1 className="font-bold text-[30px]">After Deployment :</h1>

            <li className="mt-[10px] text-[25px]">
              After deployment, QA team started with our Sanity test. But before
              we start our sanity test, we should ensure following has been
              taken care:
            </li>

            <h1 className="mt-[10px] text-[25px]">
               The QA team should have received notification from the
              deployment team about successful deployment and ready for QA.
            </h1>

            <h1 className="mt-[10px] text-[25px]">
               The QA team should keep a track of the deployed build.
            </h1>

            <h1 className="mt-[10px] text-[25px]">
              Make sure the QA team has the list of changes successfully
              deployed and also of items not deployed even if they were planned.
              It may happen that the deployment team couldn’t deploy due to
              missing details etc
            </h1>

            <h1 className="font-bold text-[30px]">Build Versioning::</h1>

            <h1 className="mt-[10px] text-[25px]">
              Build Versioning should be added on every build deployment on
              product to track the how many builds are deployed in QA Instance.
              Build versioning is important as it will help QA team to Sign off
              on respective build. It there is fall back they can revert to
              previous build to continue testing.
            </h1>
          </div>
        </div>
      </div>
    </div>
    </> );
};

export default BuildDeploymentProcess;
