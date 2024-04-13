// import React from "react";
import Btn from "../components/Btn";
import About from "./About";

// const Home = () => {
//   return (
//     <div className="w-[100vw] bg-transparent bg-red-200">
//       <div className="text-center w-[100vw] h-[80vh] flex flex-col justify-center  bg-center bg-no-repeat bg-fixed herobg text-white">
//         <h1 className="text-5xl font-bold mb-4">
//           Welcome to <span className="text-red-100">Care Connect</span>
//         </h1>
//         <p className="text-lg text-gray-200 mb-8">
//           Your go-to platform for accessing healthcare services
//         </p>
//         {/* Search bar */}
//         <div className="mb-8">
//           <input
//             type="text"
//             placeholder="Enter your location..."
//             className="w-8/12 p-4 rounded-full bg-gray-50 border-2 border-red-300 focus:outline-none focus:border-red-500 focus:bg-red-50 text-gray-900 font-medium px-5"
//           />
//           {/* Add search button if needed */}
//         </div>
//         {/* Quick links */}
//         <div className="flex justify-center space-x-4">
//           {/* <a href="/emergency" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Emergency Services</a> */}
// <Btn text={"Find Hospitals"} path={"/hospital"} />
// <Btn text={"Book Appointments"} isDisabled={true} />
//           {/* <a href="/services" className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">Find Services</a> */}
//         </div>
//       </div>
//       {/* Testimonials section */}

//       <About />
//     </div>
//   );
// };

// export default Home;

// 2nd

import React, { useState } from "react";

