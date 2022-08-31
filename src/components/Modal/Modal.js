import React from "react";

const Modal = ({ title, content }) => {
  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label for="my-modal-6" className="btn modal-button">
        open modal
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label for="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
