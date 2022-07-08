import React from "react";
import close from "../../assets/email.png"
import "./MoreInfoModal.scss";

function MoreInfoModal({ modal, setModal }) {
  return (
    <>
      {modal ? (
        <div>
          <div className="modal__overlay" />
          <div className="modal">
            <img
              className="modal__closewindow"
              src={close}
              onClick={setModal}
            />
            <section className="modal__content">
              <div className="modal__info">
                <h2 className="modal__title">Want to know more about HIIT?</h2>
                <p className="modal__text"> Lorem ipsum dolor sit amet</p>
              </div>
              <div className="modal__buttons">
                <button
                  className="modal__cancel"
                  onClick={setModal}
                >
                  Cancel
                </button>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MoreInfoModal;
