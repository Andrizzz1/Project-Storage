import React from "react";
import Button from '@mui/material/Button';



function Profile(props){

    return(
        <div className="ProfileWindow">
            <h3>Profile Setting:</h3>
            <img className={props.imageStyle} src={props.image} alt="profile pic" />      
            <div>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="First Name"/>   
            </div> 
            
            <Button >Done</Button>
            
        </div>
    )
}

export default Profile;