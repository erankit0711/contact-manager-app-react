import "./MyStyle.css";
import logo from "../assets/ofbusinesslogo.png";
import TableContainer from "./TableContainer";
import AddContactButton from "./AddContactButton";
import Search from "./Search";
import { useState } from "react";
import AddContactForm from "./AddContactForm";
import contactList from "./contactList";

function ContactManagerPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactData, setContactData] = useState(contactList);
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
            <div className="container">
                <h2>Contact Manager</h2>
                <div className="container-bottom">
                    <Search setSearchTerm={setSearchTerm}/>
                    <AddContactButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                    <TableContainer contactData={filteredContactData} setContactData={setContactData}/>
                </div>
                {isModalOpen && <AddContactForm setContactData={setContactData} setIsModalOpen={setIsModalOpen}/>}
            </div>
        </div>
    )
}

export default ContactManagerPage;