const Team = () => {
    return (
        <div id="team" className="w-screen h-screen flex justify-center items-center  bg-cover bg-center bg-no-repeat bg-blend-darken mb-[3rem] overflow-hidden" style={{backgroundImage:'url(./team.jpg)'}} >
          
            <div className=" w-[80%] h-[68%] md:h-[54%] lg:w-[50%] lg:h-[45%] flex flex-col p-10 border-1 rounded-3xl bg-white ">
                <h1 className="text-[13px] text-center md:text-[1.3rem] text-black font-bold mb-3 font-pop">Our Team: The Backbone of Cleanliness </h1>
                <p className="text-[13px] text-black leading-[20px] md:leading-[3.2rem] lg:leading-[3.5rem] font-mont">
                At Aqua-Clean, we are proud to have a dedicated and passionate team of 
                janitorial professionals who are the backbone of our success. 
                Each member of our team brings a unique set of skills and experience to the table, united by a common goal: to provide our clients with the highest quality cleaning services possible.
                We believe that our employees are our greatest asset, and we are committed to creating a positive and supportive work environment where they can thrive. We offer competitive wages and benefits,
                and we provide ongoing training and development opportunities to help our employees grow their skills and advance their careers.
                </p>
            </div>

        </div>
    )
}

export default Team