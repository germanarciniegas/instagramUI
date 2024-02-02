import React from "react";
import "./States.css"
import { useLocation, Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import { IoCaretBack } from "react-icons/io5";
import Group from "../../../assets/images/Group.svg"
import IMG1 from "../../../assets/images/estadoAlexandra.jpg"
import IMG2 from "../../../assets/images/estadoChelsea.jpg"
import IMG3 from "../../../assets/images/estadoFede.jpg"
import IMG4 from "../../../assets/images/estadoTony.jpg"
import IMG5 from "../../../assets/images/estadoRio.jpg"
import IMG6 from "../../../assets/images/estadoTokio.jpg"
import IMGP1 from "../../../assets/images/alexandra.png"
import IMGP2 from "../../../assets/images/chelsea.png"
import IMGP3 from "../../../assets/images/fede.png"
import IMGP4 from "../../../assets/images/tony.png"
import IMGP5 from "../../../assets/images/rio.png"
import IMGP6 from "../../../assets/images/tokio.png"


const instagramStates = [
    
    {   
        name: "Alexandra!", 
        imgState: IMG1, 
        imgProfile: IMGP1 , 
        statusText: "Vacaciones.." 
    },
    { 
        name: "Chelsea", 
        imgState: IMG2, 
        imgProfile: IMGP2, 
        statusText: "Con estilo se nace!" 
    },
    { 
        name: "Fede", 
        imgState: IMG3, 
        imgProfile: IMGP3, 
        statusText: "Awww!" 
    },
    { 
        name: "Tony", 
        imgState: IMG4, 
        imgProfile: IMGP4, 
        statusText: "Cenita..!" },
    { 
        name: "Rio", 
        imgState: IMG5, 
        imgProfile: IMGP5, 
        statusText: "Mejores amigas por siempre!" 
    },
    { 
        name: "Tokio", 
        imgState: IMG6, 
        imgProfile: IMGP6, 
        statusText: "Mis vans nuevos!" 
    }
  ];
  
  const States = () => {
    const location = useLocation();
    const name = new URLSearchParams(location.search).get("id");
    const profile = instagramStates.filter((profile) => profile.name === name)[0];
  
    return (
      <div className="states-container">
        <div className="backIcon-container">
          <Link to="/">
            <IoCaretBack className="back-icon" />
          </Link>
        </div>
        <div className="states-background" style={{ backgroundImage: `url(${profile.imgState})` }}>
          <div className="states-img-texto-icon">
            <div className="states-img-texto">
              <img src={profile.imgProfile} alt="imagen de perfil" />
              <p>{profile.name}</p>
            </div>
            <div className="states-icons">
              <FaPlay className="icon" />
              <FaVolumeXmark />
              <FaEllipsisH />
            </div>
          </div>
          <div className="input-container">
            <input type="text" placeholder= {`Reply to ${profile.name}..`} />
            <div >
              <img src={Group} className="group-icon" alt="icono para enviar" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default States;