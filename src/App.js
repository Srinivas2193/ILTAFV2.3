import React, {useState} from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MainTemplate from "./Components/MainTemplate/MainTemplate";
// import Navbar from "./Pages/NavBar/Navbar";
import Login from './Pages/Login/Login';
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/About/About";
import Contact from "./Components/Contact/Contact";

// Home page Routes component imports
import RequirementAnalysis from "./Components/LandingComponent/RequirementAnalysis/RequirementAnalysis";
import MindMaps from './Components/LandingComponent/MindMaps/MindMaps';
import InterLocking from './Components/LandingComponent/InterLocking/InterLocking';
import FlowCharts from './Components/LandingComponent/FlowChart/FlowChart';
import RequirementTraceability from './Components/LandingComponent/RequirementTraceability/RequirementTraceability';
import TestDesign from './Components/LandingComponent/TestDesign/TestDesign';
import BuildDeployement from './Components/LandingComponent/BuildDeploymentProcess/BuildDeploymentProcess';
import ApiTesting from './Components/LandingComponent/ApiTesting/ApiTesting';
import FunctionalAutomation from './Components/LandingComponent/FunctionalAutomationTesting/FunctionalAutomationTesting';
import PerformanceTesting from './Components/LandingComponent/PerformanceTesting/PerformanceTesting';
import SecurityTesting from './Components/LandingComponent/SecurityTesting/SecurityTesting';
import MdBlockChain from "./Components/LandingComponent/MindMaps/SubDomains/MdBlockChain";
import ILBlockChain from "./Components/LandingComponent/InterLocking/SubDomains/ILBlockChain";
import MdBanking from "./Components/LandingComponent/MindMaps/SubDomains/MdBanking";
import MdConstruction from "./Components/LandingComponent/MindMaps/SubDomains/MdConstruction";
import MdFintech from "./Components/LandingComponent/MindMaps/SubDomains/MdFintech";
import MdIoT from "./Components/LandingComponent/MindMaps/SubDomains/MdIoT";
import FinancialAndAnalytical from "./Components/LandingComponent/MindMaps/SubDomains/FinancialAndAnalytical";
import MdEcommerce from "./Components/LandingComponent/MindMaps/SubDomains/MdEcommerce";
import MdAnalytics from "./Components/LandingComponent/MindMaps/SubDomains/MdAnalytics";
import FcBlockChain from "./Components/LandingComponent/FlowChart/SubDomains/FcBlockChain";
import ApiBlockChain from "./Components/LandingComponent/ApiTesting/SubDomains/ApiBlockChain";
import ApiBanking from "./Components/LandingComponent/ApiTesting/SubDomains/ApiBanking";
import ApiFintech from "./Components/LandingComponent/ApiTesting/SubDomains/ApiFintech";
import ApiIoT from "./Components/LandingComponent/ApiTesting/SubDomains/ApiIoT";
import ApiFinancialAndAnalytical from "./Components/LandingComponent/ApiTesting/SubDomains/ApiFinancialAndAnalytical";
import ApiEcommerce from "./Components/LandingComponent/ApiTesting/SubDomains/ApiEcommerce";
import ApiAnalytics from "./Components/LandingComponent/ApiTesting/SubDomains/ApiAnalytics";
import FcBanking from "./Components/LandingComponent/FlowChart/SubDomains/FcBanking";
import FcFintech from "./Components/LandingComponent/FlowChart/SubDomains/FcFintech";
import FcIot from "./Components/LandingComponent/FlowChart/SubDomains/FcIoT";
import FcFinancialAndAnalytical from "./Components/LandingComponent/FlowChart/SubDomains/FcFinancialAndAnalytical";
import FcEcommerce from "./Components/LandingComponent/FlowChart/SubDomains/FcEcommerce";
import FcAnalytics from "./Components/LandingComponent/FlowChart/SubDomains/FcAnalytics";
import ILBanking from "./Components/LandingComponent/InterLocking/SubDomains/ILBanking";
import ILFintech from "./Components/LandingComponent/InterLocking/SubDomains/ILFintech";
import ILConstruction from "./Components/LandingComponent/InterLocking/SubDomains/ILConstruction";
import ILIoT from "./Components/LandingComponent/InterLocking/SubDomains/ILIot";
import ILFinancialAndAnalytical from "./Components/LandingComponent/InterLocking/SubDomains/ILFinancialAndAnalytical";
import ILEcommerce from "./Components/LandingComponent/InterLocking/SubDomains/ILEcommerce";
import ILAnalytics from "./Components/LandingComponent/InterLocking/SubDomains/ILAnalytics";
import FABlockChain from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FABlockChain";
import FABanking from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FABanking";
import FAFintech from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAFintech";
import FcConstruction from "./Components/LandingComponent/FlowChart/SubDomains/FcConstruction";
import FAConstruction from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAConstruction";
import FAIoT from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAIoT";
import FAFinancialAndAnalytical from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAFinacialAndAnalytical";
import FAEcommerce from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAEcommerce";
import FAAnalytics from "./Components/LandingComponent/FunctionalAutomationTesting/SubDomains/FAAnalytics";
import PTBlockChain from "./Components/LandingComponent/PerformanceTesting/SubDomains/PTBlockChain";
import PTFintech from "./Components/LandingComponent/PerformanceTesting/SubDomains/PTFintech";
import PTeCommerce from "./Components/LandingComponent/PerformanceTesting/SubDomains/PTe-Commerce";
import PTIoT from './Components/LandingComponent/PerformanceTesting/SubDomains/PTIoT';
import STAnalytics from "./Components/LandingComponent/SecurityTesting/SubDomains/STAnalytics";
import STBlockChain from "./Components/LandingComponent/SecurityTesting/SubDomains/STBlockChain";
import STeCommerce from "./Components/LandingComponent/SecurityTesting/SubDomains/STe-Commerce";
import STFintech from "./Components/LandingComponent/SecurityTesting/SubDomains/STFintech";
import STIoT from "./Components/LandingComponent/SecurityTesting/SubDomains/STIoT";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
// import './App.css';

