import React, {CSSProperties} from "react";
import rmpData from "./newrmpdata.json";

const style = {
    margin: '20px',
    backgroundColor: "#DCDCDC",
    padding: '15px',
    width: '100%',
    display: 'block',

}


const Recitations = ({data}) => {

    let instructorElements : JSX.Element[] = [];

    for (let j = 0; j <data.instructors.length; j ++ ){
        instructorElements.push(<h4>{data.instructors[j]}</h4>);
        const instructorNames = data.instructors[j].split(' ');

        const result = rmpData.find(o => (o.firstName.includes(instructorNames[0]) || instructorNames[0].includes(o.firstName)) && o.lastName.includes(instructorNames[instructorNames.length-1]));

        const resultRating = result?.currentRating ?? 'NA';
        // console.log(resultRating);
        const rmpLink = resultRating !== 'NA' ? `https://www.ratemyprofessors.com/ShowRatings.jsp?tid=${result?.rmpid}&showMyProfs=true`: '/';
        const buttonStyle : CSSProperties = {
            pointerEvents:  resultRating !== 'NA' ? 'auto': 'none',
        }
        instructorElements.push(<div className='btn btn-info' style = {buttonStyle}>
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
            <h4>Recitation: {sectionCode}</h4>
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

        </div>

    );
}

export default Recitations;
