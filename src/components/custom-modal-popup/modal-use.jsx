import { useState } from "react";
import Modal from "./modal";

const ModalUse = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>

            {
                showModalPopup && <Modal 
                  body={<div>Customized body</div>}
                />
            }
        </div>
    )
};

export default ModalUse;
