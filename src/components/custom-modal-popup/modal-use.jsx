import { useState } from "react";
import Modal from "./modal";
import './styles.css';

const ModalUse = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    }

    const onClose = () => {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

            {
              showModalPopup && (
                <Modal 
                onClose={onClose}
                header={<h1>Customized Header</h1>}
                body={<div>Customized body</div>}
                footer={<h2>Customized Footer</h2>}
              />
              )
            }
        </div>
    )
};

export default ModalUse;
