import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
// import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {year1Batch1Array, year1Batch2Array, am1Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray , year2CseBatch1Array, year2ItBatch1Array, year2CseBatch2Array, year2ItBatch2Array, beArray, cArray, eArray, emeArray, emeIhArray, emeJsArray, emeNsArray, emeSkArray, apArray, apRgArray, apSkArray, hAaArray, hAsArray, hArray, edArray, edOjArray, eeArray, eeAvArray, eeNArray, eeSpArray, eeTsArray, cpArray, cpMpArray, cpNcArray, am2Array, am2CcArray } from "./SubjectArrays/SubjectArrays.jsx"
import {DisplayGrid, Year1Grid} from "./Year1Grid/Year1Grid.jsx";
import {DisplayGrid2, Year2Grid} from "./Year2Grid/Year2Grid.jsx"
import Team from "./Team/Team.jsx"
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
    path: "/team",
    element: <Team />
  },
  //am1
  {
    path: "/year1/batch1/1AMRC1Divyani",
    element: <SubjectDetailPage array={am1Array} teacher="Divyani Badjatiya" linksArray={am1DbArray}/>
  },
  {
    path: "/year1/batch1/1AMRC1Salika",
    element: <SubjectDetailPage array={am1Array} linksArray={am1SaArray} teacher="Salika Ansari"/>
  },
  {
    path: "/year1/batch1/1AMRC1Anas",
    element: <SubjectDetailPage array={am1Array} linksArray={am1AkArray} teacher="Anas Khan"/>
  },
  //be
  {
    path: "/year1/batch1/1ETRC4Amit",
    element: <SubjectDetailPage array={beArray} teacher="Amit Jha" linksArray={beAjArray}/>
  },
  {
    path: "/year1/batch1/1ETRC4Astha",
    element: <SubjectDetailPage array={beArray} teacher="Astha Gupta" linksArray={beAgArray}/>
  },
  //chemistry
  {
    path: "/year1/batch1/1ACRC2Dheeraj",
    element: <SubjectDetailPage array={cArray} teacher="Dheeraj Mandloi" linksArray={cDmArray}/>
  },
  {
    path: "/year1/batch1/1ACRC2Jitendra",
    element: <SubjectDetailPage array={cArray} teacher="Jitendra Singh" linksArray={cJsArray}/>
  },
  //english
  {
    path: "/year1/batch1/1SSRS1Ruchi",
    element: <SubjectDetailPage array={eArray} teacher="Ruchi Singh" linksArray={eRsArray}/>
  },
  //eme
  {
    path: "/year1/batch1/1MERC3Jyoti",
    element: <SubjectDetailPage array={emeArray} teacher="Jyoti Soni" linksArray={emeJsArray}/>
  },
  {
    path: "/year1/batch1/1MERC3Ibrahim",
    element: <SubjectDetailPage array={emeArray} teacher="Ibrahim Hussain" linksArray={emeIhArray}/>
  },
  {
    path: "/year1/batch1/1MERC3Nagendra",
    element: <SubjectDetailPage array={emeArray} teacher="Nagendra Soni" linksArray={emeNsArray}/>
  },
  {
    path: "/year1/batch1/1MERC3Santosh",
    element: <SubjectDetailPage array={emeArray} teacher="Santosh Kansal" linksArray={emeSkArray}/>
  },
  //ap
  {
    path: "/year1/batch2/2APRC2Rachna",
    element: <SubjectDetailPage array={apArray} teacher="Rachna Gupta" linksArray={apRgArray}/>
  },
  {
    path: "/year1/batch2/2APRC2Shailendra",
    element: <SubjectDetailPage array={apArray} teacher="Shailendra Khinchi" linksArray={apSkArray}/>
  },
  //humanities
  {
    path: "/year1/batch2/2SSRS2Aarti",
    element: <SubjectDetailPage array={hArray} teacher="Aarti Saran" linksArray={hAsArray}/>
  },
  {
    path: "/year1/batch2/2SSRS2Asmita",
    element: <SubjectDetailPage array={hArray} teacher="Asmita Agrawal" linksArray={hAaArray}/>
  },
  //ed
  {
    path: "/year1/batch2/2MERC3Omprakash",
    element: <SubjectDetailPage array={hArray} teacher="Omprakash" linksArray={edOjArray}/>
  },
  //ee
  {
    path: "/year1/batch2/2EIRC4Ajay",
    element: <SubjectDetailPage array={eeArray} teacher="Ajay Verma" linksArray={eeAvArray}/>
  },
  {
    path: "/year1/batch2/2EIRC4Surekha",
    element: <SubjectDetailPage array={eeArray} teacher="Surekha Patil" linksArray={eeSpArray}/>
  },
  {
    path: "/year1/batch2/2EIRC4Nitin",
    element: <SubjectDetailPage array={eeArray} teacher="Nitin" linksArray={eeNArray}/>
  },
  {
    path: "/year1/batch2/2EIRC4Tapesh",
    element: <SubjectDetailPage array={eeArray} teacher="Tapesh Sarsodiya" linksArray={eeTsArray}/>
  },
  //cp
  {
    path: "/year1/batch2/2CORC5Manoj",
    element: <SubjectDetailPage array={cpArray} teacher="Manoj Pawaiya" linksArray={cpMpArray}/>
  },
  {
    path: "/year1/batch2/2CORC5Navneet",
    element: <SubjectDetailPage array={cpArray} teacher="Navneet Chaudhary" linksArray={cpNcArray}/>
  },
  //am2
  {
    path: "/year1/batch2/2AMRC1Chandrashekhar",
    element: <SubjectDetailPage array={am2Array} teacher="Chandrashekhar Chauhan" linksArray={am2CcArray}/>
  },


]
  
  
  



export default routes;