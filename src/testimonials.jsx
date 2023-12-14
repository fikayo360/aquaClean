import { Swiper } from "./carousels"
import TSlider from "./slider/slider"
import './testimonials.css'
const Testimonials = () => {
    return (
        <div id="testi" className="w-screen h-screen flex flex-col items-center pt-10">
           
            <div className="w-[100%] h-[100%] lg:h-[80%] flex justify-center items-center">
            <TSlider />
            </div>
        </div>
    )
}

export default Testimonials