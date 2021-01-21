import React,{useEffect,useState} from "react";

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
            let link=`/subject?schoolCode=${code}&schoolName=${school}`;
            elements.push(
                <div style={schoolStyle}><button className='btn default'>
                    <a href = {link}>
                        <h4> <strong> {code} </strong> Non-Credit Tisch School of the Arts</h4>
                    </a>
                </button></div>
            );
        } else if (code == 'ND'){
            elements.push();
        } else {
            let link=`/subject?schoolCode=${code}&schoolName=${school}`;
            elements.push(
                <div style={schoolStyle}>
                    <button className='btn default'>
                        <a href={link}>
                            <h4 > <strong> {code} </strong> {school}</h4>
                        </a>
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
            undergraduateSchoolList:  [{},{}],
            graduateSchoolList:  [{},{}],
            otherSchoolList: [{},{}]
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
                const undergraduateSchools: Object[]= [];
                const graduateSchools : Object[]=  [];
                const otherSchools : Object[]=  [];


                for (const key in data){
                    let school = {};
                    school[key] =data[key].name;
                    if (key.startsWith('U') ) {
                        undergraduateSchools.push(school) ;
                    } else if (key.startsWith('G') ) {
                        graduateSchools.push(school) ;
                    } else  {
                        otherSchools.push(school) ;
                    }
                }


                setSchoolList(() => ({
                    loading: false,
                    data: {
                        undergraduateSchoolList:  undergraduateSchools,
                        graduateSchoolList:  graduateSchools,
                        otherSchoolList: otherSchools
                    }
                }));
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);




    return(
        <div className='col'>
            <div className='row'>

                <div className='col'>
                    <h4 className='font-weight-bolder'> Undergraduate</h4>
                    <div className=' text-left'>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.undergraduateSchoolList}/>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.otherSchoolList}/></div>
                </div>
                <div className='col'>
                    <h4 className='font-weight-bolder'> Graduate</h4>
                    <div className=' text-left'>
                        <SchoolComponentList Boolean={schoolList.loading} Array={schoolList.data.graduateSchoolList}/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Schools;
