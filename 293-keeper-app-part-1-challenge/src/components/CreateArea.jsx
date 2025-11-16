import React,{useState} from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(){
    const [isTrue,setTrue]= useState(false)
    
    const [notes, setNote] = useState([]);
    const [currentNote, setCurrentNote] = useState({ 
        title: "",
        content: ""
    });

    function handleChange(e){
        const {name , value} = e.target;
        setCurrentNote(prev =>{
            if(name === "title"){
                return{
                    title: value,
                    content:prev.content
                }
            }else if(name === "content"){
                return{
                    title:prev.title,
                    content: value
                }
            }
        })

    }

    function addNote(e){
        e.preventDefault();
        setNote(prev => [...prev,currentNote]);
        setCurrentNote({
            title:"",
            content:""
        })
    }


    function deleteItem(id){
        setNote(prev =>{
            return prev.filter(
                (item,index)=>{
                    return index !== id;
                }
            )
        })
    }


    return(
        <div>
            <form className="create-note">
                {isTrue?<input onChange={handleChange} type="text" name="title" placeholder="Title" value={currentNote.title}/>:null}
                <textarea onClick={()=> setTrue(true)} onChange={handleChange} name="content" placeholder="Take a note..." rows={isTrue? 3:1} value={currentNote.content}></textarea>
                <Zoom in={isTrue? true:false}>
                <Fab onClick={addNote}><AddIcon /></Fab>
                </Zoom>
            </form>

            {notes.map((note,index) =>{
               return( <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onCheck={deleteItem}
                />)
            })}
        </div>
    )
}

export default CreateArea;