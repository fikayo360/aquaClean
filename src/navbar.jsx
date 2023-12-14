const Navbar = ({navActive}) => {
    return (
    <div className="w-[100%] h-[8%] mt-[1rem] flex items-center justify-center">
        
        <div className="w-[100%] px-5 lg:w-[95%] flex justify-between items-center flex-row" >

       <span className="text-2xl font-bold text-white lg:ml-[2rem] font-pop">AquaClean</span>
            
            <div className="w-[45%] h-[3.5rem] border-1 bg-slate-200 border-slate-500 shadow-lg shadow-grey-500/40 rounded-full hidden lg:flex justify-center ">
                <ul className="flex gap-14 items-center justify-center w-[100%] h-[100%]">
                    <li className="cursor-pointer hover:text-[1.3rem]"><a href="#hero" className="text-[1.2rem] font-bold text-black hover:text-blue-800 font-mont">home</a></li>
                    <li className=" cursor-pointer hover:text-[1.3rem]"><a href="#about" className="text-[1.2rem] font-bold text-black hover:text-blue-800 font-mont">about</a></li>
                    <li className=" cursor-pointer hover:text-[1.3rem]"><a href="#services" className="text-[1.2rem] font-bold text-black hover:text-blue-800 font-mont">services</a></li>
                    <li className=" cursor-pointer hover:text-[1.3rem]"><a href="#team" className="text-[1.2rem] font-bold text-black hover:text-blue-800 font-mont">team</a></li>
                    <li className=" cursor-pointer hover:text-[1.3rem]"><a href="#contact" className="text-[1.2rem] font-bold text-black hover:text-blue-800 font-mont">appointment</a></li>
                </ul>
            </div>

            <div className="hidden lg:flex flex-row gap-2 justify-center items-center"><img src='./phone.png' className="w-[25px] h-[25px]"/>
            <span className="text-[20px] text-white font-bold font-pop">+ 268 764 333 72</span>
            </div>

            <img src="hamburger.png" className="w-[30px] h-[30px] block lg:hidden " onClick={navActive}/>
        </div>

    </div>
    )
}

export default Navbar