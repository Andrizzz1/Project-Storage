import React,{useState} from "react";
import Profile from "./Profile";


function Header(){

    const [isTrue,setTrue]=useState(false);
    function ProfileImage(props){
    return (
        <img className={props.imageStyle} src={props.image} alt="profile pic" />
    )
    }
    function ShowProfileSetting(){
        setTrue(true)
    }

    return(
        <>
        <div className="Headerstyle">
            <h1>Projects</h1>
            <div className="HeaderRight">      
            <button>Add Project</button>
                <div  onClick={ShowProfileSetting} className="Profile">
                    <ProfileImage imageStyle="ProfileImgStyle" image="/imgs/profile.jpg" />
                </div>                      
            </div>
            {isTrue?<Profile  imageStyle="ProfileImgStyle" image="/imgs/profile.jpg" />:null}
            
        </div>       
        </>
    )
}


export default Header;