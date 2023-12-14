const Service = ({data}) => {
    return (
        <div className="w-[90%] md:w-[43%] lg:w-[30%] h-[35rem] rounded-md flex justify-center items-center bg-cover bg-center bg-no-repeat border-1 border-slate-800 " style={{backgroundImage: `url(${data.bg})`}} >
            <span className="w-[50%] h-[2rem] text-white flex justify-center items-center text-[13px] md:text-[13px] font-bold bg-blue-400 rounded-md font-pop">{data.name}</span>
        </div>
    )
}

export default Service