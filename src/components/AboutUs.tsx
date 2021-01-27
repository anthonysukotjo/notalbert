import React from "react";
import { SocialIcon } from "react-social-icons";

const AboutUs = () => {
  return (
    <div
      className="align-content-center justify-content-start"
      style={{
        textAlign: "left",
      }}
    >
      <h4 style={{ marginBottom: "20px" }}>
        {" "}
        <strong>How does A1b3rt work?</strong>
      </h4>
      <h6>
        Course data is retrieved from Schedge, an open-source API to NYU's
        course catalog.
      </h6>
      <h6>
        Schedge scrapes data from the real Albert course catalog and uploads it
        to an online database.
      </h6>
      <h6>The data can then be accessed through the API end-points.</h6>

      <div className={"row"} style={{ marginLeft: "1px", marginTop: "25px" }}>
        <div
          className={"flex-column align-items-center"}
          style={{ marginRight: "50px" }}
        >
          <SocialIcon
            url="https://github.com/BUGS-NYU/schedge"
            style={{ marginLeft: "11px", marginBottom: "5px" }}
          />
          <h6>
            <strong>Schedge</strong>
          </h6>
        </div>
        <div className={"flex-column align-items-center"}>
          <SocialIcon
            url="https://github.com/pecansalad/coursecatalog"
            style={{ marginBottom: "5px" }}
          />

          <h6 style={{ textAlign: "center" }}>
            <strong>A1b3rt</strong>
          </h6>
        </div>
      </div>

      {/*<h4><strong>Contribute to the Schedge API!</strong></h4>*/}
      {/* <a href={'https://github.com/BUGS-NYU/schedge'}>*/}

      {/*</a>*/}
      {/*<div style={{marginBottom:'30px'}}></div>*/}
      {/*<h4><strong>Contribute to A1b3rt!</strong></h4>*/}

      {/* <a href={'https://github.com/pecansalad/coursecatalog'}>https://github.com/pecansalad/coursecatalog</a>*/}
    </div>
  );
};
export default AboutUs;
