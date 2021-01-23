import React , { CSSProperties }from "react";
import rmpData from './newrmpdata.json';
import Recitations from "./Recitations";

const style = {
    margin: '20px',
    backgroundColor: "#BEBEBE",
    padding: '15px',
    width: '100%',
    display: 'block',

}



const Section = ({data}) => {

    let instructorElements : JSX.Element[] = [];
    let recitations : JSX.Element[] = [];

    if (data.hasOwnProperty('recitations')) {
        console.log('has recitation');
        for(let i = 0 ; i < data.recitations.length ; i ++ ){
            // console.log(data.recitations[i]);
            recitations.push(<Recitations data={data.recitations[i]}/>)
        }
    } else {
        recitations.push(<div></div>);
    }



    for (let j = 0; j <data.instructors.length; j ++ ){
        instructorElements.push(<h4>{data.instructors[j]}</h4>);
        const instructorNames = data.instructors[j].split(' ');
        const result = rmpData.find(o => (o.firstName.includes(instructorNames[0]) || instructorNames[0].includes(o.firstName)) && o.lastName.includes(instructorNames[instructorNames.length-1]));

        const resultRating = result?.currentRating ?? 'Not Found';
        // console.log(resultRating);
        const ratingColor = (rating) => {

            const ratingFloat =parseFloat(rating);

            if (ratingFloat >= 4) {
                return '#90ee90';
                // light green
            } else if (ratingFloat >= 3 ) {
                return 'yellow';
            } else if (ratingFloat <3) {
                return '#ffcccb';
                // light red
            } else if (rating === 'No Rating'){
                return 'grey';
            }else {
                return '#F5F5F5';
            }



        }
        const rmpLink = resultRating !== 'Not Found' ? `https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${result?.rmpid}&showMyProfs=true`: '/';


        const buttonStyle : CSSProperties = {
            pointerEvents:  resultRating !== 'Not Found' ? 'auto': 'none',
            backgroundColor: ratingColor(resultRating),
        }
        instructorElements.push(<div className='btn' style = {buttonStyle}>
            <a  href={rmpLink} >
                RMP: {resultRating}
            </a>
        </div>);
    }



    const registrationNumber = data.registrationNumber;
    const sectionCode = data.code;
    const type = data.type;
    const status = data.status;
    // const timing = '';
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
                  {instructorElements}
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
          <div>
              {recitations}
          </div>

      </div>

    );
}

export default Section;