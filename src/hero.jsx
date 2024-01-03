import Navbar from "./navbar"
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import NavMobile from "./navMobile"
import { useState, useRef} from "react"
import { useInView } from 'react-intersection-observer';
const Hero = () => {

    const [text] = useTypewriter({
        words: ['Trash/waste removal','post construction cleaning','moving in and out cleaning','carpet cleaning','windows cleaning','vacumming','restroom sanitization',
        'house keeping services','floor cleaning','event cleaning'],
    })

    const [navActive,setNavActive] = useState(false)

    const [ref, inView] = useInView();

     const toggleMobileNav = ( ) => {
        setNavActive((prev) => !prev)
     }

    return(
        <div id="hero" className="w-screen h-screen bg-cover  bg-center bg-no-repeat flex flex-col relative mb-[4rem] overflow-hidden" style={{backgroundImage:'url(./heroBg.jpg)'}}>
            <Navbar navActive={toggleMobileNav} />
            {navActive?<NavMobile navActive={toggleMobileNav} />:null}
            <div className="w-[100%] h-[90%] flex flex-col justify-center lg:items-start items-center lg:pl-10"> 

                <div className="w-[88%] h-[77%] md:h-[58%] lg:w-[44%] lg:h-[60%] flex flex-col items-center justify-center p-5 border-1 rounded-3xl bg-[#190E4F] pt-5">
                    <h1 ref={ref} className={`text-2xl lg:text-3xl font-bold text-[#ecf2f9] uppercase mb-4 md:mb-6 lg:mb-6 ${inView?'animate__animated animate__rubberBand':''}`}>Aqua-Clean</h1>
                    <h1 className="text-[15px] md:text-[1.5rem] lg:text-[1.3rem] text-[#ecf2f9] mb-4 md:mb-6 lg:mb-3">{`we offer - ${text}`}</h1>
                    <h1 className="text-[13px]  md:text-[1rem] lg:text-[1.2rem] text-[#ecf2f9] text-center mb-2 lg:mb-5">We provide top-notch janitorial services that will make your space shine</h1>
                    <p className="text-[11px] md:text-[1rem] lg:text-[1rem] text-[#ecf2f9] text-center sm:leading-2 leading-[2rem] md:leading-[3rem] lg:leading-7 xl:leading-8 2xl:leading-9">
                    In today's dynamic business world, first impressions matter.
                     A clean and well-maintained workspace not only reflects positively on your company's image but also contributes to a healthier, more productive environment for your employees. 
                     At Aqua-Clean, we understand the profound impact of a sparkling clean space on your business success. 
                    That's why we're dedicated to providing top-notch janitorial services that go beyond mere surface cleaning.  
                    </p>
                    
                </div>
   
            </div>

        </div>
    )   
}

export default Hero