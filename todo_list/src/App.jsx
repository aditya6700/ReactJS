import React, { useState } from 'react';
import Reminders from './Reminders';

const App = () => {
  const [ inputList, setInputList] = useState("");
  const [ items, setItems]  = useState([]);

  const InputEvents = (e) => {
      setInputList(e.target.value);
  };

  const addReminder = (e) => {
    e.preventDefault();
    setItems((oldReminder) => {
      return [...oldReminder, inputList]
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
          <br />
          <h1>Reminder</h1>
          <br />
          <form onSubmit={addReminder}>
          <input type="text" placeholder=" add a reminder " 
          onChange={InputEvents} value={inputList}/>
          <button type="submit"> + </button>
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
