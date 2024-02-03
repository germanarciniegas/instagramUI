import React from "react";
import "./Modal.css";
import { IoIosClose } from "react-icons/io";

const Modal = ({ children, estadoModal, cambiarEstado }) => {
  return (
    <>
      {estadoModal && 
        <div className="modal-background">
          <div className="modal-container">
            <div className="header-modal">
              <h3>Galeria de Imagenes</h3>
            </div>
            <div className="button-container">
              <IoIosClose onClick={() => cambiarEstado(false)} className="button-close" />
            </div>
            {children}
          </div>
        </div>
      }
    </>
  );
};

export default Modal;
