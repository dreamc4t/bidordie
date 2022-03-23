import OtherLoginOption from "../components/OtherLoginOption";
import { Rating } from "react-simple-star-rating";
import InputField from "../components/InputField";
import { useState } from "react";

const BecomeAMember = () => {
  const [view, setView] = useState("person-view");

  const handleChange = (e) => {
    setView(e.target.value);
  }

  if (view == "person-view") {
    console.log("nu är det person")
  } else if (view == "company-view") {
    console.log("COMPANYY")
  }


  const inputs = [
    { key: 1, label: "First name*" },
    { key: 2, label: "Last name*" },
    { key: 3, label: "Address" },
    { key: 4, label: "Email*" },
    { key: 5, label: "Town" },
    { key: 6, label: "Zip code" },
    { key: 7, label: "Telephone number" },
    { key: 8, label: "Password*" },
    { key: 9, label: "Password again*" },
  ];

  const links = [
    { key: 1, label: "Link to github" },
    { key: 2, label: "Link to linkedin" },
    { key: 3, label: "Other links" },
  ];

  const attachedItems = [
    { key: 1, label: "CV" },
    { key: 2, label: "Profile Picture" },
    { key: 3, label: "Other files to attach" },
  ];

  const competences = [
    { key: 1, label: "Java" },
    { key: 2, label: "C#" },
    { key: 3, label: "REACT" },
    { key: 4, label: "Javascript" },
    { key: 5, label: "Python" },
  ];

  return (
    <div id="become-a-member-div">
      <form action="">
        <div className="become-a-member-background">
          <h1>Create account</h1>

          <div className="create-acc-with-other">
            <p>----- or signup with -----</p>
            <OtherLoginOption />
          </div>

          <div className="company-or-person-div">
            <input type="radio" id="radio1" name="clicker" onChange={handleChange} value={"person-view"}  defaultChecked ></input>
            <label htmlFor="radio1"  >I am a person (looking for job)</label>
            <input type="radio" id="radio2" name="clicker" onChange={handleChange} value={"company-view"} ></input>
            <label htmlFor="radio2">I am a company (looking to hire)</label>
          </div>

          <div className="info-wrapper">
            <div className="basic-info-div column-div">
              <InputField inpt={inputs} type="text" />
            </div>

            <div className="links-attached-div column-div">
              <InputField inpt={attachedItems} type="file" />
              <br></br>
              <InputField inpt={links} type="text" />
            </div>

            <div className="competences-div column-div">
              <h3>Competences: </h3>
              {competences.map((inpt) => (
                <div>
                  <Rating size={18} />
                  <span> {inpt.label}</span>
                </div>
              ))}
              <label>Other info:</label>
              <br></br>
              <input
                className="other-info-field"
                type="text"
                placeholder="Type other info here"
              ></input>
            </div>
          </div>
          <div className="submit-button-div">
            <label className="terms-label">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                I have read and agrees to the Term of Service agreement
              </a>
            </label>
            <input type="checkbox"></input>
            <br></br>
            <button type="submit" className="submit-button">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BecomeAMember;
