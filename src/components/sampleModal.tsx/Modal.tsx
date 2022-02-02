import React, { useState } from "react";




 function MainModal () {

    const [isOpen, setisOpen] = React.useState(false);
    const [enterValue, setEnterValue] = React.useState<any>("");

    const openModal = () => {
        setisOpen(true);
    }
    const closeModal = () => {
        setisOpen(false);
    }

    return (
        <div>
            {/* <BasicModal Open = {isOpen}  handleOpen ={openModal} handleClose = {closeModal}>                     value={enteredFolderValue}
            value={enterValue}
                    onChange={( e) => {
                        setEnterValue(e.target.value);
                    }
                        </BasicModal>  */}
            
    </div>
    )
 }
        
export default MainModal