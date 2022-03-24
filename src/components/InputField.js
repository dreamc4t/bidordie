const InputField = ({ inpt, type }) => {
  return (
    <div>
      {inpt.map((inpt) => (
        <div key={inpt.key}>
          <label 
          htmlFor={inpt.label.replace(/\s/g, "").toLocaleLowerCase()}

          >
            {inpt.label}
          </label>
          <br></br>
          <input
            type={type}
            name={inpt.label.replace(/\s/g, "").toLocaleLowerCase().replace(/[^a-z0-9]/gi, '')}
            
            placeholder={"Enter " + inpt.label.toLocaleLowerCase()}
            
            
          ></input>
        </div>
      ))}
    </div>
  );
};

export default InputField;
