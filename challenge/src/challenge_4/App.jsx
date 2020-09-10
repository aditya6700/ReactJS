import React, { useState } from  'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
 

const App = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        if(num>0){
            setNum(num - 1);
        }else{
            setNum(0);
            alert(" number can't be decremented further ");
            // <Alert severity="error">
            //     <AlertTitle>Error</AlertTitle>
            //     Number can't be decremented beyond zero — <strong>check it out!</strong>
            // </Alert>
        }
    };

    return(
        <>
        <div className="main_div">
            <div className="list_div">
                <h1> {num} </h1>
                <div className="button_div">
                <Tooltip title="Delete">
                    <Button variant="contained" onClick={decNum} className="delete"  >
                     <RemoveIcon />
                     </Button>
                </Tooltip>

                <Tooltip title="add">
                     <Button  variant="contained"  onClick={incNum} className="add">
                      <AddIcon />
                      </Button>
                </Tooltip>
                    
                   
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default App;