import React from "react";

const style = {
    borderStyle: "solid",
    padding: '20px',
    display: 'inline-block',
    maxWidth: "300px",
    marginLeft: '30px',
    marginRight: '30px'
}

const FilterBox = ()=>{



    return(
        <div className={'col'} style={style}>
            <div className='row'>
                <text>Refine By  </text>
                <button>Clear Filters</button>
            </div>

            <div>         <text className='font-weight-bolder'>Semester</text></div>
            <div  >
                <select className="custom-select">
                    <option value="0">Select Semester:</option>
                    <option value="1">Fall 2020</option>
                    <option value="2">Spring 2021</option>

                </select>
            </div>
            <div>  <text className='font-weight-bolder'>School</text></div>
            <div  >
                <select className="custom-select">
                    <option value="0">Select School:</option>
                    <option value="1">Fall 2020</option>
                    <option value="2">Spring 2021</option>

                </select>
            </div>
            <div> <text className='font-weight-bolder'>Subject</text></div>
            <div  >
                <select className="custom-select">
                    <option value="0">Select Subject:</option>
                    <option value="1">Fall 2020</option>
                    <option value="2">Spring 2021</option>

                </select>
            </div>
            <div><text className='font-weight-bolder'>Instruction Mode</text></div>
            <div>

                <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label htmlFor="vehicle1"> Online</label>
                </div>
            <div>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label htmlFor="vehicle2"> In person</label>
            </div>
                    <div>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                        <label htmlFor="vehicle3"> Blended</label>
                    </div>
            </div>
            <div>
                <text className='font-weight-bolder'>Class Units</text>

                <div className={'row'}>
                    <div className={'col'}>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> 0 to 1 units</label>
                        </div>

                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> 2 units</label>
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> 3 units</label>
                        </div>
                    </div>
                    <div className={'col'}>
                        <div>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                            <label htmlFor="vehicle2"> 4 units</label>
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label htmlFor="vehicle3"> 5 units</label>
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label htmlFor="vehicle3"> {'>'}5 units </label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

}
export default FilterBox;