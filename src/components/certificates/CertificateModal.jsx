import React, {useState} from "react";
import Modal from "react-modal";

const CertificateModal = ({image, title, tags, date, description, verificationlink, prettylink, titleColor}) => {

  

  const [isOpen, setIsOpen] = useState(false);
 
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  return (
    
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
      <article className="post-container" onClick={toggleModal}>
      <div className="post-thumb">
          <div className="d-block position-relative overflow-hidden">
            <img
              src={image}
              className="img-fluid"
              alt="Blog Post" />
          </div>
        </div>

        <div className="post-content">
          <div className="entry-header">
            <h3 className="certLinkColor">{title}</h3>
          </div>

        </div>
      </article>

      {/* Start ModalOneContent */}
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
          {/* End close icon */}

          <div className="box_inner portfolio">
            <div className="slideshow">
              <figure>
                {/* Project Details Starts */}
                <figcaption>
                  <h3 style={{ color: titleColor }}>{title}</h3>
                  <div className="row open-sans-font">
                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-file-text-o pr-2"></i>
                      <span className="project-label">Date issued </span>:{" "}
                      <span className="ft-wt-600 uppercase">{date}</span>
                    </div>
                    {/* End .col */}
                    

                    <div className="col-12 col-sm-6 mb-2">
                      
                      <i className="fa fa-external-link pr-2"></i>
                      <span className="project-label ">Verify </span>:{" "}
                      <span className="ft-wt-600 uppercase">
                        <a href={verificationlink} target="_blank" rel="noreferrer">
                          {prettylink}
                        </a>
                      </span>
                    </div>
                    {/* End .col */}
                    
                  </div>
                  {/* End .row */}
                </figcaption>
                {/* Project Details Ends */}

                {/*  Main Project Content Starts */}
                
                  
                    <div className="slide_item">
                      <img src={image} alt="slide 1" />
                    </div>
                 
                
                <div className="blog-excerpt open-sans-font">
                  
                    
                    <p style={{marginTop: "20px"}}>{description}</p>
                    
                  
                </div>
                {/* Main Project Content Ends */}
              </figure>
            </div>
          </div>
        </div>
      </Modal>
      {/* End  ModalOneContent */}
    </li>
  );
};

export default CertificateModal;
