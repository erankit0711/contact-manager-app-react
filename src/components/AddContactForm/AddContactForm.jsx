import { useState } from "react";
import "./AddContactForm.css"; 

function AddContactForm(props) {
    const [contact, setContact] = useState({
        name: "",
        contactNumber: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        pincode: "",
        state: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setContact((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        props.setContactData((prevValue) => {
            return [...prevValue, contact];
        });
        props.setIsModalOpen(false);
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
               
                <div className="modal-header">
                    <h2>Add Contact</h2>
                    <button className="close-icon" onClick={() => props.setIsModalOpen(false)}>
                        &times;
                    </button>
                </div>

             
                <form className="modal-form" id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name<span className="required">*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter name" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact No.</label>
                        <input 
                            type="number" 
                            name="contactNumber" 
                            placeholder="Enter contact no." 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Email<span className="required">*</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Address Line 1<span className="required">*</span></label>
                        <input 
                            type="text" 
                            name="addressLine1" 
                            placeholder="Enter address" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Address Line 2 (Optional)</label>
                        <input 
                            type="text" 
                            name="addressLine2" 
                            placeholder="Enter address" 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label>State</label>
                       
                        <input 
                            type="text" 
                            name="state" 
                            placeholder="Enter State" 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Pincode<span className="required">*</span></label>
                        <input 
                            type="number" 
                            name="pincode" 
                            placeholder="Enter pincode" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </form>

                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn-cancel" 
                        onClick={() => props.setIsModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="btn-submit" 
                        form="contactForm"
                    >
                        Add Contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddContactForm;