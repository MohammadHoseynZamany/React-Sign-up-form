import React from "react"
import '../styles/signUp.css'

export default function(){
    
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        password: "",
        confPass: "",
        email: "",
        gender: "",
        agree: false,
    })

    console.log(formData)

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(prevFormData => 
            {
                return{
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            }
            )
    }

    function handleSubmit(event){
        event.preventDefault()
        let error = false
        for (let i in formData){
            if (formData[i] === ""){
                alert("Please complete all sections of the form")
                error = true
                break
            }
            else if (formData.password !== formData.confPass){
                alert("Confirm password didn't match to the password")
                error = true
                break
            }
            else if (i == "agree" && formData[i] === false){
                alert("Agree website privacy and policy to continue")
                error = true
                break
            }
        }
        if (!error){
            alert("Your account has been successfully created")
        }
    }

    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
            <h1>Fill out the form to create your account</h1>
            <input type="text" placeholder="First Name" value={formData.firstName} name="firstName" onChange={handleChange} />
            <input type="text" placeholder="Last Name" value={formData.lastName} name="lastName" onChange={handleChange} />
            <input type="text" placeholder="Password" value={formData.password} name="password" onChange={handleChange} />
            <input type="text" placeholder="Confirm Password" value={formData.confPass} name="confPass" onChange={handleChange} />
            <input type="email" placeholder="Email" value={formData.email} name="email" onChange={handleChange} id="email"/>
            <fieldset>
                <legend>Gender:</legend>
                <label htmlFor="maile">Maile</label>
                <input type="radio" value="maile" name="gender" checked={formData.gender === "maile"} onChange={handleChange} id="maile" />
                <br />
                <label htmlFor="femaile">Femaile</label>
                <input type="radio" value="femaile" name="gender" checked={formData.gender === "femaile"} onChange={handleChange} id="femaile" />
                <br />
                <label htmlFor="ratherNotSay">Rather now say</label>
                <input type="radio" name="gender" value="ratherNotSay" checked={formData.gender === "ratherNotSay"} onChange={handleChange} id="ratherNotSay" />
                <br />
                <label htmlFor="custome">Custome</label>
                <input type="radio" name="gender" value="custome" checked={formData.gender === "custome"} onChange={handleChange} id="custome" />
            </fieldset>
            <div>
                <label htmlFor="agree" id="agreeLbl" >Agree website privacy and policy</label>
                <input type="checkbox"
                name="agree" checked={formData.agree} onChange={handleChange} id="agree" />
            </div>
            <button>Submit</button>
        </form>
    )
}