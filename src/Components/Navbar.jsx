import React from 'react'
import { GhIcon } from './svg';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Navbar = () => {
    
     const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  function getTimeOfDay() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }
    
    return (
        <>
            <main className="">
                <header
                    className={clsx(
                        "fixed z-40 top-0 md:relatives bg-gradient-to-r from-[#131313]  to-[#383838] pb-3 w-full pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]"
                    )}
                >
                    <nav className="flex items-center justify-between">
                        <Link to="/">
                            <div
                                className={`before:content-['']  text-white font-medium text-[18px] md:text-[25px] lg:hover:before:bg-[#0000]s active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 </span>before:-bottom-1 before:transition-all before:duration-300  "text-black hover:before:w-full" : "text-black/90 hover:before:w-full"} relative`}
                            >
                                <span 
                                className={`text-[#fff]   mx-auto text-center font-medium  md:leading-[30px]`}
                            > 
                                {timeOfDay === "morning" && <span> Good Morning</span>}
                                {timeOfDay === "afternoon" && <span> Good Afternoon</span>}
                                {timeOfDay === "evening" && <span> Good evening</span>}
                                {/* {timeOfDay === "evening" && <span>somewhere in the metaverse</span>} */}
                            </span>
                                <span></span>
                            </div>
                        </Link>
                        <div className="text-[#000] group group-hover:text-black transition-all duration-300">
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                to="https://www.github.com/Jeffreyxdev"
                                className="group-hover:text-black transition-colors duration-300"
                            >
                                <span className="flex items-center gap-[8px] md:gap-[10px]">
                                    <GhIcon fill={`#1c2c61`} className="w-[26px] h-[26px] md:w-[32px] md:h-[32px] text-black !fill-black duration-300" />
                                    <p className="font-clash text-[15px] md:text-[18px] font-medium group-shover:text-white transition-colors duration-300">
                                        github
                                    </p>
                                </span>
                            </Link>
                        </div>
                    </nav>
                </header>
            </main>
        </>
    );
};

export default Navbar