import { useState } from "react"


const CatSearch = ({setSearchTerm}) => {

    const clickHandler = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
        setSearchInput(1)
    }
    
    const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    }

const [searchInput, setSearchInput] = useState(1);
return ( 
    <form>
        <label htmlFor="number-of-cats">How many cat pictures would you like to see?</label><br></br>
        <input type="number" id="number-of-cats" onChange={handleSearchChange} value={searchInput}></input>
        <label htmlFor="breeds">Which breed of cat?</label>
        <select id="breeds" name="breeds" >
            <option value="">Random</option>
            <option value="sfol">Scottish Fold</option>
            <option value="asho">American Shorthair</option>
            <option value="esho">Exotic Shorthair</option>
            <option value="lape">LaPerm</option>
        </select>
        <button type="submit" onClick={clickHandler}>Go!</button>
    </form>
)
}

export default CatSearch