function App() {
const [status, setStatus] = useState();

  const loginStatus=(data)=>{
setStatus(data);
  }
// console.log(status);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ProtectedRoute status={status} />}>
          <Route path="/" element={<MainTemplate />}>
            {/* sub Routes */}
            <Route path="/home" element={<Home />} />
            <Route
              path="/home/requirement-analysis"
              element={<RequirementAnalysis />}
            />

            {/* //MindMaps Routes */}
            <Route path="/home/mind-maps" element={<MindMaps />} />
              <Route path="/home/mind-maps/blockchain" element={<MdBlockChain />} />
              <Route path="/home/mind-maps/banking" element={<MdBanking />} />
              <Route path="/home/mind-maps/fintech" element={<MdFintech />} />
              <Route path="/home/mind-maps/construction" element={<MdConstruction />} />
              <Route path="/home/mind-maps/iot" element={<MdIoT />} />
              <Route path="/home/mind-maps/financial-analytical" element={<FinancialAndAnalytical />} />
              <Route path="/home/mind-maps/e-commerce" element={<MdEcommerce />} />
              <Route path="/home/mind-maps/analytics" element={<MdAnalytics />} />

              {/* // Interlocking Routes */}
              <Route path="/home/inter-locking" element={<InterLocking />} />
              <Route path="/home/inter-locking/blockchain" element={<ILBlockChain />} />
              <Route path="/home/inter-locking/banking" element={<ILBanking />} />
              <Route path="/home/inter-locking/fintech" element={<ILFintech />} />
              <Route path="/home/inter-locking/construction" element={<ILConstruction />} />
              <Route path="/home/inter-locking/iot" element={<ILIoT />} />
              <Route path="/home/inter-locking/financial-analytical" element={<ILFinancialAndAnalytical />} />
              <Route path="/home/inter-locking/e-commerce" element={<ILEcommerce />} />
              <Route path="/home/inter-locking/analytics" element={<ILAnalytics />} />

              {/* //Flowchart Routes */}
              <Route path="/home/flow-chart" element={<FlowCharts />} />
              <Route path="/home/flow-chart/blockchain" element={<FcBlockChain />} />
              <Route path="/home/flow-chart/banking" element={<FcBanking />} />
              <Route path="/home/flow-chart/fintech" element={<FcFintech />} />
              <Route path="/home/flow-chart/construction" element={<FcConstruction />} />
              <Route path="/home/flow-chart/iot" element={<FcIot />} />
              <Route path="/home/flow-chart/financial-analytical" element={<FcFinancialAndAnalytical />} />
              <Route path="/home/flow-chart/e-commerce" element={<FcEcommerce />} />
              <Route path="/home/flow-chart/analytics" element={<FcAnalytics />} />




            <Route path="/home/requirement-traceability" element={<RequirementTraceability />} />
            <Route path="/home/test-design" element={<TestDesign />} />
            <Route path="/home/build-deployment" element={<BuildDeployement />} />

            {/* // Api testing Routes */}
            <Route path="/home/api-testing" element={<ApiTesting />} />
            <Route path="/home/api-testing/blockchain" element={<ApiBlockChain />} />
            <Route path="/home/api-testing/banking" element={<ApiBanking />} />
            <Route path="/home/api-testing/fintech" element={<ApiFintech />} />
            <Route path="/home/api-testing/iot" element={<ApiIoT />} />
            <Route path="/home/api-testing/financial-analytical" element={<ApiFinancialAndAnalytical />} />
            <Route path="/home/api-testing/e-commerce" element={<ApiEcommerce />} />
            <Route path="/home/api-testing/analytics" element={<ApiAnalytics />} />


            {/* Functional And Automation Testing Routes */}
            <Route path="/home/functional-automation" element={<FunctionalAutomation />} />
            <Route path="/home/functional-automation/blockchain" element={<FABlockChain />} />
            <Route path="/home/functional-automation/banking" element={<FABanking />} />
            <Route path="/home/functional-automation/fintech" element={<FAFintech />} />
            <Route path="/home/functional-automation/construction" element={<FAConstruction />} />
            <Route path="/home/functional-automation/iot" element={<FAIoT />} />
            <Route path="/home/functional-automation/financial-analytical" element={<FAFinancialAndAnalytical />} />
            <Route path="/home/functional-automation/e-commerce" element={<FAEcommerce />} />
            <Route path="/home/functional-automation/analytics" element={<FAAnalytics />} />



            <Route path="/home/performance-testing" element={<PerformanceTesting />} />
            <Route path="/home/performance-testing/blockchain" element={<PTBlockChain />} />
            <Route path="/home/performance-testing/banking" element={<PTFintech />} />
            <Route path="/home/performance-testing/e-commerce" element={<PTeCommerce />} />
            <Route path="/home/performance-testing/fintech" element={<PTFintech />} />
            <Route path="/home/performance-testing/iot" element={<PTIoT />} />




            <Route path="/home/security-testing" element={<SecurityTesting />} />
            <Route path="/home/security-testing/analytics" element={<STAnalytics />} />
            <Route path="/home/security-testing/blockchain" element={<STBlockChain />} />
            <Route path="/home/security-testing/e-commerce" element={<STeCommerce />} />
            <Route path="/home/security-testing/fintech" element={<STFintech />} />
            <Route path="/home/security-testing/iot" element={<STIoT />} />







            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* redirect empty path to home page */}
            <Route path="/" element={<Navigate to={`/home`} />} />

            {/* redirect other routes to home page */}
            <Route path="/*" element={<Navigate to={`/home`} />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login loginPageCall={loginStatus} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/forgot-password" element={<ForgotPassword />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
