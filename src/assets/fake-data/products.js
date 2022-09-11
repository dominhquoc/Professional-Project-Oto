// all images imported from images directory
import product_EQS0 from "../images/EQS.png";
import product_EQS1 from "../images/EQS-1.jpeg";
import product_EQS2 from "../images/EQS-2.jpeg";

import product_MaybackS from "../images/Mayback-S-Class.png";
import product_MaybackS_01 from "../images/maybacks-01.jpeg";
import product_MaybackS_02 from "../images/maybacks-02.jpeg";

import product_AClas_00 from "../images/A-Class.png";
import product_AClas_01 from "../images/AClass-01.jpg";
import product_AClas_02 from "../images/AClass-02.jpeg";

import product_00_gla from "../images/GLA.png";
import product_01_gla from "../images/gla-01.jpg";
import product_02_gla from "../images/gla-02.jpg";

import product_00_glc from "../images/GLC.png";
import product_01_glc from "../images/glc_01.jpeg";
import product_02_glc from "../images/glc_02.jpeg";

import product_CClas_00 from "../images/C-Class.png";
import product_CClas_01 from "../images/CClass-01.jpeg";
import product_CClas_02 from "../images/CClass-02.jpeg";

import product_GLC_Coupe_00 from "../images/GLC.png";
import product_GLC_Coupe_01 from "../images/GLC_coupe_01.jpeg";
import product_GLC_Coupe_02 from "../images/GLC_coupe_02.jpeg";

import product_00_gle from "../images/GLE.png";
import product_01_gle from "../images/gle-01.jpeg";
import product_02_gle from "../images/gle-02.jpeg";

import product_Sclass_00 from "../images/S-Class.png";
import product_Sclass_01 from "../images/SClas_01.jpeg";
import product_Sclass_02 from "../images/SClas_02.jpeg";

import product_eclas_00 from "../images/E-Class-00.png";
import product_eclas_01 from "../images/Eclass-01.jpeg";
import product_eclas_02 from "../images/Eclass-02.jpeg";

import product_00_glas from "../images/G-CLass.png";
import product_01_glas from "../images/glas-01.jpeg";
import product_02_glas from "../images/glas-02.jpeg";

import product_00_amg from "../images/AMG-GT.png";
import product_01_amg from "../images/amg-01.jpeg";
import product_02_amg from "../images/amg-02.jpeg";

import product_00_v from "../images/V-Class.png";
import product_01_v from "../images/v-01.jpeg";
import product_02_v from "../images/v-02.jpg";

