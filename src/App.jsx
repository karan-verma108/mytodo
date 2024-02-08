import React, { useState } from "react";
import './App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Notes from "./Notes";

const App = () => {

    const [enteredValue, setEnteredValue] = useState('');
    const [arrayItem, setArrayItem] = useState([]);

    const inputEvent = (e) => {
        setEnteredValue(e.target.value);
    }

    const addItem = () => {
        if (enteredValue === '') {
            alert('Please enter something!')
        } else {
            setArrayItem((oldVal) => {
                return [...oldVal, enteredValue];
            });
        }
        setEnteredValue('');
    }

    const deleteParmanent = (id) => {
        setArrayItem((oldVal) => {
            return oldVal.filter((currEle, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div className="container">
            <div className="box">
                <h1 style={{ textAlign: 'center' }}>My ToDo List</h1>

                <div className="inp-field">
                    <input type="text" value={enteredValue} placeholder="Enter an item" onChange={inputEvent} />
                    <Button onClick={addItem} className="btn">
                        <AddIcon />
                    </Button>
                </div>

                <ol>
                    {/* <li>{enteredValue}</li> */}
                    {arrayItem.map((currVal, index) => {
                        return <Notes key={index} id={index} onDoubleClick={deleteParmanent} text={currVal} />
                    })}
                </ol>
            </div>
        </div>
    )
}

export default App;