import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray } from "./SubjectArrays/SubjectArrays.jsx"

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "page2/:year",
    element: <Page2 />
  },
  {
    path: "/1AMRC1Divyani",
    element: <SubjectDetailPage array={am1DbArray} teacher="Divyani Badjatiya"/>
  },
  {
    path: "/1AMRC1Salika",
    element: <SubjectDetailPage array={am1SaArray} teacher="Salika Ansari"/>
  },
  {
    path: "/1AMRC1Anas",
    element: <SubjectDetailPage array={am1AkArray} teacher="Anas Khan"/>
  },
  {
    path: "/1ETRC4Amit",
    element: <SubjectDetailPage array={beAjArray} teacher="Amit Jha"/>
  },
  {
    path: "/1ETRC4Astha",
    element: <SubjectDetailPage array={beAgArray} teacher="Astha Gupta"/>
  },
  {
    path: "/1ACRC2Dheeraj",
    element: <SubjectDetailPage array={cDmArray} teacher="Dheeraj Mandloi"/>
  },
  {
    path: "/1ACRC2Jitendra",
    element: <SubjectDetailPage array={cJsArray} teacher="Jitendra Singh"/>
  },
  {
    path: "/1SSRS1Ruchi",
    element: <SubjectDetailPage array={eRsArray} teacher="Ruchi Singh"/>
  },
  

]

export default routes;