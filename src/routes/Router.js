import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const FullLayoutMember = lazy(() => import("../layouts/FullLayoutMember.js"));
const HeaderLayout = lazy(() => import("../layouts/HeaderLayout.js"));

/***** Pages ****/

//Original Pages
const Login = lazy(() => import("../views/ui/Login.js"));
const Register = lazy(() => import("../views/ui/Register.js"));
const Member = lazy(() => import("../views/ui/Member.js"));
const AddFlock = lazy(() => import("../views/ui/AddFlock.js"));
const AddFarm = lazy(() => import("../views/ui/AddFarm.js"));
const ManageFarm = lazy(() => import("../views/ui/ManageFarm.js"));
const AddPurchase = lazy(() => import("../views/ui/AddPurchase.js"));
const ManageFlock = lazy(() => import("../views/ui/ManageFlock.js"));
const DailyDataSheet = lazy(() => import("../views/ui/DailyDataSheet.js"));
const FlockSummary = lazy(() => import("../views/ui/FlockSummary.js"));
const FlockDailyData = lazy(() => import("../views/ui/FlockDailyData.js"));
const DayData = lazy(() => import("../views/ui/DayData.js"));
const FeedAdjustmentAfterSale = lazy(() => import("../views/ui/FeedAdjustmentAfterSale.js"));
const Home = lazy(() => import("../views/ui/Home.js"));
const About = lazy(() => import("../views/ui/About.js"));
const Contact = lazy(() => import("../views/ui/Contact.js"));
const Profile = lazy(() => import("../views/ui/Profile.js"));
const ChangePassword = lazy(() => import("../views/ui/ChangePassword.js"));
const ForgetPassword = lazy(() => import("../views/ui/ForgetPassword.js"));
const FlockSale = lazy(() => import("../views/ui/FlockSale.js"));
const ViewSale = lazy(() => import("../views/ui/ViewSale.js"));
const EditSale = lazy(() => import("../views/ui/EditSale.js"));
const ListPurchase = lazy(() => import("../views/ui/ListPurchase.js"));
const ViewPurchase = lazy(() => import("../views/ui/ViewPurchase.js"));
const UpdateMobile = lazy(() => import("../views/ui/UpdateMobile.js"));
const ResetPassword = lazy(() => import("../views/ui/ResetPassword.js"));
//Original Pages

/*****Routes AddPurchase******/

const ThemeRoutes = [
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      { path: "/", exact: true, element: <Home /> },
    ],
  },{
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/login", exact: true, element: <Login /> },
      { path: "/register", exact: true, element: <Register /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/contact", exact: true, element: <Contact /> },
      { path: "/forgetpassword", exact: true, element: <ForgetPassword />},
      { path: "/resetpassword", exact: true, element: <ResetPassword />},
    ],
  },
  {
    path: "/",
    element: <FullLayoutMember />,
    children: [
      { path: "/member", exact: true, element: <Member /> },
      { path: "/addflock", exact: true, element: <AddFlock /> },
      { path: "/addfarm", exact: true, element: <AddFarm /> },
      { path: "/managefarm", exact: true, element: <ManageFarm /> },
      { path: "/addpurchase", exact: true, element: <AddPurchase /> },
      { path: "/manageflock", exact: true, element: <ManageFlock /> },
      { path: "/flockdailydata", exact: true, element: <FlockDailyData /> }, 
      { path: "/daydata/:farmid/:flockid/:date", exact: true, element: <DayData></DayData> },
      { path: "/dailydatasheet", exact: true, element: <DailyDataSheet /> },
      { path: "/flocksummary", exact: true, element: <FlockSummary /> },
      { path: "/feedadjustmentaftersale", exact: true, element: <FeedAdjustmentAfterSale /> },
      { path: "/profile", exact: true, element: <Profile/>},
      { path: "/changepassword", exact: true, element: <ChangePassword/>},
      { path: "/flocksale", exact: true, element:<FlockSale></FlockSale> },
      { path: "/viewsale", exact: true, element: <ViewSale></ViewSale> },
      { path: "/editsale", exact: true, element: <EditSale></EditSale> },
      { path: "/viewpurchase", exact: true, element: <ViewPurchase></ViewPurchase> },
      { path: "/listpurchase", exact: true, element: <ListPurchase></ListPurchase> },
      { path: "/updatemobile", exact: true, element: <UpdateMobile />},
    ],
  },
];

export default ThemeRoutes;