const products = [
  {
    id: "01",
    title: "EQS",
    price: 205.0,
    image01: product_EQS0,
    image02: product_EQS1,
    image03: product_EQS2,
    category: "Sedans",

    desc: "EQS 450+: electrical consumption in kWh/100 km (combined): 19.1-16.0; CO2 emissions in g/km (combined): EQS 580 4MATIC: electrical consumption in kWh/100 km (combined): 20.0-16.9; CO2 emissions in g/km (combined): All technical figures (on electrical consumption, range, performance, torque, recuperation and driving performance) are provisional and have been determined internally in accordance with the WLTP test procedure certification method. So far there are neither confirmed figures from TÜV, an EC type approval nor a certificate of conformity with official figures. There may be differences between the stated figures and the official figures. ",
  },

  {
    id: "02",
    title: "A Class",
    price: 115.0,
    image01: product_AClas_00,
    image02: product_AClas_01,
    image03: product_AClas_02,
    category: "Sedans",

    desc: "The new Mercedes-AMG A 35 4MATIC Saloon provides the ideal introduction to the world of AMG Driving Performance. The AMG-specific radiator grille and the large air intakes with flics on the front apron simply ooze sporty power and provide proof of the car's AMG genes. In addition, the sporty fresh interpretation of the classic 3-box design lends this Mercedes-AMG dynamic elegance.",
  },

  {
    id: "03",
    title: "C Class",
    price: 110.0,
    image01: product_CClas_00,
    image02: product_CClas_01,
    image03: product_CClas_02,
    category: "Sedans",

    desc: "The journey: dynamic, comfortable and agile.The new C-Class offers relaxation in every situation. Your driving behaviour also helps. The innovative suspension with adaptive adjustable damping gives you the choice of maximum agility or high damping comfort.",
  },

  {
    id: "04",
    title: "GLC Coupe",
    price: 110.0,
    image01: product_GLC_Coupe_00,
    image02: product_GLC_Coupe_01,
    image03: product_GLC_Coupe_02,
    category: "Coupes",

    desc: "Safely on track. Wherever you're going. Intelligently interconnected safety and assistance systems take the strain for you in tricky driving situations.",
  },

  {
    id: "05",
    title: "S Class",
    price: 24.0,
    image01: product_Sclass_00,
    image02: product_Sclass_01,
    image03: product_Sclass_02,
    category: "Sedans",

    desc: "Modern aesthetics and generous luxury.The clear design of the new Mercedes-Benz S-Class focuses on what matters: perfect exterior proportions and contemporary luxury inside. The pioneering innovations of the new S-Class thus give it a unique and irresistible presence. ",
  },
  {
    id: "06",
    title: "E Class",
    price: 24.0,
    image01: product_eclas_00,
    image02: product_eclas_01,
    image03: product_eclas_02,
    category: "Sedans",

    desc: "Safety: when everyone wins.Modern assistance systems in the new E-Class Sedan ensure one thing above all: that you do not have to worry.",
  },

  {
    id: "07",
    title: "GLA",
    price: 115.0,
    image01: product_00_gla,
    image02: product_01_gla,
    image03: product_02_gla,
    category: "Suv",

    desc: "They make space for you that you would never imagine existed. Live out your vision of freedom. As the Mercedes-AMG GLA models will take you anywhere there are roads - and often beyond. And all that's on top of the irresistibly expressive character of the vehicle immediately marking it out as a member of the AMG family",
  },

  {
    id: "08",
    title: "GLC",
    price: 110.0,
    image01: product_00_glc,
    image02: product_01_glc,
    image03: product_02_glc,
    category: "Suv",

    desc: "A symbol of modern luxury.The GLC SUV exudes a hallmark SUV presence without being overly imposing. New highlights include the front-end with MULTIBEAM LED headlamps and new-look tailpipe trims at the rear.",
  },

  {
    id: "09",
    title: "GLE",
    price: 110.0,
    image01: product_00_gle,
    image02: product_01_gle,
    image03: product_02_gle,
    category: "Suv",

    desc: "Thoroughly thought out. The new GLB is here. The most versatile compact SUV we have ever built.",
  },

  {
    id: "10",
    title: "G Class",
    price: 24.0,
    image01: product_00_glas,
    image02: product_01_glas,
    image03: product_02_glas,
    category: "Suv",

    desc: "The shape of success. In a whole new dimension.More intelligent and attentive than ever - the new GLE casts the SUV in a whole new light.",
  },

  {
    id: "11",
    title: "May Back S Class",
    price: 35.0,
    image01: product_MaybackS,
    image02: product_MaybackS_01,
    image03: product_MaybackS_02,
    category: "Sedans",

    desc: "Our aim is to leave you speechless. The new Mercedes-Maybach S-Class defines ultimate luxury like never before. The highest-quality materials, excellent workmanship, outstanding comfort as well as innovative technologies and your personal assistant in the form of the intelligent MBUX infotainment system herald a new era of driving.",
  },

  {
    id: "12",
    title: "AMG GT",
    price: 35.0,
    image01: product_00_amg,
    image02: product_01_amg,
    image03: product_02_amg,
    category: "Coupes",

    desc: "One highlight after another. The Mercedes-AMG GT is a breathtaking Gran Turismo with AMG 4.0-litre V8 biturbo engine that only its two GT siblings can surpass: the AMG GT C and the AMG GT R take AMG Driving Performance to a new level.",
  },

  {
    id: "13",
    title: "V Class",
    price: 35.0,
    image01: product_00_v,
    image02: product_01_v,
    image03: product_02_v,
    category: "Vans",

    desc: "The MBUX infotainment system powered by artificial intelligence (AI) is now available on SUV, AMG and V-Class models. MBUX opens up a world of infotainment that's intuitive, touch-controlled, seamlessly integrated into your life and preferences. In addition, the system is capable of learning information and self-adjusting for the driver, which is refined and improved after each ride.",
  },
];

export default products;
