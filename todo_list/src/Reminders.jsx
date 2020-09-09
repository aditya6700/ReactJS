import React from 'react';

const Reminders = (props) => {
    return(
        <>
            <div className="reminder_list">
                <i className="fa fa-times" 
                    aria-hidden="true" 
                    onClick={() => {
                        props.onSelect(props.id)
                        }}
                    />
                <li> {props.text}</li>
            </div>
         
        </>
    ); 
};

export default Reminders;