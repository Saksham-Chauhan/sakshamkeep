import Header from './Header';
import Create from './CreateNote';
import Note from './Note';
import Footer from './Footer';
import { useState } from 'react';
// import ReactDOM from 'react-dom';

const App= () => {
    const [item,setItem] = useState([]);

    const listen=(val)=>{
        setItem((old)=>{
            return [...old,val];
        });
    }

    const onDelete = (id) =>{
            setItem((old)=>
                old.filter((val,index)=>{
                    return index !== id;
                })
            );
    };
    return(
        <>
        <Header />
        <Create vall={listen} />
       
          {item.map((al, index) => {
            return (
                <Note
                key={index}
                id={index}
                tit={al.title}
                cont={al.note}
                Delete={onDelete}
                />
             );
            })}
        <Footer />
        </>
    );
}

export default App;