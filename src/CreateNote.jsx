import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

function CreateNote(props) {
    const [big, setbig] = useState(false);

    const [val, setval] = useState({
        title: '',
        note: ''
    });
    const eventListen = (event) => {
        const { name, value } = event.target;
        setval((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }
    const clickEve = () => {
        if(val.title===""){
        }else{
        props.vall(val);
        setval({
            title: '',
            note: ''
        });
    }
    }
    const expand = () => {
        setbig(true);
    }
    const dem = () => {
        setbig(false);
    }

    return (
        <>
            <div className="CreateNote"  onClick={expand} >

                {big ? <><input type="text" placeholder="title" value={val.title} name="title" onChange={eventListen} autoComplete="off" />
                    <hr /></>
                    : null}

                <textarea name="note" cols="" rows="" placeholder="Write note..." value={val.note} onChange={eventListen} onDoubleClick={dem} />
                <div className="add" onDoubleClick={dem}>
                    {big ? (<Fab size="medium" color="secondary" aria-label="add" style={{ margin: "16px -14px 0px 0px" }} onClick={clickEve}  >
                        <AddIcon />
                    </Fab>) : null}
                </div>
            </div>
        </>
    );
}

export default CreateNote;