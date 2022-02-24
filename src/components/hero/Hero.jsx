import React, { useRef, useEffect } from "react";
import { init } from "ityped";
import { heroContent, SocialShare } from "../../data/homepagedata";

const Hero = ({ setTabIndex }) => {
  
  const animatedTextRef = useRef();
  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer", "Data analysis", "CS-Student"],
    });
  }, []);

  function redirectToAbout() {
    setTabIndex(1);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${heroContent.heroImage})`,
          }}
        ></div>

        <div className="col-12 col-lg-8 offset-lg-4 home-details   text-center text-lg-start">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}.jpg`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />

            {SocialShare.map(({ iconName, link }, i) => (
              <a
                className="mainSocialList"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <i className={iconName}></i>
              </a>
            ))}

            <h1>I'm {heroContent.heroTitleName}</h1>
            <div data-nosnippet>
              <h1 ref={animatedTextRef} style={{ minHeight: "62px" }}></h1>
            </div>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button
              className="button"
              onClick={redirectToAbout}
              styles={{ marginBottom: "100px" }}
            >
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>

              
            </button>
           
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Hero;
