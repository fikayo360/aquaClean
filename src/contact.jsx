import { useState,useEffect,useRef } from "react"
import './contact.css'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [ref, inView] = useInView();
    const [success,setSucess] = useState(false)
    const [notification,setNot] = useState('')
    const form = useRef();
    const clear = () => {
        setTimeout(()=>{
            setNot('')
        },5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_jx6w5ai', 'template_xwd49nd', form.current, 'kIFtlPOFPG99QtOXO')
        .then((result) => {
            console.log(result.text);
            setSucess(!success)
            setNot('sent successfully')
            form.current.reset();
            clear()
        }, (error) => { 
            console.log(error.text);
            setSucess(false)
        });
    }

    return (
        <div id="contact" className="w-screen h-[120vh] md:h-screen bg-cover bg-center md:pt-20 bg-no-repeat flex flex-col items-center justify-center relative" style={{backgroundImage:'url(./contact.jpg)'}}>

            <div ref={ref} className={`flex w-[90%] h-[550px] md:w-[70%] md:h-[65%] lg:h-[75%]  pb-[4rem] md:pt-3 flex-col items-center justify-center border-1  bg-[#e6e6fa] rounded-3xl 
            relative overflow-scroll ${inView?'animate__animated animate__swing animate__slow':''}`}>
                
                <img className="absolute w-[30px] h-[30px] top-3 left-3" src="./drops.png"/>
                <img className="absolute w-[30px] h-[30px] bottom-3 right-3" src="./drops.png"/>
                <h1 className="text-[1.2rem] font-bold mb-1 font-pop">contact us </h1>

                <div className="w-[100%] h-[85%] flex gap-10 flex-col items-center relative">

                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="text-[13px] font-pop">+288 764 333 72 </h1>
                        <h1 className="text-[13px] font-pop">+268 799 788 70 </h1>
                        <h1 className="text-[13px] font-pop">aquaclean@gmail.com</h1>
                    </div>


                    <form className="flex flex-col w-[100%] gap-3 items-center justify-center" onSubmit={handleSubmit}>
                        <input type='text' placeholder="name" className=" w-[80%] h-[3rem] lg:h-[4rem]  border-2 rounded-md border-black p-3 font-pop"  />
                        <input type='text' placeholder="email" className="w-[80%] h-[3rem] lg:h-[4rem]  border-2 rounded-md border-black p-3 font-pop"  />
                        <input type='textarea' placeholder="your message" className="w-[80%] h-[7rem] lg:h-[8rem] rounded-md border-2 border-black p-3 font-pop" />
                        <button className="w-[60%] lg:w-[40%] h-[2.8rem] lg:[h-5rem] rounded-md bg-green-600 font-bold hover:text-slate-600 text-white text-[13px] lg:text-[1.2rem] 
                        flex items-center justify-center font-pop">Send</button>
                        <span className="text-[1rem] text-green-700">{notification}</span>
                    </form>

                </div>
            </div>

        </div>
    ) 
}
    
export default Contact    