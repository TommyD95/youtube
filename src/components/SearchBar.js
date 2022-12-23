import { useState } from "react";
function SearchBar({onFormSubmit}) {

    const [valueSearch,setValueSearch]=useState('');

    const onInputChange=(event)=>{
        setValueSearch(event.target.value)

    }

    const onFormsSubmit=(event)=>{
        event.preventDefault();
        onFormSubmit(valueSearch);
    }
   

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormsSubmit}>
                <div className="field">
                    <label>video search</label>
                    <input type="text" onChange={onInputChange} value={valueSearch}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;