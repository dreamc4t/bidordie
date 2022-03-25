import OtherLoginOption from "../components/OtherLoginOption";
import { Rating } from "react-simple-star-rating";
import InputField from "../components/InputField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const BecomeAMember = () => {
  const personInputs = [
    { key: 1, label: "First name*" },
    { key: 2, label: "Last name*" },
    { key: 3, label: "Address" },
    { key: 4, label: "Email*" },
    { key: 5, label: "Town" },
    { key: 6, label: "Zip code" },
    { key: 7, label: "Telephone number" },
    // { key: 8, label: "Password*" },
  ];

  const companyInputs = [
    { key: 1, label: "Company name*" },
    { key: 2, label: "Org number*" },
    { key: 3, label: "Address" },
    { key: 4, label: "Email*" },
    { key: 5, label: "Town" },
    { key: 6, label: "Zip code" },
    { key: 7, label: "Telephone number" },
    // { key: 8, label: "Password*" },
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

  /* DATABAS EVENT/ADD/HANTERING */
  const request = ({ endpoint, method, data }) => {
    fetch(endpoint, {
      body: JSON.stringify(data),
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const addUser = (data) => {
    request({
      endpoint: "http://localhost:6001/users",
      method: "POST",
      data,
    });
  };

  const addCompany = (data) => {
    request({
      endpoint: "http://localhost:6001/companies",
      method: "POST",
      data,
    });
  };

  const createNewUser = (e) => {

    let tempCompetence = []
    if (e.target.javaComp.checked ===true ) {
      tempCompetence.push('Java')
    } 
    if (e.target.javascriptComp.checked ===true ) {
      tempCompetence.push('Javascript')
    } 
    if (e.target.cComp.checked ===true ) {
      tempCompetence.push('C#')
    } 
    if (e.target.reactComp.checked ===true ) {
      tempCompetence.push('React')
    } 
    if (e.target.pythonComp.checked ===true ) {
      tempCompetence.push('Python')
    } 


    console.log("Creating new user..");
    console.log(e.target.profilepicture.value);
    const newUser = {
      id: uuidv4(),
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      imageUrl: "/img/erik.jpeg",
      CV: "cv-uasdfasdfasdf här",
      phone: e.target.telephonenumber.value,
      address: e.target.address.value,
      zipCode: e.target.zipcode.value,
      town: e.target.town.value,
      password: e.target.password.value,

      links: [
        { github: e.target.linktogithub.value },
        { linkedin: e.target.linktolinkedin.value },
        { otherLinks: e.target.otherlinks.value },
      ],
      otherInfo: e.target.otherinfo.value,
      competence: tempCompetence
    };

     addUser(newUser);
  };

  const createNewCompany = (e) => {
    console.log("Creating new company..");
    const newCompany = {
      id: uuidv4(),
      companyName: e.target.companyname.value,
      orgNum: e.target.orgnumber.value,
      imageUrl: "/img/erik.jpeg",
      phone: e.target.telephonenumber.value,
      address: e.target.address.value,
      zipCode: e.target.zipcode.value,
      town: e.target.town.value,
      password: e.target.password.value,
      links: [
        { github: "https://github.com/" },
        { linkedin: "https://www.linkedin.com/in/erik-sund-25ab87b0/" },
      ],
      otherInfo: e.target.otherinfo.value,
    };

    addCompany(newCompany);
  };

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submittt");


    view === "person-view" ? createNewUser(e) : createNewCompany(e);
    alert("New account created!");
    //window.location.replace("/my-page");
  };

  /* DATABAS EVENT/ADD/HANTERING SLUT */

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
            <div>
              <input
                type="radio"
                id="radio1"
                name="clicker"
                onChange={handleChange}
                value={"person-view"}
                defaultChecked
                style={{ cursor: "pointer" }}
              ></input>
              <label htmlFor="radio1" style={{ cursor: "pointer" }}>
                I am a person (looking for job)
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="radio2"
                name="clicker"
                onChange={handleChange}
                value={"company-view"}
                style={{ cursor: "pointer" }}
              ></input>

              <label htmlFor="radio2" style={{ cursor: "pointer" }}>
                I am a company (looking to hire)
              </label>
            </div>
          </div>

          <div className="info-wrapper">
            <div className="basic-info-div column-div">
              {view === "person-view" ? (
                <>
                                <InputField inpt={personInputs} type="text" />
                <label htmlFor="password">Password*</label>
                <br></br>
                <input type="password" required name="password" placeholder="Enter password*" />
                </>


              ) : (
                <>
                <InputField inpt={companyInputs} type="text" />
                <label htmlFor="password">Password*</label>
                <br></br>
                <input type="password" required name="password" placeholder="Enter password*"/>
                </>
                
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
                <div>
                  <h3>Competences: </h3>
                  {personCompetences.map((inpt) => (
                    <div key={inpt.key}>
                      {" "}
                      <input
                        type="checkbox"
                        id={inpt.key + "CompBox"}
                        style={{ cursor: "pointer" }}
                        name={inpt.label
                          .replace(/\s/g, "")
                          .toLocaleLowerCase()
                          .replace(/[^a-z0-9]/gi, "") + "Comp"}
                      ></input>
                      <label
                        htmlFor={inpt.key + "CompBox"}
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <span> {inpt.label}</span>
                      </label>
                      {/* om vi vill ha 5 sjärnigt rating system
                      <Rating size={18} /> <span> {inpt.label}</span>{" "} 
                      */}
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
              <div>
                <label>Other info:</label>
                <br></br>
                <input
                  className="other-info-field"
                  type="text"
                  placeholder="Type other info here"
                  name="otherinfo"
                ></input>
              </div>
            </div>
          </div>
          <div className="submit-button-div">
            <div>
              <input
                type="checkbox"
                required
                style={{ cursor: "pointer" }}
              ></input>
              <label className="terms-label">
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                >
                  I have read and agrees to the Term of Service agreement
                </a>
              </label>
            </div>

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
