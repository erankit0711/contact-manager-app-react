import { Trash2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import "./Table.css"

function TableEntry(props){
    function handleDelete() {
        props.setContactData(prevValue =>
        prevValue.filter(contact => contact.email !== props.email)
    );
  }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.contactNumber}</td>
            <td>{props.email}</td>
            <td>{props.addressLine1}, {props.addressLine2}, {props.state}. {props.pincode}</td>
            <td>
                <div className="action-button-container">
                    <button className="action-button" type="button" > 
                    <Pencil size={16} color='blue'/>
                    <span>Edit</span>
                </button>
                <button className="action-button" type="button" onClick={handleDelete}>
                    <Trash2 size={16}/>
                    <span>Delete</span>
                </button>

                </div>
            </td>
        </tr>
    )
}

export default TableEntry;