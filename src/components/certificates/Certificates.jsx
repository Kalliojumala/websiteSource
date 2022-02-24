import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CertificateModal from "./CertificateModal";
import { dataquest, school } from "../../data/certificationdata";
import { sortByDate } from "../../functions/sortByDate";

const Certificates = ({ currentTheme }) => {
  //useState quick solution to change some 'unnoticed' colors that didnt change correctly.
  const [portfolioMenuColorFix, setPortfolioMenuColorFix] = useState(
    "portofolio-tab-list noDots"
  );
  const [modalTitleColor, setModalTitleColor] = useState("#4169e1");

  useEffect(() => {
    if (currentTheme === "darkmode") {
      setPortfolioMenuColorFix("portfolio-tab-list noDots");
      setModalTitleColor("#4169e1");
    } else {
      setPortfolioMenuColorFix("portfolio-tab-list-light noDots");
      setModalTitleColor("#33c40e");
    }
    console.log(currentTheme);
  }, [currentTheme]);

  //concat and sort all certs, display newest to oldest
  const allcert = sortByDate([...dataquest, ...school]);
  const dataquestByDate = sortByDate(dataquest);
  const schoolByDate = sortByDate(school);

  return (
    <Tabs>
      <TabList className={portfolioMenuColorFix}>
        <Tab>All</Tab>
        <Tab>Dataquest</Tab>
        {/* <Tab>School</Tab> */}
      </TabList>

      <div className={"portfolio-tab-content"}>
        <TabPanel>
          <ul className="row grid justify-content-center noDots">
            {allcert.map(
              ({
                image,
                title,

                tags,
                date,
                description,
                verificationlink,
                prettylink,
              }) => (
                <CertificateModal
                  image={image}
                  title={title}
                  tags={tags}
                  date={date}
                  titleColor={modalTitleColor}
                  description={description}
                  verificationlink={verificationlink}
                  prettylink={prettylink}
                />
              )
            )}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center noDots">
            {dataquestByDate.map(
              ({
                image,
                title,
                titlebg,
                tags,
                date,
                description,
                verificationlink,
                prettylink,
              }) => (
                <CertificateModal
                  image={image}
                  title={title}
                  titlebg={titlebg}
                  tags={tags}
                  date={date}
                  titleColor={modalTitleColor}
                  description={description}
                  verificationlink={verificationlink}
                  prettylink={prettylink}
                />
              )
            )}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center noDots">
            {schoolByDate.map(
              ({
                image,
                title,
                titlebg,
                tags,
                date,
                description,
                verificationlink,
                prettylink,
              }) => (
                <CertificateModal
                  image={image}
                  title={title}
                  titlebg={titlebg}
                  tags={tags}
                  date={date}
                  titleColor={modalTitleColor}
                  description={description}
                  verificationlink={verificationlink}
                  prettylink={prettylink}
                />
              )
            )}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Certificates;
