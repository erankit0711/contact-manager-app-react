function Search(props){
    function handleSearch(event){
        const {value} = event.target;
        props.setSearchTerm(value);
    }
    return <input type="text" class="search" onChange={handleSearch} placeholder="Search by Name, Contact, Email, State..."></input>;
}

export default Search;