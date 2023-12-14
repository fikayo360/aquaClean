const About = () => {
    return (
        <div id="about" className="w-screen h-[150vh] lg:h-[75vh] flex flex-col lg:flex-row mb-20">
            <div className="w-[100%] lg:w-[50%] h-[100%] bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url(./about.jpg)'}}></div>

            <div className="w-[100%] lg:w-[50%] flex flex-col p-5 justify-center">
                <div className="mb-[3rem] ">
                    <h1 className="text-2xl text-black font-bold mb-3 text-center lg:text-left font-pop">About us</h1>
                    <p className="text-1xl text-center lg:text-left font-mont">
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

                <div className="mb-[3rem]">
                    <h1 className="text-2xl text-black font-bold mb-3 text-center lg:text-left font-pop"> Our mission </h1>
                    <p className="text-1xl text-center lg:text-left font-mont"> To help Our customers have productive, safer and healthier environment through a robust range of cleaning services industry leading standards and sustainable 
                        business practices. 
                    </p>
                </div>

                <div className="mb-[3rem]">
                    <h1 className="text-2xl text-black font-bold mb-3 text-center lg:text-left font-pop">Why choose us</h1>
                    <p className="text-1xl text-center lg:text-left font-mont">We are professional and reliable, customer satisfaction is our priority.
                    </p>
                </div>

                
                <div className="">
                    <h1 className="text-2xl text-black font-bold mb-3 text-center lg:text-left font-pop">Our Values</h1>
                    <ul className="flex flex-col w-[100%] gap-2">
                        <li className="text-1xl font-mont "><span className="font-bold text-[18px] mr-2 text-center font-pop">Quality:</span>
                        We are committed to delivering exceptional cleaning services that exceed expectations.</li>
                        <li className="text-1xl font-mont"><span className="font-bold text-[18px] mr-2 font-pop">Integrity:</span>
                        We uphold the highest standards of honesty and transparency in all our interactions.</li>
                        <li className="text-1xl font-mont "><span className="font-bold text-[18px] mr-2 font-pop">Customer Service:</span>
                        We prioritize our clients' satisfaction and strive to build long-lasting relationships.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About