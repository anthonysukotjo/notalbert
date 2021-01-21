import React from "react";

const style = {
    margin: '20px',
    backgroundColor: "#FFFF66",
    padding: '15px',
    width: '100%',
    display: 'block',


}

const Section = ({data}) => {

    let instructors =  "";
    for (let j = 0; j <data.instructors.length ; j ++ ){
        instructors = instructors + data.instructors[j] + " ";
    }


    const registrationNumber = data.registrationNumber;
    const sectionCode = data.code;
    const type = data.type;
    const status = data.status;
    const timing = '';
    const campus = data.campus;
    const buildingName = data.location;
    const units = data.maxUnits.toString();
    const notes = data.notes;




    return(
      <div className='col' style={style}>
          <h4>Section: {sectionCode}</h4>
          <div className='row'>
              <div className = 'col'>
                  <h6>Instructor</h6>
                  <h4>{instructors}</h4>
              </div>
              <div className = 'col'>
                  <h6>Status</h6>
                  <h4>{status}</h4>
              </div>
              <div className = 'col'>
                  <h6>Campus</h6>
                  <h4>{campus}</h4>
              </div>
              <div className = 'col'>
                  <h6>Room</h6>
                  <h4>{buildingName}</h4>
              </div>
              <div className = 'col'>
                  <h6>Units</h6>
                  <h4>{units}</h4>
              </div>
              <div className = 'col'>
                  <h6>Type</h6>
                  <h4>{type}</h4>
              </div>
              <div className = 'col'>
                  <h6>Registration #</h6>
                  <h4>{registrationNumber}</h4>
              </div>

          </div>
          <h4>Timing</h4>
          <h5>{notes}</h5>

      </div>

    );
}

export default Section;