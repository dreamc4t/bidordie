

const ActionList = () => {




  return (
    <form className="actionlist-form">
        <div className="action-container">
            <input placeholder="..." type="text" className="search-input"></input>
            <button className="search-button" type="submit">Search</button>
            <select name="competences" class="filter-competence">
                <option value="all">Competence</option>
                <option value="java">Java</option>
                <option value="c#">C#</option>
                <option value="python">Python</option>
                <option value="javascript">Javascript</option>
            </select>
            <select name="sort" class="sort">
                <option value="all">Sort</option>
                <option value="price">Price</option>
                <option value="time-left">Time left</option>
            </select>
        </div>
    </form>

    
  );
};

export default ActionList;
