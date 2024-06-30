import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {year1Batch1Array, year1Batch2Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray } from "./SubjectArrays/SubjectArrays.jsx"
import {DisplayGrid, Year1Grid} from "./Year1Grid/Year1Grid.jsx";

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Page2 />
      },
      {
        path: "page2",
        element: <Page2 />,
        children:[
          {
            path: "year1",
            element: <Year1Grid/>,
            children:[
              {
                path:"batch1",
                element: <DisplayGrid array={year1Batch1Array}/>,
              },
              {
                path:"batch2",
                element: <DisplayGrid array={year1Batch2Array}/>
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/page2/year1/batch1/1AMRC1Divyani",
    element: <SubjectDetailPage array={am1DbArray} teacher="Divyani Badjatiya"/>
  },
  {
    path: "/page2/year1/batch1/1AMRC1Salika",
    element: <SubjectDetailPage array={am1SaArray} teacher="Salika Ansari"/>
  },
  {
    path: "/page2/year1/batch1/1AMRC1Anas",
    element: <SubjectDetailPage array={am1AkArray} teacher="Anas Khan"/>
  },
  {
    path: "/page2/year1/batch1/1ETRC4Amit",
    element: <SubjectDetailPage array={beAjArray} teacher="Amit Jha"/>
  },
  {
    path: "/page2/year1/batch1/1ETRC4Astha",
    element: <SubjectDetailPage array={beAgArray} teacher="Astha Gupta"/>
  },
  {
    path: "/page2/year1/batch1/1ACRC2Dheeraj",
    element: <SubjectDetailPage array={cDmArray} teacher="Dheeraj Mandloi"/>
  },
  {
    path: "/page2/year1/batch1/1ACRC2Jitendra",
    element: <SubjectDetailPage array={cJsArray} teacher="Jitendra Singh"/>
  },
  {
    path: "/page2/year1/batch1/1SSRS1Ruchi",
    element: <SubjectDetailPage array={eRsArray} teacher="Ruchi Singh"/>
  },
]
  
  
  



export default routes;