import React, { useState } from 'react';
import Reminders from './Reminders';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () => {
  const [ inputList, setInputList] = useState("");
  const [ items, setItems]  = useState([]);

  const InputEvents = (e) => {
      setInputList(e.target.value);
  };

  const addReminder = (e) => {
    e.preventDefault();
    setItems((oldReminder) => {
     return  inputList !== "" ? [...oldReminder, inputList] : [...oldReminder]
    });
    setInputList("");
  };

  const deleteReminder = (id) => {
      setItems((oldReminder) => {
        return oldReminder.filter((arr, index) => {
              return index !== id;
        });
      });
  }
  return (
    <>
    <div className="main_div">
        <div className="main_list">
          <br />  <h1>Reminder's</h1> <br />
          
          <form onSubmit={addReminder}>
            <input type="text" placeholder=" add a reminder " 
            onChange={InputEvents} value={inputList}/>

            {/* <button type="submit"> + </button> */}

            <Button variant="contained" type="submit" className="newButton" style={{ fontSize: "30px"}}>
              <AddIcon style={{ fontSize: "30px"}} />
            </Button>

          </form>
          <br/>
          <ol>
            {/* <li> {inputList}</li> */}

            {items.map((item, index) => {
              return  <Reminders  
                  text = {item}
                  id = {index}
                  key = {index}
                  onSelect = {deleteReminder}
                  />
            })}
          </ol>
        </div>
    </div>
        
    </>
  );
}

export default App;
