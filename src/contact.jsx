const Contact = () => {
    return (
        <div id="contact" className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative   overflow-scroll" style={{backgroundImage:'url(./contact.jpg)'}}>

            <div  className="flex w-[80%] h-[75%] md:w-[60%] md:h-[73%] flex-col items-center justify-center border-1 rounded-3xl bg-white relative ">
                <img className="absolute w-50 h-50 top-3 left-3" src="./drops.png"/>
                <img className="absolute w-50 h-50 bottom-3 right-3" src="./drops.png"/>
                <h1 className="text-3xl font-bold mb-3 font-pop">contact us </h1>
                <div className="w-[100%] h-[80%] flex gap-10 flex-col items-center">

                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="text-1xl font-pop">+288 764 333 72 </h1>
                        <h1 className="text-1xl font-pop">+268 799 788 70 </h1>
                        <h1 className="text-1xl font-pop">aquaclean@gmail.com</h1>
                    </div>


                    <form className="flex flex-col w-[100%] h-[78%] gap-5 items-center justify-center">
                        <input type='text' placeholder="name" className=" w-[70%] h-[3rem]  border-2 rounded-md border-black p-3 font-pop"/>
                        <input type='text' placeholder="email" className="w-[70%] h-[3rem]  border-2 rounded-md border-black p-3 font-pop" />
                        <input type='textarea' placeholder="your message" className="w-[70%] h-[8rem] rounded-md border-2 border-black p-3 font-pop"/>
                        <button className="w-[60%] lg:w-[35%] h-[3rem] rounded-md bg-green-600 font-bold hover:text-slate-600 text-white text-[1.1rem] flex items-center justify-center font-pop">Send</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact