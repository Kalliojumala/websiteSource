import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";

const SliderModal = ({
  images,
  title,
  projectType,
  client,
  tech,
  source,
  prettylink,
  titleColor,
  descriptions
}) => {
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    className: "",
  };

  const [isOpen, setisOpen] = useState(false);

  function toggleModal() {
    setisOpen(!isOpen);
  }

  return (
    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
      <figure onClick={toggleModal}>
        <img src={images[images.length - 1]} alt="Portolio" />
        <div className=" hover-content-wrapper">
          <span>{title}</span>
        </div>
      </figure>

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
                      <span className="project-label">Project </span>:{" "}
                      <span className="ft-wt-600 uppercase">{projectType}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-user-o pr-2"></i>
                      <span className="project-label">Client </span>:{" "}
                      <span className="ft-wt-600 uppercase">{client}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-code pr-2"></i>
                      <span className="project-label">Tech </span>:{" "}
                      <span className="ft-wt-600 uppercase">{tech}</span>
                    </div>
                    {/* End .col */}

                    <div className="col-12 col-sm-6 mb-2">
                      <i className="fa fa-external-link pr-2"></i>
                      <span className="project-label">Source </span>:{" "}
                      <span className="ft-wt-600 uppercase">
                        <a href={source} target="_blank" rel="noreferrer">
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
                <Slider {...settings}>
                  {images.map((image) => (
                    <div className="slide_item">
                      <img src={image} alt="slide 1" />
                    </div>
                  ))}
                </Slider>
                <div className="blog-excerpt open-sans-font">
                  
                    {descriptions.map((item) => 
                    <p style={{marginTop: "20px"}}>{item}</p>
                    )}
                  
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

export default SliderModal;