// Example hardcoded data for cities and hospitals
const citiesAndHospitals = {
  Mumbai: ["Hospital A", "Hospital B", "Hospital C"],
  Delhi: ["Hospital D", "Hospital E", "Hospital F"],
  Bangalore: ["Hospital G", "Hospital H", "Hospital I"],
  Chennai: ["Hospital J", "Hospital K", "Hospital L"],
  Kolkata: ["Hospital M", "Hospital N", "Hospital O"],
  Hyderabad: ["Hospital P", "Hospital Q", "Hospital R"],
  Pune: ["Hospital S", "Hospital T", "Hospital U"],
  Ahmedabad: ["Hospital V", "Hospital W", "Hospital X"],
  Jaipur: ["Hospital Y", "Hospital Z", "Hospital AA"],
  Lucknow: ["Hospital AB", "Hospital AC", "Hospital AD"],
  Surat: ["Hospital AE", "Hospital AF", "Hospital AG"],
  Kanpur: ["Hospital AH", "Hospital AI", "Hospital AJ"],
  Nagpur: ["Hospital AK", "Hospital AL", "Hospital AM"],
  Patna: ["Hospital AN", "Hospital AO", "Hospital AP"],
  Indore: ["Hospital AQ", "Hospital AR", "Hospital AS"],
  Thane: ["Hospital AT", "Hospital AU", "Hospital AV"],
  Bhopal: ["Hospital AW", "Hospital AX", "Hospital AY"],
  Visakhapatnam: ["Hospital AZ", "Hospital BA", "Hospital BB"],
  Vadodara: ["Hospital BC", "Hospital BD", "Hospital BE"],
  Ludhiana: ["Hospital BF", "Hospital BG", "Hospital BH"],
  Agra: ["Hospital BI", "Hospital BJ", "Hospital BK"],
  Nashik: ["Hospital BL", "Hospital BM", "Hospital BN"],
  Ranchi: ["Hospital BO", "Hospital BP", "Hospital BQ"],
  Faridabad: ["Hospital BR", "Hospital BS", "Hospital BT"],
  Meerut: ["Hospital BU", "Hospital BV", "Hospital BW"],
  Rajkot: ["Hospital BX", "Hospital BY", "Hospital BZ"],
  Srinagar: ["Hospital CA", "Hospital CB", "Hospital CC"],
  Amritsar: ["Hospital CD", "Hospital CE", "Hospital CF"],
  Allahabad: ["Hospital CG", "Hospital CH", "Hospital CI"],
  Howrah: ["Hospital CJ", "Hospital CK", "Hospital CL"],
  Jabalpur: ["Hospital CM", "Hospital CN", "Hospital CO"],
  Gwalior: ["Hospital CP", "Hospital CQ", "Hospital CR"],
  Vijayawada: ["Hospital CS", "Hospital CT", "Hospital CU"],
  Jodhpur: ["Hospital CV", "Hospital CW", "Hospital CX"],
  Madurai: ["Hospital CY", "Hospital CZ", "Hospital DA"],
  Raipur: ["Hospital DB", "Hospital DC", "Hospital DD"],
  Kota: ["Hospital DE", "Hospital DF", "Hospital DG"],
  Guwahati: ["Hospital DH", "Hospital DI", "Hospital DJ"],
  Chandigarh: ["Hospital DK", "Hospital DL", "Hospital DM"],
  Solapur: ["Hospital DN", "Hospital DO", "Hospital DP"],
  Bareilly: ["Hospital DT", "Hospital DU", "Hospital DV"],
  Moradabad: ["Hospital DW", "Hospital DX", "Hospital DY"],
  Mysore: ["Hospital DZ", "Hospital EA", "Hospital EB"],
  Gurgaon: ["Hospital EC", "Hospital ED", "Hospital EE"],
  Aligarh: ["Hospital EF", "Hospital EG", "Hospital EH"],
  Jalandhar: ["Hospital EI", "Hospital EJ", "Hospital EK"],
  Tiruchirappalli: ["Hospital EL", "Hospital EM", "Hospital EN"],
  Bhubaneswar: ["Hospital EO", "Hospital EP", "Hospital EQ"],
  Salem: ["Hospital ER", "Hospital ES", "Hospital ET"],
  Warangal: ["Hospital EU", "Hospital EV", "Hospital EW"],
  Faridabad: ["Hospital EX", "Hospital EY", "Hospital EZ"],
  Alappuzha: ["Hospital FA", "Hospital FB", "Hospital FC"],
  Thiruvananthapuram: ["Hospital FD", "Hospital FE", "Hospital FF"],
  Kannur: ["Hospital FG", "Hospital FH", "Hospital FI"],
  Kollam: ["Hospital FJ", "Hospital FK", "Hospital FL"],
  Kozhikode: ["Hospital FM", "Hospital FN", "Hospital FO"],
  Thrissur: ["Hospital FP", "Hospital FQ", "Hospital FR"],
  Kochi: ["Hospital FS", "Hospital FT", "Hospital FU"],
  Palakkad: ["Hospital FV", "Hospital FW", "Hospital FX"],
  Malappuram: ["Hospital FY", "Hospital FZ", "Hospital GA"],
  Pathanamthitta: ["Hospital GB", "Hospital GC", "Hospital GD"],
  Wayanad: ["Hospital GE", "Hospital GF", "Hospital GG"],
  Kasaragod: ["Hospital GH", "Hospital GI", "Hospital GJ"],
  Kottayam: ["Hospital GK", "Hospital GL", "Hospital GM"],
  Idukki: ["Hospital GN", "Hospital GO", "Hospital GP"],
  Ernakulam: ["Hospital GQ", "Hospital GR", "Hospital GS"],
  Kannur: ["Hospital GT", "Hospital GU", "Hospital GV"],
  Kasaragod: ["Hospital GW", "Hospital GX", "Hospital GY"],
  Kollam: ["Hospital GZ", "Hospital HA", "Hospital HB"],
  Kottayam: ["Hospital HC", "Hospital HD", "Hospital HE"],
  Malappuram: ["Hospital HF", "Hospital HG", "Hospital HH"],
  Palakkad: ["Hospital HI", "Hospital HJ", "Hospital HK"],
  Pathanamthitta: ["Hospital HL", "Hospital HM", "Hospital HN"],
  Thrissur: ["Hospital HO", "Hospital HP", "Hospital HQ"],
  Thiruvananthapuram: ["Hospital HR", "Hospital HS", "Hospital HT"],
  Wayanad: ["Hospital HU", "Hospital HV", "Hospital HW"],
};

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setHospitals([]);
    setShowResults(false); // Reset results on new input
  };

  const handleSearch = () => {
    setHospitals(citiesAndHospitals[selectedCity] || []);
    setShowResults(true);
  };

  return (
    <>
      <div className="w-full herobg min-h-[80vh]">
        <div className="text-center p-20 bg-transparent text-white">
          <div className="mb-8 relative ">
            <input
              type="text"
              placeholder="Enter your location..."
              list="cities"
              className="w-8/12 p-4 rounded-l-full bg-white  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-red-500 font-medium "
              onChange={handleCityChange}
            />
            <button
              onClick={handleSearch}
              className="absolute top-0 rounded-r-full bg-white text-red-500 p-4 hover:bg-red-700 hover:text-white focus:outline-none"
            >
              Search
            </button>
            <datalist id="cities">
              {Object.keys(citiesAndHospitals).map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>
          <div className="flex space-y-4 md:space-y-0 md:space-x-6 justify-center flex-col md:flex-row  ">
            <Btn text={"Emergency"} path={"/hospital"} />
            <Btn text={"Book Appointments"} path={"/appointment"} />
          </div>
        </div>

        {showResults && hospitals.length > 0 && (
          <div className="p-8 bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
              Hospitals in {selectedCity}:
            </h2>
            <ul className="list-disc pl-5 space-y-3 ">
              {hospitals.map((hospital, index) => (
                <li key={index} className="hover:text-blue-600">
                  <a
                    href={`/hospital/${hospital}`}
                    className="text-blue-500 hover:underline"
                  >
                    {hospital}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display a message if no hospitals are found after a search */}
        {showResults && hospitals.length === 0 && (
          <div className="p-8 bg-red-50 text-center mx-auto w-8/12 rounded-md">
            <h2 className="text-xl font-semibold">
              No hospitals found in {selectedCity}.
            </h2>
          </div>
        )}
      </div>
      <About />
    </>
  );
};

export default Home;
