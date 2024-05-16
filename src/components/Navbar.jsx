import olx from "../assets/olx.png"; // Importing OLX logo image
import lens from "../assets/lens.png"; // Importing lens icon image
import arrow from "../assets/arrow.png"; // Importing arrow icon image
import searchImg from "../assets/search.png"; // Importing search icon image
import Login from "./Login"; // Importing Login component
import { useState, useEffect } from "react"; // Importing useState hook from React
import { CgProfile } from "react-icons/cg";

const Navbar = (props) => { // Navbar component declaration

  // State variable to manage login pop-up visibility
  const [loginPop, setLoginPop] = useState(false);

  // Dummy state to simulate user login status
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // console.log('a',a);
  // if (a!=='') {
  //   setIsLoggedIn(true)


  // }
  // setIsLoggedIn(a)
  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-md"> {/* Navbar container */}
        <img src={olx} className="w-15 h-9" /> {/* OLX logo */}
        <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white"> {/* Location input container */}
          <img src={lens} className="w-6 h-5 mt-1" /> {/* Lens icon */}
          <input placeholder="Location" className="ml-1 mr-0 outline-none " /> {/* Location input field */}
          <img src={arrow} className="w-8 h-7 mr-3" /> {/* Arrow icon */}
        </div>
        <div className="flex h-12 ml-4 border-2 border-black bg-white"> {/* Search input container */}
          <input onChange={(e) => props.setSearch(e.target.value)} placeholder="Find Cars, Mobile phones and more" className="ml-3 w-96 outline-none" /> {/* Search input field */}
          <img src={searchImg} /> {/* Search icon */}
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer"> {/* Language selector container */}
          <h1 className="font-semibold">ENGLISH</h1> {/* Language label */}
          <img src={arrow} className="w-8 h-7" /> {/* Arrow icon */}
        </div>
        <div onClick={() => setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
          {isLoggedIn ? (
            <CgProfile className="w-8 h-8" /> // Increase the size of the icon
          ) : (
            <h1 className="font-bold text-lg">Login</h1>
          )}
        </div>
        <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500"> {/* Sell button container */}
          <h1 className="font-bold text-lg ml-3">+ SELL</h1> {/* Sell button */}
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />} {/* Render Login component if loginPop is true */}
    </>
  );
};

export default Navbar; // Exporting Navbar component
