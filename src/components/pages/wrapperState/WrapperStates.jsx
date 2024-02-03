import React, {useState} from "react";
import "./WrapperStates.css";
import Modal from "../modal/Modal.jsx";
import Vector from "../../../assets/images/vector.png";
import IMG1 from "../../../assets/images/andres.png";
import IMG2 from "../../../assets/images/alexandra.png";
import IMG3 from "../../../assets/images/chelsea.png";
import IMG4 from "../../../assets/images/fede.png";
import IMG5 from "../../../assets/images/tony.png";
import IMG6 from "../../../assets/images/rio.png";
import IMG7 from "../../../assets/images/tokio.png";
import IMG8 from "../../../assets/images/imgModal1.jpg";
import IMG9 from "../../../assets/images/imgModal2.jpg";
import IMG10 from "../../../assets/images/imgModal3.jpg";
import IMG11 from "../../../assets/images/imgModal4.jpg";
import IMG12 from "../../../assets/images/imgModal5.jpg";
import IMG13 from "../../../assets/images/imgModal6.jpg";
import IMG14 from "../../../assets/images/imgModal7.jpg";
import IMG15 from "../../../assets/images/imgModal8.jpg";
import Border from "../../../assets/images/border.png"
import IconAdd from "../../../assets/images/iconadd.png"
import Union from "../../../assets/images/union.png"
import { Link } from "react-router-dom";


const instagramStates = [
  {
    name: "Andres",
    img: IMG1,
  },
  {
    name: "Alexandra!",
    img: IMG2,
  },
  {
    name: "Chelsea",
    img: IMG3,
  },
  {
    name: "Fede",
    img: IMG4,
  },
  {
    name: "Tony",
    img: IMG5,
  },
  {
    name: "Rio",
    img: IMG6,
  },
  {
    name: "Tokio",
    img: IMG7,
  },
];

const WrapperStates = () => {
  const [estadoModal, cambiarEstado] = useState(false);
  return (
    <div className="wrapper-states">
      {instagramStates.map((profile) => {
        return (
          <div className={profile.img === IMG1 ? "state no-border" : "state"} key={profile.name}>
            {profile.img === IMG1 ? (
              <div className="profile-container">
                <img className="state-img" src={profile.img} alt={profile.name}/>
                <Link>
                  <img className="add-icon" src={IconAdd}  alt="icono add" />
                  <img onClick={() => cambiarEstado(!estadoModal)} className="add-union" src={Union} alt="icono union" />
                </Link>
              </div>
            ) : (
              <>
                <img className="border-img" src={ Border } alt="Borde Redondeado" />
                <Link to={"estado?id=" + profile.name}>
                  <img className="state-img" src={profile.img} alt={profile.name}/>
                </Link>
              </>
            )}
          </div>
        );
      })}
      <div className="vector-icon">
        <img src={Vector} alt="icono vector" />
      </div>
      <Modal estadoModal={estadoModal} cambiarEstado={cambiarEstado}>
          <>
            <img src={IMG8} alt="en mi trabajo" />
            <img src={IMG9} alt="sintiendo la naturaleza" />
            <img src={IMG10} alt="reunion de amigos" />
            <img src={IMG11} alt="de fiesta con amigos" />
            <img src={IMG12} alt="vacaciones con amigos" />
            <img src={IMG13} alt="en la playa" />
            <img src={IMG14} alt="Jugando tennis" />
            <img src={IMG15} alt="yo" />
            <div>
              <button onClick={() => cambiarEstado(!estadoModal)}>Agregar a tu estado</button>
            </div>
          </>
      </Modal>
    </div>
  );
};

export default WrapperStates;