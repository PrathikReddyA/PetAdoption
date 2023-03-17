import { useState } from "react";
import "./subscribe.css";

function Subscribe({onNav}) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const[success,setSuccess]= useState("")

    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {

        setChecked(!checked);
    }

    
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
        if (regEx.test(email)) {
            setMessage("Email is valid");
            setSuccess("success__email");
            setEmail("");
            
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
            setSuccess("fail__email");
        } else {
            setMessage("Please enter email id");
            setSuccess("fail__email");
        }
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
        if (message==="Email is Valid"){
            
        }
    };

    return (
        <div className="form_input">
            <div className="user__email user-email">
                <h2 className="validation__header">Subscribe with your email id to get regular updates regarding cat adoption.</h2>
            </div>
            <div className="user__email user-email">
                <label htmlFor="email" className="label">
                    Email:
                </label>
                <input
                    id="email"
                    className="email__input"
                    type="text"
                    placeholder="required"
                    value={email}
                    onChange={handleOnChange}
                /><span className={success}>{message}</span>
                <div className="checkbox">
                <label htmlFor="surveyCheck">Please select the box for a quick survey: </label>
                <input type="checkbox" onChange={handleChange} name="surveyCheck"></input>
                
                </div>
                {checked === true &&
                    <div className="dropdown">
                        <h4> How did you know us</h4>
                        <select name="survey" id="survey" required className="options">
                            <option value="socialmedia">Social Media</option>
                            <option value="advertisements">Advertisements</option>
                            <option value="advertisements">word of mouth</option>
                            <option value="advertisements">search engines</option>
                        </select>
                    </div>}
                <button onClick={emailValidation} className='btn__subscribe'>Subscribe</button>
                {message === "Email is valid" &&
                
                <div>
                    <h2>Thank you for subscribing.</h2>
                    </div>}



            </div>
        </div>
    );
}

export default Subscribe;