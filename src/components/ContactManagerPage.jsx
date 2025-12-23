import "./MyStyle.css";
import logo from "../assets/ofbusinesslogo.png";
import TableContainer from "./Table/TableContainer";
import AddContactButton from "./AddContactButton/AddContactButton";
import Search from "./Search/Search";
import { useState } from "react";
import AddContactForm from "./AddContactForm/AddContactForm";

function ContactManagerPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="contact-page">
            <div className="header">
                <img src={logo} alt="ofbusiness-logo" className="header-logo" />
            </div>

            <div className="page-content">

                <div className="page-header">
                    <h2>Contact Manager</h2>
                </div>

                <div className="page-container">
                    
                    <div className="container-top">
                        <Search setSearchTerm={setSearchTerm}/>
                        <AddContactButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                    </div>

                    <div className="container-bottom">
                        <TableContainer searchTerm={searchTerm}/>
                    </div>
                </div>
                    
                {isModalOpen && <AddContactForm setIsModalOpen={setIsModalOpen}/>}
            </div>

        </div>
    )
}

export default ContactManagerPage;