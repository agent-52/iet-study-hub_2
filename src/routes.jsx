import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
// import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {year1Batch1Array, year1Batch2Array, am1Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray , year2CseBatch1Array, year2ItBatch1Array, year2CseBatch2Array, year2ItBatch2Array, beArray, cArray, eArray, emeArray, emeIhArray, emeJsArray, emeNsArray, emeSkArray, apArray, apRgArray, apSkArray, hAaArray, hAsArray, hArray, edArray, edOjArray, eeArray, eeAvArray, eeNArray, eeSpArray, eeTsArray, cpArray, cpMpArray, cpNcArray, am2Array, am2CcArray,pyqAm1Ak, pyqAm1Db, pyqAm1Sa, pyqAm2Cc, pyqApRg, pyqApSk, pyqBeAg, pyqBeAj, pyqCDm, pyqCJs, pyqCpMp, pyqCpNc, pyqERs, pyqEdOj, pyqEeAv, pyqEeN, pyqEeSp, pyqEeTs, pyqEmeIh, pyqEmeJs, pyqEmeNs, pyqEmeSk, pyqHAa, pyqHAs, 
  am3Array1, am3Array2, am3Array3, am3PsArray, am3SaArray, am3VfArray, oopArray, oopJhArray, oopAmArray, dsArray1, dsArray2, dsAjArray, dsVjArray, dsVfArray, dsPkArray, 
  deArray1, deArray2, deApArray, dePsArray, deStArray, deSmArray, caArray, caVtArray, caCpArray, chArray, chVvArray, chCpArray, lmArray, lmKlArray, esArray, esAcArray,
  aeArray, aeGkArray, aeSkArray, naArray, naAvArray, naDnArray, sw1Array, sw1MjArray, csArray, csVfArray, deSbArray, dsHpArray, aeSpArray, sw1SsArray,
  somArray, somGpArray,sArray, sSmArray, cmArray, cmPtArray, smArray, smGvArray, dcsScArray, 
  dmArray, dmSaArray
} from "./SubjectArrays/SubjectArrays.jsx"
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
    element: <SubjectDetailPage array={am1Array} teacher="Divyani Badjatiya" linksArray={am1DbArray} pyq2023Array={pyqAm1Db}/>
  },
  {
    path: "/year1/batch1/1AMRC1Salika",
    element: <SubjectDetailPage array={am1Array} linksArray={am1SaArray} teacher="Salika Ansari" pyq2023Array={pyqAm1Sa}/>
  },
  {
    path: "/year1/batch1/1AMRC1Anas",
    element: <SubjectDetailPage array={am1Array} linksArray={am1AkArray} teacher="Anas Khan" pyq2023Array={pyqAm1Ak}/>
  },
  //be
  {
    path: "/year1/batch1/1ETRC4Amit",
    element: <SubjectDetailPage array={beArray} teacher="Amit Jha" linksArray={beAjArray} pyq2023Array={pyqBeAj}/>
  },
  {
    path: "/year1/batch1/1ETRC4Astha",
    element: <SubjectDetailPage array={beArray} teacher="Astha Gupta" linksArray={beAgArray} pyq2023Array={pyqBeAg}/>
  },
  //chemistry
  {
    path: "/year1/batch1/1ACRC2Dheeraj",
    element: <SubjectDetailPage array={cArray} teacher="Dheeraj Mandloi" linksArray={cDmArray} pyq2023Array={pyqCDm}/>
  },
  {
    path: "/year1/batch1/1ACRC2Jitendra",
    element: <SubjectDetailPage array={cArray} teacher="Jitendra Singh" linksArray={cJsArray} pyq2023Array={pyqCJs}/>
  },
  //english
  {
    path: "/year1/batch1/1SSRS1Ruchi",
    element: <SubjectDetailPage array={eArray} teacher="Ruchi Singh" linksArray={eRsArray} pyq2023Array={pyqERs}/>
  },
  //eme
  {
    path: "/year1/batch1/1MERC3Jyoti",
    element: <SubjectDetailPage array={emeArray} teacher="Jyoti Soni" linksArray={emeJsArray} pyq2023Array={pyqEmeJs}/>
  },
  {
    path: "/year1/batch1/1MERC3Ibrahim",
    element: <SubjectDetailPage array={emeArray} teacher="Ibrahim Hussain" linksArray={emeIhArray} pyq2023Array={pyqEmeIh}/>
  },
  {
    path: "/year1/batch1/1MERC3Nagendra",
    element: <SubjectDetailPage array={emeArray} teacher="Nagendra Soni" linksArray={emeNsArray} pyq2023Array={pyqEmeNs}/>
  },
  {
    path: "/year1/batch1/1MERC3Santosh",
    element: <SubjectDetailPage array={emeArray} teacher="Santosh Kansal" linksArray={emeSkArray} pyq2023Array={pyqEmeSk}/>
  },
  //ap
  {
    path: "/year1/batch2/2APRC2Rachna",
    element: <SubjectDetailPage array={apArray} teacher="Rachna Gupta" linksArray={apRgArray} pyq2023Array={pyqApRg}/>
  },
  {
    path: "/year1/batch2/2APRC2Shailendra",
    element: <SubjectDetailPage array={apArray} teacher="Shailendra Khinchi" linksArray={apSkArray} pyq2023Array={pyqApSk}/>
  },
  //humanities
  {
    path: "/year1/batch2/2SSRS2Aarti",
    element: <SubjectDetailPage array={hArray} teacher="Aarti Saran" linksArray={hAsArray} pyq2023Array={pyqHAs}/>
  },
  {
    path: "/year1/batch2/2SSRS2Asmita",
    element: <SubjectDetailPage array={hArray} teacher="Asmita Agrawal" linksArray={hAaArray} pyq2023Array={pyqHAa}/>
  },
  //ed
  {
    path: "/year1/batch2/2MERC3Omprakash",
    element: <SubjectDetailPage array={hArray} teacher="Omprakash" linksArray={edOjArray} pyq2023Array={pyqEdOj}/>
  },
  //ee
  {
    path: "/year1/batch2/2EIRC4Ajay",
    element: <SubjectDetailPage array={eeArray} teacher="Ajay Verma" linksArray={eeAvArray} pyq2023Array={pyqEeAv}/>
  },
  {
    path: "/year1/batch2/2EIRC4Surekha",
    element: <SubjectDetailPage array={eeArray} teacher="Surekha Patil" linksArray={eeSpArray} pyq2023Array={pyqEeSp}/>
  },
  {
    path: "/year1/batch2/2EIRC4Nitin",
    element: <SubjectDetailPage array={eeArray} teacher="Nitin" linksArray={eeNArray} pyq2023Array={pyqEeN}/>
  },
  {
    path: "/year1/batch2/2EIRC4Tapesh",
    element: <SubjectDetailPage array={eeArray} teacher="Tapesh Sarsodiya" linksArray={eeTsArray} pyq2023Array={pyqEeTs}/>
  },
  //cp
  {
    path: "/year1/batch2/2CORC5Manoj",
    element: <SubjectDetailPage array={cpArray} teacher="Manoj Pawaiya" linksArray={cpMpArray} pyq2023Array={pyqCpMp}/>
  },
  {
    path: "/year1/batch2/2CORC5Navneet",
    element: <SubjectDetailPage array={cpArray} teacher="Navneet Chaudhary" linksArray={cpNcArray} pyq2023Array={pyqCpNc}/>
  },
  //am2
  {
    path: "/year1/batch2/2AMRC1Chandrashekhar",
    element: <SubjectDetailPage array={am2Array} teacher="Chandrashekhar Chauhan" linksArray={am2CcArray} pyq2023Array={pyqAm2Cc}/>
  },

  //year2Subjects

  //am3
  {
    path: "/year2/cse/3ACRC1Salika",
    element: <SubjectDetailPage array={am3Array1} teacher="Salika Ansari" linksArray={am3SaArray} pyq2023Array={pyqAm2Cc}/>
  },

  //dm
  {
    path: "/year2/it/3AIRC1Sufiya",
    element: <SubjectDetailPage array={dmArray} teacher="Sufiya Aziz" linksArray={dmSaArray} pyq2023Array={pyqAm2Cc}/>
  },

  //oop
  {
    path: "/year2/cse/3CERC2Jyoti",
    element: <SubjectDetailPage array={oopArray} teacher="Jyoti Haveliya" linksArray={oopJhArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/it/3ITRC2Aditya",
    element: <SubjectDetailPage array={oopArray} teacher="Aditya Makwe" linksArray={oopAmArray} pyq2023Array={pyqAm2Cc}/>
  },

  //ds
  {
    path: "/year2/cse/3CERC3Vaibhav",
    element: <SubjectDetailPage array={dsArray1} teacher="Vaibhav Jain" linksArray={dsVjArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/cse/3CERC3Ashish",
    element: <SubjectDetailPage array={dsArray1} teacher="Ashish Jain" linksArray={dsAjArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/it/3ITRC3Pravin",
    element: <SubjectDetailPage array={dsArray1} teacher="Pravin Karma" linksArray={dsPkArray} pyq2023Array={pyqAm2Cc}/>
  },

  //de
  {
    path: "/year2/cse/3CERC4Ashish",
    element: <SubjectDetailPage array={deArray1} teacher="Ashish Panchal" linksArray={deApArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/cse/3CERC4Pravin",
    element: <SubjectDetailPage array={deArray1} teacher="Pravin Singh" linksArray={dePsArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/it/3ITRC4Sneha",
    element: <SubjectDetailPage array={deArray1} teacher="Aditya Makwe" linksArray={deSmArray} pyq2023Array={pyqAm2Cc}/>
  },

  //ch
  {
    path: "/year2/cse/3CERL1Vikas",
    element: <SubjectDetailPage array={chArray} teacher="Vikas Vankhede" linksArray={chVvArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/it/3ITRL1C.P.",
    element: <SubjectDetailPage array={chArray} teacher="C.P. Patidar" linksArray={chCpArray} pyq2023Array={pyqAm2Cc}/>
  },
  
  //ca
  {
    path: "/year2/cse/3CERG1Vrinda",
    element: <SubjectDetailPage array={caArray} teacher="Vrinda Tokekar" linksArray={caVtArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/it/3ITRG1C.P.",
    element: <SubjectDetailPage array={caArray} teacher="C.P. Patidar" linksArray={caCpArray} pyq2023Array={pyqAm2Cc}/>
  },

  //es
  {
    path: "/year2/cse/3SCRS3Ajay",
    element: <SubjectDetailPage array={esArray} teacher="Ajay Chhabriya" linksArray={esAcArray} pyq2023Array={pyqAm2Cc}/>
  },
  
  //lm
  {
    path: "/year2/it/3SIRS3Kamna",
    element: <SubjectDetailPage array={lmArray} teacher="Kamna Lad" linksArray={lmKlArray} pyq2023Array={pyqAm2Cc}/>
  },


]
  
  
  



export default routes;