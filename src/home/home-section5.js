import { InlineWidget } from "react-calendly";
//import { useRef } from "react"
//import axios from "axios"

import "./home-section5.css"

function HomeSection5({ getStartedToggle }) {
    // const nameRef = useRef()
    // const emailRef = useRef()
    // const phoneRef = useRef()
    // const messageRef = useRef()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const body = {
    //         name: nameRef.current.value,
    //         email: emailRef.current.value,
    //         phone: phoneRef.current.value,
    //         message: messageRef.current.value
    //     }
    //     try {
    //         const response = await axios.post(
    //             "",
    //             body
    //         )
    //         console.log(response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // return (
    //     <div ref={getStartedToggle} className="home-section5">
    //         <div className="home-section5-section1">
    //             <h1>Let's Chat</h1>
    //             <p>Whether you have a question, are interested in starting a project, or simply want to connect.</p>
    //             <p>Feel free to reach out using the contact form.</p>
    //         </div>
    //         <div className="home-section5-section2">
    //             <h1>Contact</h1>
    //             <p>* Required</p>
    //             <input ref={nameRef} placeholder="Name *" />
    //             <input ref={emailRef} placeholder="Email *" />
    //             <input ref={phoneRef} placeholder="Phone" />
    //             <textarea ref={messageRef} placeholder="Message" />
    //             <button onClick={(e) => handleSubmit(e)}>Submit</button>
    //         </div>
    //     </div>
    // );

    return (
        <div ref={getStartedToggle} className="home-section5">
            <div className="home-section5-section1">
                <h1>Let's Chat</h1>
                <p>Whether you have a question, are interested in starting a project, or simply want to connect.</p>
                <p>Feel free to reach out using the contact form.</p>
            </div>
            <div className="home-section5-calendly">
                <InlineWidget 
                styles={{
                    height: '100%',
                    width: '100%'
                }} 
                url="https://calendly.com/taxntime-host/30min?hide_event_type_details=1&hide_landing_page_details=1" />
            </div>
        </div>
    );
}

export default HomeSection5;
