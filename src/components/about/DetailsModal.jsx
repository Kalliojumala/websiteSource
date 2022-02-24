import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";

const DetailsModal = ({ title, items, titleColor }) => {
  const [isOpen, setisOpen] = useState(false);

  function toggleModal() {
    setisOpen(!isOpen);
  }

  return (
    <div>
      <figure onClick={toggleModal}>
        <p>Read more...</p>
      </figure>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="custom-modal dark"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModal}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="detailsmodal portfolio">
            <div className="slideshow">
              <figure>
                <figcaption>
                  <h3 style={{ color: "white" }}>{title}</h3>

                  {items.map(({ itemTitle, itemDescription, grade, links }) => (
                    <div className="row open-sans-font">
                      <div className="col -6 mb-2 educationalModal">
                        <div className="ft-wt-600 uppercase modalTitle">
                          {itemTitle} || Grade: {grade}/5
                        </div>

                        <div className="modalDescription">
                          {itemDescription}<br/>
                          {links ? <a href={links} target="_blank" rel="noreferrer">{"More details ->"}</a> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;
