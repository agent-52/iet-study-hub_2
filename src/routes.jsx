import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
// import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {year1Batch1Array, year1Batch2Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray , year2CseBatch1Array, year2ItBatch1Array, year2CseBatch2Array, year2ItBatch2Array} from "./SubjectArrays/SubjectArrays.jsx"
import {DisplayGrid, Year1Grid} from "./Year1Grid/Year1Grid.jsx";
import {DisplayGrid2, Year2Grid} from "./Year2Grid/Year2Grid.jsx"

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    children:[
      {
        index:true,
        element: <Year1Grid index={true}/>
      },
      {
        path: "year1",
        element: <Year1Grid/>,
        children:[
          {
            index: true,
            element: <DisplayGrid array={year1Batch1Array} b1Id="active2" batch="batch1"/>,
          },
          {
            path:"batch1",
            element: <DisplayGrid array={year1Batch1Array} b1Id="active2" batch="batch1"/>,
          },
          {
            path:"batch2",
            element: <DisplayGrid array={year1Batch2Array} b2Id="active2" batch="batch2"/>
          }
        ]
      },
      {
        path: "year2/:name1/:name2",
        element: <Year2Grid/>,
      },       
      
    ]
  
    
  },
  
  {
    path: "/year1/batch1/1AMRC1Divyani",
    element: <SubjectDetailPage array={am1DbArray} teacher="Divyani Badjatiya"/>
  },
  {
    path: "/year1/batch1/1AMRC1Salika",
    element: <SubjectDetailPage array={am1SaArray} teacher="Salika Ansari"/>
  },
  {
    path: "/year1/batch1/1AMRC1Anas",
    element: <SubjectDetailPage array={am1AkArray} teacher="Anas Khan"/>
  },
  {
    path: "/year1/batch1/1ETRC4Amit",
    element: <SubjectDetailPage array={beAjArray} teacher="Amit Jha"/>
  },
  {
    path: "/year1/batch1/1ETRC4Astha",
    element: <SubjectDetailPage array={beAgArray} teacher="Astha Gupta"/>
  },
  {
    path: "/year1/batch1/1ACRC2Dheeraj",
    element: <SubjectDetailPage array={cDmArray} teacher="Dheeraj Mandloi"/>
  },
  {
    path: "/year1/batch1/1ACRC2Jitendra",
    element: <SubjectDetailPage array={cJsArray} teacher="Jitendra Singh"/>
  },
  {
    path: "/year1/batch1/1SSRS1Ruchi",
    element: <SubjectDetailPage array={eRsArray} teacher="Ruchi Singh"/>
  },
]
  
  
  



export default routes;