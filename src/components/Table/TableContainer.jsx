import { useSelector } from "react-redux";
import TableEntry from "./TableEntry";

function TableContainer(props){
    const contacts = useSelector(state => state.contact.value)
    const filteredContactData = contacts.filter(contact =>
          contact.name.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
          contact.contactNumber.includes(props.searchTerm) ||
          contact.email.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
    return (
        <div className="table-container">
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContactData.map((contact)=>{
                            return (
                                <TableEntry 
                                  name={contact.name} 
                                  contactNumber={contact.contactNumber}
                                  email={contact.email}
                                  addressLine1={contact.addressLine1}
                                  addressLine2={contact.addressLine2}
                                  state={contact.state}
                                  pincode={contact.pincode}
                                  setContactData={props.setContactData}
                                />
                            )}
                        )}
                    </tbody>
                </table>
        </div>
    )
}

export default TableContainer;