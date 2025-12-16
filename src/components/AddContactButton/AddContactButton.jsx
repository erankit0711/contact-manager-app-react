import "./AddContactButton.css";

function AddContactButton(props){
    function handleClick(){
        props.setIsModalOpen(!props.isModalOpen);
    }
    return <button type="button" className="add-contact" onClick={handleClick}>Add Contact</button>
}

export default AddContactButton;