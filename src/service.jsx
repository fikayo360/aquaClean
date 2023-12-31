const Service = ({data}) => {
    return (
        <div className="w-[90%] md:w-[40%] lg:w-[43%] xl:w-[28%] h-[23rem] rounded-md flex justify-center items-center bg-cover bg-center bg-no-repeat border-1 border-slate-800 " style={{backgroundImage: `url(${data.bg})`}} >
            <span className="w-[55%] h-[2rem] text-white flex justify-center items-center text-[10px] md:text-[11px] lg:text-[12px] font-bold bg-[#244d8a] rounded-md font-pop">{data.name}</span>
        </div>
    )
}

export default Service