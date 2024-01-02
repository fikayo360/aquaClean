const Navbar = ({navActive}) => {
    return (
    <div className="w-[100%] h-[8%] mt-[1rem] flex items-center justify-center overflow-hidden">
        
        <div className="w-[100%] px-5 lg:w-[95%] flex justify-between items-center flex-row" >

       <span className="text-2xl font-bold text-[#ecf2f9] lg:ml-[2rem] font-pop ">AquaClean</span>
            
            <div className="lg:w-[43%] lg:h-[3rem] xl:w-[40%] 2xl:w-[34%] border-1 bg-[#190E4F] border-slate-500 shadow-lg shadow-grey-500/40
             rounded-full hidden lg:flex justify-center ">
                <ul className="flex lg:gap-7 xl:gap-10 2xl:gap-12 items-center justify-center w-[100%] h-[100%]">
                    <li className="cursor-pointer hover:text-[0.9rem]"><a href="#hero" className="lg:text-[0.8rem] font-bold text-[#ecf2f9] hover:text-blue-800 font-mont">home</a></li>
                    <li className=" cursor-pointer hover:text-[0.9rem]"><a href="#about" className="lg:text-[0.8rem] font-bold text-[#ecf2f9] hover:text-blue-800 font-mont">about</a></li>
                    <li className=" cursor-pointer hover:text-[0.9rem]"><a href="#services" className="lg:text-[0.8rem] font-bold text-[#ecf2f9] hover:text-blue-800 font-mont">services</a></li>
                    <li className=" cursor-pointer hover:text-[0.9rem]"><a href="#team" className="lg:text-[0.8rem] font-bold text-[#ecf2f9] hover:text-blue-800 font-mont">team</a></li>
                    <li className=" cursor-pointer hover:text-[0.9rem]"><a href="#contact" className="lg:text-[0.8rem] font-bold text-[#ecf2f9] hover:text-blue-800 font-mont">appointment</a></li>
                </ul>
            </div>

            <div className="hidden lg:flex flex-row gap-2 justify-center items-center"><img src='./phone.png' className="w-[25px] h-[25px]"/>
            <span className="lg:text-[0.8rem] text-white font-bold font-pop">+ 268 764 333 72</span>
            </div>

            <img src="hamburger.png" className="w-[30px] h-[30px] block lg:hidden " onClick={navActive}/>
        </div>

    </div>
    )
}

export default Navbar