import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import './Notes.css';


const Notes = (props) => {

    const [line, setLine] = useState(false);

    const deleteNote = () => {
        setLine(!line)
    }

    return (
        <div className="li-box"> <span style={{ cursor: 'pointer' }} onClick={deleteNote} onDoubleClick={() =>{
            props.onDoubleClick(props.id);
        }}><DeleteIcon /></span>  <li style={{ textDecoration: line ? 'line-through' : 'none' }} className="li-item">{props.text}</li> </div>
    )
}

export default Notes;