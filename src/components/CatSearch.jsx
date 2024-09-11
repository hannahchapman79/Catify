import { useState } from "react"


const CatSearch = ({ setSearchTerm, setBreed, breed }) => {
    const [searchInput, setSearchInput] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
        setSearchInput("")
    }

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSelectChange = (e) => {
        setBreed(e.target.value)
    }

    return (
        <form>
            <label htmlFor="number-of-cats">How many purrfect pics do you want to see?</label><br></br>
            <input
                type="number"
                id="number-of-cats"
                onChange={handleSearchChange}
                value={searchInput}
            ></input>
            <label htmlFor="breeds">Pick your favorite feline breed!</label>
            <select id="breeds" name="breeds" onChange={handleSelectChange}>
                <option value="">All</option>
                <option value="sfol">Scottish Fold</option>
                <option value="asho">American Shorthair</option>
                <option value="amis">Australian Mist</option>
                <option value="hima">Himalayan</option>
                <option value="abob">American Bobtail</option>
                <option value="ragd">Ragdoll</option>
                <option value="norw">Norwegian Forest Cat</option>
                <option value="mcoo">Maine Coon</option>
                <option value="jbob">Japanese Bobtail</option>
            </select>
            <button className="go-button" type="submit" onClick={clickHandler}>
                Go!
            </button>
        </form>

    )
}

export default CatSearch