import React from "react";
const AboutUs = ()=>{
    return(
        <div className = 'align-content-center justify-content-start'
             style={{
            textAlign:'left',
            }}>
            <h4> <strong>How does Alb3rt work?</strong></h4>
            <h6>Course data is retrieved from Schedge, an open-source API to NYU's course catalog.</h6>
                <h6>Schedge scrapes data from the real Albert course catalog and uploads it to an online database.
                The data can then be accessed through the API end-points.
                  </h6>
            <div style={{marginBottom:'30px'}}></div>
            <h4><strong>Contribute to the Schedge API!</strong></h4>
             <a href={'https://github.com/BUGS-NYU/schedge'}>
                https://github.com/BUGS-NYU/schedge
            </a>
            <div style={{marginBottom:'30px'}}></div>
            <h4><strong>Contribute to A1b3rt!</strong></h4>

             <a href={'https://github.com/pecansalad/coursecatalog'}>https://github.com/pecansalad/coursecatalog</a>

        </div>
    );
}
export default AboutUs;