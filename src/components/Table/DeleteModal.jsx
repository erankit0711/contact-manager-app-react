import { Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactSlice';

function DeleteModal(props){
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteContact(props.email));
        props.setIsDeleteModalOpen(false);
    }

    function handleCancel() {
        props.setIsDeleteModalOpen(false);
    }

    return(
        <div className="delete-container-outer">
            <div className="delete-container">
                <div className="delete-container-top">
                    <Trash2 color="red" size={18}/>
                    <h1>Delete Contact</h1>
                </div>
                <div className="delete-container-mid">
                    <p>Are you sure you want to delete this contact? This action cannot be undone.</p>
                </div>
                <div className="delete-container-bottom">
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button className="delete-button" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                
            </div>

        </div>
    )
}

export default DeleteModal;