

const SortBar = () => {

  


  return (
    <form className="sortbar-form">
        <div className="action-container">
            <input placeholder="..." type="text" id="search-input"></input>
            <button className="button-element" type="submit">Search</button>
            <select name="competences" id="filter-competence">
                <option value="all">Competence</option>
                <option value="java">Java</option>
                <option value="c#">C#</option>
                <option value="python">Python</option>
                <option value="javascript">Javascript</option>
            </select>
            <select name="sort" id="sort">
                <option value="all">Sort</option>
                <option value="price">Price</option>
                <option value="time-left">Time left</option>
            </select>
        </div>
    </form>

    
  );
};

export default SortBar;
