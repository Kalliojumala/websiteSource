import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../components/hero/Hero";
import Index from "../components/about/index";
import Portfolio from "../components/portfolio/Portfolio";
import Certificates from "../components/certificates/Certificates";
import Contact from "../components/contact/Contact";
import AnimatedCursor from "react-animated-cursor";

const menuItem = [
  { icon: "fa fa-home", menuName: "Home" },
  { icon: "fa fa-user", menuName: "About" },
  { icon: "fa fa-briefcase", menuName: "Portfolio" },
  { icon: "fa fa-graduation-cap", menuName: "Certificates" },
  { icon: "fa fa-envelope-open", menuName: "Contact" },
];

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //Function takes in selectedIndex on TabBar,
  //if user selects focused Tab, scrolls to top of current page.
  function changeTab(index) {
    if (index === tabIndex) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setTabIndex(index);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const [currentTheme, setThemeColor] = useState("darkmode");

  //Function to switch color instead of "dupe screens", no refresh needed change is instant.
  //Apply background color on light mode later...
  function changeThemeColor() {
    if (currentTheme === "darkmode") {
      setThemeColor("lightmode");
      document.body.classList.add("light");
    } else {
      setThemeColor("darkmode");
      document.body.classList.remove("light");
    }
  }

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color={"25, 41, 120"}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <div className={currentTheme}>
        <div className={"demo-sticker"} onClick={changeThemeColor}>
          <i
            className={
              currentTheme === "darkmode" ? "fa fa-lightbulb-o" : "fa fa-moon-o"
            }
            styles={{}}
            aria-hidden="true"
          ></i>
        </div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => changeTab(index)}>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={item.icon}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>

          <div className="tab-panel_list">
            <TabPanel className="home ">
              <div
                className="container-fluid main-container container-home p-0 "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero setTabIndex={setTabIndex} />
              </div>
            </TabPanel>

            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-left text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">Resume</span>
                </div>

                <Index />
              </div>
            </TabPanel>

            <TabPanel className="portfolio professional">
              <div
                className="title-section text-left text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
              </div>

              <div
                className="container grid-gallery main-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <Portfolio currentTheme={currentTheme} />
              </div>
            </TabPanel>

            <TabPanel className="blog portfolio professional">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-left text-sm-center">
                  <h1>
                    Certifi<span>cations </span>
                  </h1>
                  <span className="title-bg">Certificates</span>
                </div>

                <div className="main-content">
                  <Certificates currentTheme={currentTheme} />
                </div>
              </div>
            </TabPanel>

            <TabPanel className="contact">
              <div
                className="title-section text-left text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  Contact<span> Me</span>
                </h1>
                <span className="title-bg">get in touch</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Contact />
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
