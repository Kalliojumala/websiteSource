import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {webdev, datascience, other} from "../../data/projectdata";
import SliderModal from "./SliderModal";

const Portfolio = ({currentTheme}) => {

  //useState quick solution to change some 'unnoticed' colors that didnt change correctly.
  const [portfolioMenuColorFix, setPortfolioMenuColorFix] = useState('portfolio-tab-list');
  const [modalTitleColor, setModalTitleColor] = useState('#4169e1');
  
  useEffect(() => {
  if(currentTheme === 'darkmode') {
    setPortfolioMenuColorFix("portfolio-tab-list");
    setModalTitleColor("#4169e1")
  }
  else {
    setPortfolioMenuColorFix("portfolio-tab-list-light");
    setModalTitleColor("#33c40e")
  }
  console.log(currentTheme)
  }, [currentTheme])

  const allprojects = [...webdev, ...datascience, ...other];
  
  return (
    <Tabs>
      <TabList className={portfolioMenuColorFix}>
        <Tab>All</Tab>
        <Tab>Web Development</Tab>
        <Tab>Data Science</Tab>
        <Tab>Other</Tab>
        
      </TabList>

      <div className={"portfolio-tab-content"}>
        <TabPanel>
          <ul className={"row grid justify-content-center"} >
          {allprojects.map(({images, title, projectType, client, tech, source, prettylink, descriptions}) => (
            <SliderModal
              title={title}
              projectType={projectType}
              images={images}
              client={client}
              tech={tech}
              source={source}
              prettylink={prettylink}
              titleColor={modalTitleColor}
              descriptions={descriptions}
            />
          ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
          {webdev.map(({images, title, projectType, client, tech, source, prettylink, descriptions}) => (
            <SliderModal
              title={title}
              projectType={projectType}
              images={images}
              client={client}
              tech={tech}
              source={source}
              prettylink={prettylink}
              descriptions={descriptions}
            />
          ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
          {datascience.map(({images, title, projectType, client, tech, source, prettylink, descriptions}) => (
            <SliderModal
              title={title}
              projectType={projectType}
              images={images}
              client={client}
              tech={tech}
              source={source}
              prettylink={prettylink}
              descriptions={descriptions}
            />
          ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
          {other.map(({images, title, projectType, client, tech, source, prettylink, descriptions}) => (
            <SliderModal
              title={title}
              projectType={projectType}
              images={images}
              client={client}
              tech={tech}
              source={source}
              prettylink={prettylink}
              descriptions={descriptions}
            />
          ))}
          </ul>
        </TabPanel>
        {/* End MOCKUP Project */}
      </div>
    </Tabs>
  );
};

export default Portfolio;
