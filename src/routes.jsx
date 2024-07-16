import App from "./App/App.jsx"
import ErrorPage from "./Error/Error.jsx";
// import Page2 from "./Page2/Page2.jsx";
import SubjectDetailPage from "./SubjectDetailPage/SubjectDetailPage.jsx";
import {year1Batch1Array, year1Batch2Array, am1Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray , year2CseBatch1Array, year2ItBatch1Array, year2CseBatch2Array, year2ItBatch2Array, beArray, cArray, eArray, emeArray, emeIhArray, emeJsArray, emeNsArray, emeSkArray, apArray, apRgArray, apSkArray, hAaArray, hAsArray, hArray, edArray, edOjArray, eeArray, eeAvArray, eeNArray, eeSpArray, eeTsArray, cpArray, cpMpArray, cpNcArray, am2Array, am2CcArray,pyqAm1Ak, pyqAm1Db, pyqAm1Sa, pyqAm2Cc, pyqApRg, pyqApSk, pyqBeAg, pyqBeAj, pyqCDm, pyqCJs, pyqCpMp, pyqCpNc, pyqERs, pyqEdOj, pyqEeAv, pyqEeN, pyqEeSp, pyqEeTs, pyqEmeIh, pyqEmeJs, pyqEmeNs, pyqEmeSk, pyqHAa, pyqHAs, 
  am3Array1, am3Array2, am3Array3, am3PsArray, am3SaArray, am3VfArray, oopArray, oopJhArray, oopAmArray, dsArray1, dsArray2, dsAjArray, dsVjArray, dsVfArray, dsPkArray, 
  deArray1, deArray2, deApArray, dePsArray, deStArray, deSmArray, caArray, caVtArray, caCpArray, chArray, chVvArray, chCpArray, lmArray, lmKlArray, esArray, esAcArray,
  aeArray, aeGkArray, aeSkArray, naArray, naAvArray, naDnArray, sw1Array, sw1MjArray, csArray, csVfArray, deSbArray, dsHpArray, aeSpArray, sw1SsArray,
  somArray, somGpArray,sArray, sSmArray, cmArray, cmPtArray, smArray, smGvArray, dcsScArray, 
  dmArray, dmSaArray, dcsArray, pyqAm2V, am2VArray,am2DrArray, pyqAm2Dr, eeBArray, pyqEeB, hDbArray, pyqHDb, 
  pyqAeGk, pyqAeSk, pyqAeSp, pyqAm3Sa, pyqCaCpP, pyqCaVt, pyqChCpP, pyqChVv, pyqCmPt, pyqDcsSc, pyqDeAp, pyqDePs, pyqDeSb, pyqDeSm, pyqDeSt, pyqDmSa, pyqDsAj, pyqDsHp, pyqDsPk, pyqDsVj, pyqEsAc, pyqLmKl, pyqNaAv, pyqNaDn, pyqOopAm, pyqOopJh, pyqSSm, pyqSmGv, pyqSomGp, pyqSw1Mj, pyqSw1Ss, pyqAm3Ps, pyqAm3Ab
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
    path:"/sorry" ,
    element: <ErrorPage />
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
  {
    path: "/year1/batch2/2SSRS2Deepali",
    element: <SubjectDetailPage array={hArray} teacher="Deepali Bajaj" linksArray={hDbArray} pyq2023Array={pyqHDb}/>
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
  {
    path: "/year1/batch2/2EIRC4Bhallavi",
    element: <SubjectDetailPage array={eeArray} teacher="Bhallavi" linksArray={eeBArray} pyq2023Array={pyqEeB}/>
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
  {
    path: "/year1/batch2/2AMRC1Vikas",
    element: <SubjectDetailPage array={am2Array} teacher="Vikas" linksArray={am2VArray} pyq2023Array={pyqAm2V}/>
  },
  {
    path: "/year1/batch2/2AMRC1Deepika",
    element: <SubjectDetailPage array={am2Array} teacher="Deepika Rai" linksArray={am2DrArray} pyq2023Array={pyqAm2Dr}/>
  },

  //year2Subjects

  //am3
  {
    path: "/year2/cse/3ACRC1Salika",
    element: <SubjectDetailPage array={am3Array1} teacher="Salika Ansari" linksArray={am3SaArray} pyq2023Array={pyqAm3Sa}/>
  },
  {
    path: "/year2/etc/3ATRC1Pravin",
    element: <SubjectDetailPage array={am3Array2} teacher="Pravin Singh" linksArray={am3PsArray} pyq2023Array={pyqAm3Ps}/>
  },
  {
    path: "/year2/ei/3AERC1Vf",
    element: <SubjectDetailPage array={am3Array2} teacher="visting f." linksArray={am3VfArray} pyq2023Array={pyqAm3Ab}/>
  },
  {
    path: "/year2/civil/AVR3C1Vf",
    element: <SubjectDetailPage array={am3Array3} teacher="visting f." linksArray={am3VfArray} pyq2023Array={pyqAm2Cc}/>
  },
  // {
  //   path: "/year2/mech/3AMRC1Abhilasha",
  //   element: <SubjectDetailPage array={am3Array2} teacher="Abhilasha Bhagwat" linksArray={am3PsArray} pyq2023Array={pyqAm3Ab}/>
  // },

  //dm
  {
    path: "/year2/it/3AIRC1Sufiya",
    element: <SubjectDetailPage array={dmArray} teacher="Sufiya Aziz" linksArray={dmSaArray} pyq2023Array={pyqDmSa}/>
  },

  //oop
  {
    path: "/year2/cse/3CERC2Jyoti",
    element: <SubjectDetailPage array={oopArray} teacher="Jyoti Haveliya" linksArray={oopJhArray} pyq2023Array={pyqOopJh}/>
  },
  {
    path: "/year2/it/3ITRC2Aditya",
    element: <SubjectDetailPage array={oopArray} teacher="Aditya Makwe" linksArray={oopAmArray} pyq2023Array={pyqOopAm}/>
  },

  //ds
  {
    path: "/year2/cse/3CERC3Vaibhav",
    element: <SubjectDetailPage array={dsArray1} teacher="Vaibhav Jain" linksArray={dsVjArray} pyq2023Array={pyqDsVj}/>
  },
  {
    path: "/year2/cse/3CERC3Ashish",
    element: <SubjectDetailPage array={dsArray1} teacher="Ashish Jain" linksArray={dsAjArray} pyq2023Array={pyqDsAj}/>
  },
  {
    path: "/year2/it/3ITRC3Pravin",
    element: <SubjectDetailPage array={dsArray1} teacher="Pravin Karma" linksArray={dsPkArray} pyq2023Array={pyqDsPk}/>
  },
  {
    path: "/year2/etc/3ETRC3Vf",
    element: <SubjectDetailPage array={dsArray2} teacher="Visiting f." linksArray={dsVfArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/ei/3EIRC3Hemlata",
    element: <SubjectDetailPage array={dsArray2} teacher="Hemlata Pal" linksArray={dsHpArray} pyq2023Array={pyqDsHp}/>
  },

  //de
  {
    path: "/year2/cse/3CERC4Ashish",
    element: <SubjectDetailPage array={deArray1} teacher="Ashish Panchal" linksArray={deApArray} pyq2023Array={pyqDeAp}/>
  },
  {
    path: "/year2/cse/3CERC4Pravin",
    element: <SubjectDetailPage array={deArray1} teacher="Pravin Singh" linksArray={dePsArray} pyq2023Array={pyqDePs}/>
  },
  {
    path: "/year2/it/3ITRC4Sneha",
    element: <SubjectDetailPage array={deArray1} teacher="Sneha Moghe" linksArray={deSmArray} pyq2023Array={pyqDeSm}/>
  },
  {
    path: "/year2/etc/3ETRC2Sanjiv",
    element: <SubjectDetailPage array={deArray2} teacher="Sanjiv Tokekar" linksArray={deStArray} pyq2023Array={pyqDeSt}/>
  },
  {
    path: "/year2/ei/3EIRC2Shivangi",
    element: <SubjectDetailPage array={deArray2} teacher="Shivangi Bande" linksArray={deSbArray} pyq2023Array={pyqDeSb}/>
  },

  //ch
  {
    path: "/year2/cse/3CERL1Vikas",
    element: <SubjectDetailPage array={chArray} teacher="Vikas Vankhede" linksArray={chVvArray} pyq2023Array={pyqChVv}/>
  },
  {
    path: "/year2/it/3ITRL1C.P.",
    element: <SubjectDetailPage array={chArray} teacher="C.P. Patidar" linksArray={chCpArray} pyq2023Array={pyqChCpP}/>
  },
  
  //ca
  {
    path: "/year2/cse/3CERG1Vrinda",
    element: <SubjectDetailPage array={caArray} teacher="Vrinda Tokekar" linksArray={caVtArray} pyq2023Array={pyqCaVt}/>
  },
  {
    path: "/year2/it/3ITRG1C.P.",
    element: <SubjectDetailPage array={caArray} teacher="C.P. Patidar" linksArray={caCpArray} pyq2023Array={pyqCaCpP}/>
  },

  //es
  {
    path: "/year2/cse/3SCRS3Ajay",
    element: <SubjectDetailPage array={esArray} teacher="Ajay Chhabriya" linksArray={esAcArray} pyq2023Array={pyqEsAc}/>
  },
  
  //lm
  {
    path: "/year2/it/3SIRS3Kamna",
    element: <SubjectDetailPage array={lmArray} teacher="Kamna Lad" linksArray={lmKlArray} pyq2023Array={pyqLmKl}/>
  },
  {
    path: "/year2/civil/SVR3S3Kamna",
    element: <SubjectDetailPage array={lmArray} teacher="Kamna Lad" linksArray={lmKlArray} pyq2023Array={pyqLmKl}/>
  },
  
  //ae
  {
    path: "/year2/ei/3EIRC4Shashi",
    element: <SubjectDetailPage array={aeArray} teacher="Shashi Prakash" linksArray={aeSpArray} pyq2023Array={pyqAeSp}/>
  },
  {
    path: "/year2/etc/3ETRC4Shahid",
    element: <SubjectDetailPage array={aeArray} teacher="Shahid Khilji" linksArray={aeSkArray} pyq2023Array={pyqAeSk}/>
  },
  {
    path: "/year2/etc/3ETRC4Gitesh",
    element: <SubjectDetailPage array={aeArray} teacher="Gitesh Kwatra" linksArray={aeGkArray} pyq2023Array={pyqAeGk}/>
  },

  //na
  {
    path: "/year2/ei/3EIRG1Ajay",
    element: <SubjectDetailPage array={naArray} teacher="Ajay Verma" linksArray={naAvArray} pyq2023Array={pyqNaAv}/>
  },
  {
    path: "/year2/etc/3ETRG1Ajay",
    element: <SubjectDetailPage array={naArray} teacher="Ajay Verma" linksArray={naAvArray} pyq2023Array={pyqNaAv}/>
  },
  {
    path: "/year2/etc/3ETRG1Dhiraj",
    element: <SubjectDetailPage array={naArray} teacher="Dhiraj Nitanaware" linksArray={naDnArray} pyq2023Array={pyqNaDn}/>
  },

  //sw-1
  {
    path: "/year2/ei/3EIRL1Sangita",
    element: <SubjectDetailPage array={sw1Array} teacher="Sangita Solanki" linksArray={sw1SsArray} pyq2023Array={pyqSw1Ss}/>
  },
  {
    path: "/year2/etc/3ETRL1Madhvi",
    element: <SubjectDetailPage array={sw1Array} teacher="Madhvi Janglwa" linksArray={sw1MjArray} pyq2023Array={pyqSw1Mj}/>
  },

  //cs
  {
    path: "/year2/ei/3STRS3Vf",
    element: <SubjectDetailPage array={csArray} teacher="Visiting f." linksArray={csVfArray} pyq2023Array={pyqAm2Cc}/>
  },
  {
    path: "/year2/etc/3STRS3Vf",
    element: <SubjectDetailPage array={csArray} teacher="Visiting f." linksArray={csVfArray} pyq2023Array={pyqAm2Cc}/>
  },

  //som
  {
    path: "/year2/civil/VLR3C2Girish",
    element: <SubjectDetailPage array={somArray} teacher="Girish Patidar" linksArray={somGpArray} pyq2023Array={pyqAm2Cc}/>
  },

  //surveying
  {
    path: "/year2/civil/VLR3C3Shivangi",
    element: <SubjectDetailPage array={sArray} teacher="Shivangi Mishra" linksArray={sSmArray} pyq2023Array={pyqSSm}/>
  },

  //cm
  {
    path: "/year2/civil/VLR3C4Pragya",
    element: <SubjectDetailPage array={cmArray} teacher="Pragya Tiwari" linksArray={cmPtArray} pyq2023Array={pyqCmPt}/>
  },

  //sm
  {
    path: "/year2/civil/VLR3G1Gajendra",
    element: <SubjectDetailPage array={smArray} teacher="Gajendra Verma" linksArray={smGvArray} pyq2023Array={pyqSmGv}/>
  },

  //dcs
  {
    path: "/year2/civil/VLR3L1Sangeeta",
    element: <SubjectDetailPage array={dcsArray} teacher="Sangeeta Chouhan" linksArray={dcsScArray} pyq2023Array={pyqDcsSc}/>
  },



]
  
  
  



export default routes;