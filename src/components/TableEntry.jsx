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
                <button type="button">Edit</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default TableEntry;