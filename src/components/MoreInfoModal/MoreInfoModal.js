import React from "react";
import close from "../../Assets/close-24px.svg";
import "./MoreInfoModal.scss"

function MoreInfoModal(props) {

  const inventoryArr = props.inventoryData.find((item) => item.id === props.id);

  return (
    <>
    <div className="modal__overlay"/>
      <div className="modal">
        <img
          className="modal__closewindow" src={close} onClick={()=> props.handleModal()} />
        <section className="modal__content">
          <div className="modal__info">
            <h2 className="modal__title">Want to know more about HIIT?</h2>
            <p className="modal__text"> Please confirm that you'd like to delete from the inventory list. You won't be able to undo this action.</p>
          </div>
          <div className="modal__buttons">
            <button className="modal__cancel" onClick={()=> props.handleModal()}>Cancel</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default MoreInfoModal;