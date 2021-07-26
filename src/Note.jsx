import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const deleteNote = () =>{
        props.Delete(props.id);
    };
    return (
        <>
            <div className="note">
                <h3 className="tit">{props.tit}</h3>
                <hr />
                <p>{props.cont}</p>
                <button className="icon" onClick={deleteNote}>
                <DeleteIcon  />
                </button>
            </div>
        </>
    );
}

export default Note;
