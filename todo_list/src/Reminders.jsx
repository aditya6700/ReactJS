import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Reminders = (props) => {
    const [flag, setFlag] = useState(false)
    const cutLi = () => {
        setFlag(true);
    }
    return(
        <>
            <div className="reminder_list">
                {/* <i className="fa fa-times" 
                    aria-hidden="true" 
                    onClick={() => {
                        props.onSelect(props.id)
                        }}
                    />
                <li> {props.text}</li> */}

                <span className="eventss" onClick={cutLi} 
                        onDoubleClick={() => {
                             props.onSelect(props.id);
                             setFlag(false);

                        }}>
                    <DeleteIcon className="fa-times"  />
                    
                </span>
                <li style={{textDecoration: flag ? 'line-through' : 'none'}}>{props.text} </li>
            </div>
         
        </>
    ); 
};

export default Reminders;