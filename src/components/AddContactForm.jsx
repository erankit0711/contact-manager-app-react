import {useState} from "react";

function AddContactForm(props){
    const [contact, setContact] = useState({
        name: "",
        contactNumber: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        pincode: "",
        state: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setContact((prevValue) =>{
            return {...prevValue, [name]: value}
        })
    }

    function handleSubmit(event){
        props.setContactData((prevValue) =>{
            return [...prevValue, contact];
        })
        props.setIsModalOpen(false);
    }

    return(
        <div className="modal-overlay">
            <h1>Add Contact</h1>

            <form>
            <label>Name*</label>
            <input type="text" name="name" onChange={handleChange} required/>
            <label>Contact No</label>
            <input type="number" name="contactNumber" onChange={handleChange}/>
            <label>Email*</label>
            <input type="email" name="email" onChange={handleChange} required/>
            <label>Address Line 1*</label>
            <input type="text" name="addressLine1" onChange={handleChange} required/>
            <label>Address Line 2</label>
            <input type="text" name="addressLine2" onChange={handleChange}/>
            <label>State</label>
            <input type="text" name="state" onChange={handleChange}/>
            <label>Pincode*</label>
            <input type="number" name="pincode" onChange={handleChange} required/>
            </form>

            <button type="button" name="cancel-button" onClick={()=>props.setIsModalOpen(false)}>Cancel</button>
            <button type="submit" name="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddContactForm;