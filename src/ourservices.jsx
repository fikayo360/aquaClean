import services from "./services"
import Service from "./service"

const OurServices = () => {
    return(
        <div  id="services" className="w-screen flex flex-col p-5 md:p-3 lg:p-8 items-center mb-4 overflow-hidden bg-[#f0f0f0]">
            <h1 className="text-[1.2rem] font-bold mb-12 font-pop"> our services </h1>
            <main className="w-[100%] flex flex-col md:flex-row items-center md:flex-wrap md:pt-5 gap-10 md:gap-15 lg:gap-18 md:justify-center lg:justify-center">
                {
                    services && services.map((item,index) => (
                        <Service data={item} />
                    ))
                }
            </main>
        </div>
    )
}

export default OurServices