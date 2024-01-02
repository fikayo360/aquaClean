import { useInView } from 'react-intersection-observer';

const NavMobile = ({navActive}) => { 
    const [ref, inView] = useInView();
    return (
        <div ref={ref} className={`w-[100%] h-[96%] flex lg:hidden flex-col absolute z-10 bg-[#6E44FF] overflow-hidden ${inView?'animate__animated animate__fadeIn':''}`} >
            <div className="w-[100%] h-[10%] flex justify-between items-center px-3 md:px-5">
                <span className="text-[1.2rem] md:text-[1.4rem] font-bold uppercase font-pop">AquaClean </span>
                <img src='./close.png' className="w-[20px] h-[20px]" onClick={navActive}/>
            </div>
            <div className="w-[100%] h-[80%] flex pl-3 items-center justify-center">
                <ul className="w-[100%] h-[80%]  flex flex-col gap-[5rem] md:gap-[5rem] md:items-center">
                    <li ref={ref} className=''><a href='#hero' className="text-4xl font-bold font-mont">Home</a></li>
                    <li ref={ref}><a href="#about" className="text-4xl font-bold font-mont">about</a></li>
                    <li ref={ref}><a href="#services" className="text-4xl font-bold font-mont">services</a></li>
                    <li ref={ref}><a href="#team" className="text-4xl font-bold font-mont">team</a></li>
                    <li ref={ref}><a href="#contact" className="text-4xl font-bold font-mont">contact</a></li>
                </ul>
            </div>
            <div className="w-[100%] h-[10%] flex flex-row items-center justify-center" >
             <span className="text-1xl font-bold font-mont">Aqua Clean &copy; 2023 all rights reserved </span>
           </div>
        </div>
    )
}

export default NavMobile