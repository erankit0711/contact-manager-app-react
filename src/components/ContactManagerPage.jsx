import "./MyStyle.css";
import logo from "../assets/ofbusinesslogo.png";
import TableContainer from "./TableContainer";
import AddContactButton from "./AddContactButton";
import Search from "./Search";
import { useState } from "react";
import AddContactForm from "./AddContactForm";

function ContactManagerPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactData, setContactData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredContactData = contactData.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.contactNumber.includes(searchTerm) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
        )


    return (
        <div className="contact-page">
            <div className="header">
                <img src={logo} alt="ofbusiness-logo" className="header-logo" />
            </div>
            <div className="table-container">
                <h1>Contact Manager</h1>
                <Search setSearchTerm={setSearchTerm}/>
                {isModalOpen && <AddContactForm setContactData={setContactData}/>}
                <AddContactButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                <TableContainer contactData={filteredContactData} setContactData={setContactData}/>
            </div>
        </div>
    )
}

export default ContactManagerPage;