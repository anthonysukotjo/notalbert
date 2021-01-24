//to be deleted and merged with home once searchbar and filter box is finished
import React from "react";
import SearchBar from "./SearchBar";
import EmptySearchText from "./EmptySearchText";
import FilterBox from "./FilterBox";

const SearchPage = () =>{

    return(<div>
        <h1>under construction</h1>
        <div className={ 'col'}>
            <div className={'row'}>
                <div className={'col'}>
                    <SearchBar/>
                    <EmptySearchText/>
                </div>
                <FilterBox/>
            </div>
        </div>

    </div>);

}

export default SearchPage;