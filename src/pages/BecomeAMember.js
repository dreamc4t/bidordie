import OtherLoginOption from "../components/OtherLoginOption";
import { Rating } from "react-simple-star-rating";
import InputField from "../components/InputField";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const BecomeAMember = () => {
  const personInputs = [
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

  const companyInputs = [
    { key: 1, label: "Company name*" },
    { key: 2, label: "Org number*" },
    { key: 3, label: "Address" },
    { key: 4, label: "Email*" },
    { key: 5, label: "Town" },
    { key: 6, label: "Zip code" },
    { key: 7, label: "Telephone number" },
    { key: 8, label: "Password*" },
    { key: 9, label: "Password again*" },
  ];

  const personLinks = [
    { key: 1, label: "Link to github" },
    { key: 2, label: "Link to linkedin" },
    { key: 3, label: "Other links" },
  ];

  const companyLinks = [
    { key: 1, label: "Link to webpage" },
    { key: 2, label: "Other links" },
  ];

  const personAttachedItems = [
    { key: 1, label: "CV" },
    { key: 2, label: "Profile Picture" },
    { key: 3, label: "Other files to attach" },
  ];

  const companypAttachedItems = [
    { key: 1, label: "Company logo" },
    { key: 2, label: "Other files to attach" },
  ];

  const personCompetences = [
    { key: 1, label: "Java" },
    { key: 2, label: "C#" },
    { key: 3, label: "REACT" },
    { key: 4, label: "Javascript" },
    { key: 5, label: "Python" },
  ];

  const [view, setView] = useState("person-view");



  const request = ({ endpoint, method, data }) => {
    fetch(endpoint, {
      body: JSON.stringify(data),
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const add = (data) => {
    request({
      endpoint: "http://localhost:6001/test",
      method: "POST",
      data,
    });
  };

  const createNewUser =  () => {

    console.log("Creating new user..")

    const newUser = {
      id: uuidv4(),
      firstName: "APAN",
      lastName: "aasdsdassad",
      imageUrl: "/img/erik.jpeg",
      CV: "cv-uasdfasdfasdf här",
      phone: "0707472123921",
      address: "Åhusgatan 6",
      zipCode: 21438,
      town: "Malmö",
      links: [
        { github: "https://github.com/" },
        { linkedin: "https://www.linkedin.com/in/erik-sund-25ab87b0/" }
      ],
      otherInfo: "Kan stå på händer"
    }

    add(newUser)

  

  }

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submittt")
    createNewUser()
  }

  return (
    <div id="become-a-member-div">
      <form onSubmit={handleSubmit}>
        <div className="become-a-member-background">
          <h1>Create account</h1>

          <div className="create-acc-with-other">
            <p>----- or signup with -----</p>
            <OtherLoginOption />
          </div>

          <div className="company-or-person-div">
            <input
              type="radio"
              id="radio1"
              name="clicker"
              onChange={handleChange}
              value={"person-view"}
              defaultChecked
              style={{"cursor": "pointer"}}
            ></input>
            <label htmlFor="radio1" style={{"cursor": "pointer"}}>I am a person (looking for job) </label>

            <input
              type="radio"
              id="radio2"
              name="clicker"
              onChange={handleChange}
              value={"company-view"}
              style={{"cursor": "pointer"}}
            ></input>

            <label htmlFor="radio2" style={{"cursor": "pointer"}}>I am a company (looking to hire)</label>
          </div>

          <div className="info-wrapper">
            <div className="basic-info-div column-div">
              {view === "person-view" ? (
                <InputField inpt={personInputs} type="text" />
              ) : (
                <InputField inpt={companyInputs} type="text" />
              )}
            </div>

            <div className="links-attached-div column-div">
              {view === "person-view" ? (
                <InputField inpt={personAttachedItems} type="file" />
              ) : (
                <InputField inpt={companypAttachedItems} type="file" />
              )}
              <br></br>
              {view === "person-view" ? (
                <InputField inpt={personLinks} type="text" />
              ) : (
                <InputField inpt={companyLinks} type="text" />
              )}
            </div>

            <div className="competences-div column-div">
              {view === "person-view" ? (
                <>
                  <h3>Competences: </h3>
                  {personCompetences.map((inpt) => (
                    <div key={inpt.key}>
                      {" "}
                      <Rating size={18} /> <span> {inpt.label}</span>{" "}
                    </div>
                  ))}
                </>
              ) : (
                <></>
              )}
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
