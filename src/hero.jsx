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
        <div id="hero" className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col relative" style={{backgroundImage:'url(./heroBg.jpg)'}}>
            <Navbar navActive={toggleMobileNav} />
            {navActive?<NavMobile navActive={toggleMobileNav} />:null}
            <div className="w-[100%] h-[90%] flex flex-col justify-center lg:items-start items-center lg:pl-10"> 

                <div className="w-[80%] h-[68%] md:h-[50%] lg:w-[40%] lg:h-[60%] flex flex-col items-center justify-center p-5 border-1 rounded-3xl bg-white pt-5">
                    <h1 ref={ref} className={`text-3xl lg:text-5xl font-bold text-black uppercase mb-2 md:mb-6 lg:mb-8 ${inView?'animate__shakeX':''}`}>Aqua-Clean</h1>
                    <h1 className="text-[1rem] lg:text-2xl font-bold text-black mb-2 md:mb-6 lg:mb-5">{`we offer - ${text}`}</h1>
                    <h1 className="text-[16px]  md:text-[1rem] lg:text-2xl text-black text-center font-bold mb-4 lg:mb-5">We provide top-notch janitorial services that will make your space shine</h1>
                    <p className="text-[17px] md:text-[1rem] lg:text-[20px] text-black md:font-bold text-center leading-[3rem] md:leading-8 lg:leading-8">
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