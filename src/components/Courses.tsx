import React,{useEffect,useState} from "react";
import Course from './Course';
import qs from 'qs';


const CourseComponentListBuilder = ({Boolean: loading, Array: data})=>{
    console.log("building...");
    let elements : JSX.Element[] = [];
    for (let i = 0;i < data.length; i ++){
        elements.push(
            <Course data={data[i]}/>
        );}
    if(!loading){
        return(
            <div>{elements}</div>
        );
    } else return(
        <div></div>
    );

}

const Courses = ({year,term,location}) => {


    const {school} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    const {subject} = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });


    const [courseList, setCourseList] = useState({
        loading : true,
        data : [{}]
    });



    useEffect(()=>{
        ( async ()=> {
            try {
                const link = `https://schedge.a1liu.com/${year}/${term}/${school}/${subject}?full=true`;
                const response = await fetch(link);
                console.log("fetching...");
                if (!response.ok) {
                    // handle invalid search parameters
                    return;
                }

                const retrievedData = await response.json();
                setCourseList(()=>({
                    loading: false,
                    data: retrievedData,

                }));

            } catch (error) {
                console.error(error);
            }

        })();
    },[]);

    let elements : JSX.Element[] = [];

    return(
        <div className='col'>
            <CourseComponentListBuilder Boolean={courseList.loading} Array={courseList.data}/>
        </div>
    );


}

export default Courses;