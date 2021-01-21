import React from 'react';
import Section from "./Section";

const style = {
    margin: '20px',
    backgroundColor: "yellow",
    borderStyle: "solid",
    padding: '15px',
    display: 'inline-block',
}



const course = ({data}) => {


    const courseName = data.name;
    const courseCode = data.subjectCode.code +'-'+ data.subjectCode.school + ' ' + data.deptCourseId;
    const noOfSections = data.sections.length;
    const description = data.description;
    let elements : JSX.Element[] = [];
    for (let i = 0;i < noOfSections ; i ++){

        const sectionData = data.sections[i];
        elements.push(
            <Section data ={sectionData} />

    );
    }

    return(
        <div style = {style} >
            <h3> {courseName}</h3>
            <h3> {courseCode}</h3>
            <h5>{description}</h5>
            <h4> this class has {noOfSections} sections</h4>
            <div className='container col'>
                {elements}
            </div>

        </div>


    );
}

export default course;
