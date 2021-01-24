import React from "react";

const searchBarStyle = {

    height:'50px',
    width:'800px',
    marginTop:'25px',


}

const SearchBar = ()=>{

    return(
        <div>
            <form >
                <input
                    style={searchBarStyle}
                    autoComplete="off"
                    placeholder='Search Code, names and descriptions'></input>
            </form>
        </div>
    );

}
export default SearchBar;