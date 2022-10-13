function SearchBar(){
    return(

    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
        />
        
    </form>
);
    }
export default SearchBar