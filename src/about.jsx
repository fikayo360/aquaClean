import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView();

    return (
        <div id="about" className="w-screen h-[200vh] lg:h-[80vh] xl:h-[85vh] flex flex-col lg:flex-row mb-20 overflow-hidden bg-[#f8f8f8]">
            <div className="w-[100%] lg:w-[50%] h-[100%] lg:h-[95%] xl:h-[93%] xl:w-[48%] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(./about.jpg)'}}></div>

            <div ref={ref} className={`w-[100%] lg:w-[50%] lg:h-[98%] flex flex-col p-5 lg:p-2 lg:pt-2 justify-center ${inView?'animate__animated animate__fadeIn animate__slow':''}`}>
                <div className="mb-[3rem] lg:mb-[18px] xl:mb-[2.8rem]">
                    <h1 className="text-[1.2rem] text-black font-bold mb-4 lg:mb-2 text-center lg:text-left font-pop ">About us</h1>
                    <p className="text-[13px] lg:text-[12px] text-center lg:text-left font-mont">
                    Aqua clean is a company that offers janitorial services in the kingdom of Eswatini.We are based in Mbabane.
                    Our unwavering commitment to quality and customer satisfaction has earned us a reputation as a trusted partner for businesses across diverse industries. 
                    We believe in building strong relationships with our clients, understanding their specific needs, and exceeding their expectations with every clean. 
                    Our team members are not just janitors; they are ambassadors of cleanliness,
                     dedicated to making your space a source of pride and a reflection of your commitment to excellence.
                    Partner with Aqua clean and experience the transformative power of exceptional janitorial services. Contact us today to
                    schedule a free quote and embark on a journey of unparalleled cleanliness.
                    Together, let's elevate your workspace to new heights of brilliance and professionalism.
                    </p>
                </div>

                <div className="mb-[3rem] lg:mb-[18px] xl:mb-[2.8rem]">
                    <h1 className="text-[1.2rem] text-black font-bold mb-3 lg:mb-2 text-center lg:text-left font-pop"> Our mission </h1>
                    <p className="text-[13px] lg:text-[12px]  text-center lg:text-left font-mont"> To help Our customers have productive, safer and healthier environment through a robust range of cleaning services industry leading standards and sustainable 
                        business practices. 
                    </p>
                </div>

                <div className="mb-[3rem] lg:mb-[18px] xl:mb-[2.8rem]">
                    <h1 className="text-[1.2rem] text-black font-bold mb-3 lg:mb-2 text-center lg:text-left font-pop">Why choose us</h1>
                    <p className="text-[13px] lg:text-[12px]  text-center lg:text-left font-mont">We are professional and reliable, customer satisfaction is our priority.
                    </p>
                </div>

                
                <div className="">
                    <h1 className="text-[1.2rem] text-black font-bold mb-3 lg:mb-2 text-center lg:text-left font-pop">Our Values</h1>
                    <ul className="flex flex-col w-[100%] gap-2">
                        <li className="text-[13px] lg:text-[13px]  font-mont w-[95%] text-center lg:text-left"><span className="font-bold text-[1.2rem] lg:text-[0.8rem] mr-2 text-center font-pop">Quality:</span>
                        We are committed to delivering exceptional cleaning services that exceed expectations.</li>
                        <li className="text-[13px] lg:text-[13px]  font-mont w-[95%] text-center lg:text-left"><span className="font-bold text-[1.2rem] lg:text-[0.8rem] mr-2 font-pop">Integrity:</span>
                        We uphold the highest standards of honesty and transparency in all our interactions.</li>
                        <li className="text-[13px] lg:text-[13px]  font-mont w-[95%] text-center lg:text-left"><span className="font-bold text-[1.2rem] lg:text-[0.8rem] mr-2 font-pop">Customer Service:</span>
                        We prioritize our clients' satisfaction and strive to build long-lasting relationships.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About