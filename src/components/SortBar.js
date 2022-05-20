import {useState} from "react";



const SortBar = ({setChecked, checked}) => {

  const checkList = ["Java", "Javascript", "C#", "Python", "React"]
  
  const handleCheck = (e) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };


  return (
    <div className="sortbar-form">
        <div className="action-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input className="sort-input" value={item} type="checkbox" onChange={handleCheck}/>
              <span>{item}</span>
            </div>
          ))}
        </div>
    </div>

    
  );
};

export default SortBar;
