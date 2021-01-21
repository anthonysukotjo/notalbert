import React,{useEffect,useState} from "react";
import Section from "./Section";

const schoolStyle = {
    // marginTop: '30px',
    width: "100%"
}

const SchoolComponentList =({Boolean: loading, Array: data})=>{

    console.log("school component data " );
    console.log(data);
    let elements : JSX.Element[] = [];
    for (let i = 0;i < data.length; i ++){
        const code = Object.keys(data[i])[0];
        const school = data[i][code];
        if (code == 'NT') {
            elements.push(
                <div style={schoolStyle}>
                    <h4> <strong> {code} </strong> Non-Credit Tisch School of the Arts</h4>
                </div>
            );
        } else if (code == 'ND'){
            elements.push();
        } else {
            elements.push(
                <div style={schoolStyle}>
                    <button className='btn default'>
                    <h4 > <strong> {code} </strong> {school}</h4>
                </button>
                </div>
            );

        }
    }

    if(!loading){
        return(
            <div>{elements}</div>
        );
    } else return(
        <div></div>
    );
}

const Schools = () => {

    // const [departmentList, setDepartmentsList] = useState({ loading: true, data: {} });
    const [schoolList, setSchoolList] = useState({
        loading: true,
        data: {
            undergraduateCoursesList:  [{},{}],
            graduateCoursesList:  [{},{}],
            otherCoursesList: [{},{}]
        }

    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://schedge.a1liu.com/schools");
                console.log("fetching...");
                if (!response.ok) {
                    // handle invalid search parameters
                    return;
                }
                const data = await response.json();
                console.log(data);
                const undergraduateCourses: Object[]= [];
                const graduateCourses : Object[]=  [];
                const otherCourses : Object[]=  [];


                for (const key in data){
                    let school = {};
                    school[key] =data[key].name;
                    if (key.startsWith('U') ) {
                        undergraduateCourses.push(school) ;
                    } else if (key.startsWith('G') ) {
                        graduateCourses.push(school) ;
                    } else  {
                        otherCourses.push(school) ;
                    }
                }
                console.log("undegrad courses");
                console.log(undergraduateCourses);

                setSchoolList(() => ({
                    loading: false,
                    data: {
                        undergraduateCoursesList:  undergraduateCourses,
                        graduateCoursesList:  graduateCourses,
                        otherCoursesList: otherCourses
                    }
                }));
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);




    return(
        <div className='col'>
            <h2 className='font-weight-bolder'>Schools</h2>
            <div className='row'>

                <div className='col'>
                    <h4 className='font-weight-bolder'> Undergraduate</h4>
                    <div className=' text-left'>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.undergraduateCoursesList}/>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.otherCoursesList}/></div>
                </div>
                <div className='col'>
                    <h4 className='font-weight-bolder'> Graduate</h4>
                    <div className=' text-left'>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.graduateCoursesList}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Schools;
