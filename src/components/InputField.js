const InputField = ({ inpt, type }) => {
  return (
    <div key={inpt.key}>
      {inpt.map((inpt) => (
        <div key={inpt.key}>
          {inpt.label.includes("*") ? (
            <div key={inpt.key}>
              <label
                htmlFor={inpt.label.replace(/\s/g, "").toLocaleLowerCase()}
              >
                {inpt.label}
              </label>
              <br></br>
              <input
                type={type}
                required
                name={inpt.label
                  .replace(/\s/g, "")
                  .toLocaleLowerCase()
                  .replace(/[^a-z0-9]/gi, "")}
                placeholder={"Enter " + inpt.label.toLocaleLowerCase()}
              ></input>
            </div>
          ) : (
            <div key={inpt.key}>
              <label
                htmlFor={inpt.label.replace(/\s/g, "").toLocaleLowerCase()}
              >
                {inpt.label}
              </label>
              <br></br>
              <input
                type={type}
                name={inpt.label
                  .replace(/\s/g, "")
                  .toLocaleLowerCase()
                  .replace(/[^a-z0-9]/gi, "")}
                placeholder={"Enter " + inpt.label.toLocaleLowerCase()}
              ></input>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InputField;
