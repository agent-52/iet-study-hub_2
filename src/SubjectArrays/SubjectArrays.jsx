import am1i from "../assets/year1Batch1/1.png"
import emei from "../assets/year1Batch1/5.png"
import bei from "../assets/year1Batch1/4.png"
import chemi from "../assets/year1Batch1/3.png"
import engli from "../assets/year1Batch1/2.png"
import api from "../assets/year1Batch2/1.png"
import edi from "../assets/year1Batch2/2.png"
import humai from "../assets/year1Batch2/5.png"
import eei from "../assets/year1Batch2/3.png"
import cpi from "../assets/year1Batch2/4.png"
import am2i from "../assets/year1Batch2/6.png"

import am1Dbunit1 from "../assets/am1Db/unit1.pdf"
import am1Dbunit2 from "../assets/am1Db/unit2.pdf"
import am1Dbunit3 from "../assets/am1Db/unit3.pdf"
import am1Dbunit4 from "../assets/am1Db/unit4.pdf"
import am1Dbunit5 from "../assets/am1Db/unit5.pdf"







const year1Batch1Array = [
  {
    subCode: "1AMRC1",
    subName: "Appled Mathematics-I",
    src: am1i,
    teachers:["Divyani Badjatiya","Salika Ansari","Anas Khan"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "1MERC3",
    subName: "Elements of Mechanical engg.",
    src: emei,
    teachers:["Jyoti Soni","Ibrahim Hussain","Nagenfra Sohani", "Santosh Kansal"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "1ETRC4",
    subName: "Basic Electronics",
    src: bei,
    teachers:["Amit Jha","Astha Gupta"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Chemistry",
    subCode: "1ACRC2",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Technical English",
    subCode: "1SSRS1",
    src: engli,
    teachers:["Ruchi Singh"],
    url:"/1AMRC1Divyani"
  },
]

const year1Batch2Array = [{
  subName: "Applied Physics",
  subCode: "2APRC2",
  src: api,
  teachers:["Rachna Gupta","Shailendra Khinchi"],
  url:"/1AMRC1Divyani"
},
{
  subName: "Humanities",
  subCode: "2SSRS2",
  src: humai,
  teachers:["Aarti Saran", "Asmita Agrawal"],
  url:"/1AMRC1Divyani"
},
{
  subName: "Engineering Drawing",
  subCode: "2MERC3",
  src: edi,
  teachers:["Omprakash"],
  url:"/1AMRC1Divyani"
},
{
  subName: "Electrical Engineering",
  subCode: "2EIRC4",
  src: eei,
  teachers:["Ajay Verma", "Surekha patil", "Nitin", "Tapesh Sarsodiya"],
  url:"/1AMRC1Divyani"
},
{
  subName: "Computer Programming",
  subCode: "2CORC5",
  src: cpi,
  teachers:["Manoj Pawaiya"],
  url:"/1AMRC1Divyani"
},
{
  subName: "Applied Mathematics-II",
  subCode: "2AMRC1",
  src: am2i,
  teachers:["Chandrashekhar"],
  url:"/1AMRC1Divyani"
},
]

const year1ArrayFull = [
  {
    subCode: "1AMRC1",
    subName: "Appled Mathematics-I",
    src: am1i,
    teachers:["Divyani Badjatiya","Salika Ansari","Anas Khan"],
  },
  {
    subCode: "1MERC3",
    subName: "Elements of Mechanical engg.",
    src: emei,
    teachers:["Jyoti Soni","Ibrahim Hussain","Nagenfra Sohani", "Santosh Kansal"],
  },
  {
    subCode: "1ETRC4",
    subName: "Basic Electronics",
    src: bei,
    teachers:["Amit Jha","Astha Gupta"],
  },
  {
    subName: "Chemistry",
    subCode: "1ACRC2",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
  },
  {
    subName: "Technical English",
    subCode: "1SSRS1",
    src: engli,
    teachers:["Ruchi Singh"],
  },
  {
    subName: "Applied Physics",
    subCode: "2APRC2",
    src: am1i,
    teachers:["Rachna Gupta","Shailendra Khinchi"],
  },
  {
    subName: "Humanities",
    subCode: "2SSRS2",
    src: humai,
    teachers:["Aarti Saran", "Asmita Agrawal"],
  },
  {
    subName: "Engineering Drawing",
    subCode: "2MERC3",
    src: edi,
    teachers:["Omprakash"],
  },
  {
    subName: "Electrical Engineering",
    subCode: "2EIRC4",
    src: eei,
    teachers:["Ajay Verma", "Surekha patil", "Nitin", "Tapesh Sarsodiya"],
  },
  {
    subName: "Computer Programming",
    subCode: "2CORC5",
    src: cpi,
    teachers:["Manoj Pawaiya"],
  },
  {
    subName: "Applied Mathematics-II",
    subCode: "2AMRC1",
    src: am2i,
    teachers:["Chandrashekhar"],
  },
]

const am1DbArray = [
  {
    unit:1,
    name:"Differential Calculus",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Advanced Differential Calculus",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Integral Calculus",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Advanced Integral Calculus",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Vector Calculus",
    yt:"#",
    notes: am1Dbunit5
  },
]
const am1AkArray = [
  {
    unit:1,
    name:"Differential Calculus",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Advanced Differential Calculus",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Integral Calculus",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Advanced Integral Calculus",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Vector Calculus",
    yt:"#",
    notes: am1Dbunit5
  },
]
const am1SaArray = [
  {
    unit:1,
    name:"Differential Calculus",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Advanced Differential Calculus",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Integral Calculus",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Advanced Integral Calculus",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Vector Calculus",
    yt:"#",
    notes: am1Dbunit5
  },
]

/**
 * basic electronics
 */
const beAjArray = [
  {
    unit:1,
    name:"Discrete Electronic Devices",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Diode Circuits",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"BJT Characteristics",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Operational Amplifier",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Basic FeedBack Theory",
    yt:"#",
    notes: am1Dbunit5
  },
]

const beAgArray = [
  {
    unit:1,
    name:"Discrete Electronic Devices",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Diode Circuits",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"BJT Characteristics",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Operational Amplifier",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Basic FeedBack Theory",
    yt:"#",
    notes: am1Dbunit5
  },
]

/**
 * Chemistry
 */
const cDmArray = [
  {
    unit:1,
    name:"Water Applications",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Engineering Materials",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Lubricants",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Material Characterization",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Environmental Science",
    yt:"#",
    notes: am1Dbunit5
  },
]

const cJsArray = [
  {
    unit:1,
    name:"Water Applications",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Engineering Materials",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Lubricants",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Material Characterization",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Environmental Science",
    yt:"#",
    notes: am1Dbunit5
  },
]

/**
 * Technical English
 */
const eRsArray = [
  {
    unit:1,
    name:"Technical Communication",
    yt:"#",
    notes: am1Dbunit1
  },
  {
    unit:2,
    name:"Professional Correspondence",
    yt:"#",
    notes: am1Dbunit2
  },
  {
    unit:3,
    name:"Technical Writing",
    yt:"#",
    notes: am1Dbunit3
  },
  {
    unit:4,
    name:"Reading Comprehension",
    yt:"#",
    notes: am1Dbunit4
  },
  {
    unit:5,
    name:"Foreign words, Phrases, Antonyms",
    yt:"#",
    notes: am1Dbunit5
  },
]

/**
 * Year2
 */
 //year2 cse

 const year2CseBatch1Array = [
  {
    subCode: "3ACRC1",
    subName: "Appled Mathematics-III",
    src: am1i,
    teachers:["Divyani Badjatiya","Salika Ansari","Anas Khan"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "3CERC2",
    subName: "Object Oriented Programming",
    src: emei,
    teachers:["Jyoti Soni","Ibrahim Hussain","Nagenfra Sohani", "Santosh Kansal"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "3CERC3",
    subName: "Data Structure",
    src: bei,
    teachers:["Amit Jha","Astha Gupta"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Digital Electronics",
    subCode: "3CERC4",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Computer Architecture",
    subCode: "3CERG1",
    src: engli,
    teachers:["Ruchi Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Computer Hardware & IOT",
    subCode: "3CERL1",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Environmental Studies",
    subCode: "3SCRS3",
    src: engli,
    teachers:["Ruchi Singh"],
    url:"/1AMRC1Divyani"
  },

 ]

 const year2CseBatch2Array = [
  {
    subCode: "3CERC3",
    subName: "Data Structure",
    src: bei,
    teachers:["Amit Jha","Astha Gupta"],
    url:"/1AMRC1Divyani"
  },
 ]


//Year2 IT

const year2ItBatch1Array = [
  {
    subCode: "3AIRC1",
    subName: "Discrete Mathematics",
    src: am1i,
    teachers:["Divyani Badjatiya","Salika Ansari","Anas Khan"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "3ITRC2",
    subName: "Object Oriented Programming",
    src: emei,
    teachers:["Jyoti Soni","Ibrahim Hussain","Nagenfra Sohani", "Santosh Kansal"],
    url:"/1AMRC1Divyani"
  },
  {
    subCode: "3ITRC3",
    subName: "Data Structure",
    src: bei,
    teachers:["Amit Jha","Astha Gupta"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Digital Electronics",
    subCode: "3ITRC4",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Computer Architecture",
    subCode: "3ITRG1",
    src: engli,
    teachers:["Ruchi Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Computer Hardware & IOT",
    subCode: "3ITRL1",
    src: chemi,
    teachers:["Dheeraj Mandloi","Jitendra Singh"],
    url:"/1AMRC1Divyani"
  },
  {
    subName: "Environmental Studies",
    subCode: "3SIRS3",
    src: engli,
    teachers:["Ruchi Singh"],
    url:"/1AMRC1Divyani"
  },

 ]

 const year2ItBatch2Array = [
  
 ]


export {year1ArrayFull, year1Batch1Array, year1Batch2Array, am1DbArray, am1AkArray, am1SaArray, beAjArray, beAgArray, cDmArray, cJsArray, eRsArray, year2CseBatch1Array, year2ItBatch1Array, year2CseBatch2Array, year2ItBatch2Array }