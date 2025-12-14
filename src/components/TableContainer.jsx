import TableEntry from "./TableEntry";
import contactList from "./contactList";

function TableContainer(props){
    return (
        <div>
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
                        {props.contactData.map((contact)=>{
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