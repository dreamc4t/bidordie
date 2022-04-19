import OtherLoginOption from "../components/OtherLoginOption";
import InputField from "../components/InputField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import UserService from "../UserService";

const API_URL_USERS = "http://localhost:8080/api/users";
const API_URL_COMPANIES = "http://localhost:8080/api/companies"

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
    { key: 3, label: "Other links" }
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

  const createNewUser = (e) => {

      let tempCompetence = [];
      if (e.target.javaComp.checked === true) {
        tempCompetence.push("Java");
      }
      if (e.target.javascriptComp.checked === true) {
        tempCompetence.push("Javascript");
      }
      if (e.target.cComp.checked === true) {
        tempCompetence.push("C#");
      }
      if (e.target.reactComp.checked === true) {
        tempCompetence.push("React");
      }
      if (e.target.pythonComp.checked === true) {
        tempCompetence.push("Python");
      } 
  
  
      console.log("Creating new user..");
      const newUser = {
        id: uuidv4(),
        firstName: e.target.firstname.value,
        lastName: e.target.lastname.value,
        email: e.target.email.value,
        imageUrl: "/img/erik.jpeg",
        CV: "cv-uasdfasdfasdf här",
        phone: e.target.telephonenumber.value,
        address: e.target.address.value,
        zipCode: e.target.zipcode.value,
        town: e.target.town.value,
        password: e.target.password.value,
        githubLink: e.target.linktogithub.value,
        linkedinLink: e.target.linktolinkedin.value,
        otherLinks: [e.target.otherlinks.value],
        otherInfo: e.target.otherinfo.value,
        biography: e.target.biography.value,
        competence: tempCompetence,
      };
  
       addUser(newUser);
    };


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
      endpoint:`${API_URL_USERS}/new`,
      method: "POST",
      data,
    });
  };

  const addCompany = (data) => {
    request({
      endpoint: `${API_URL_COMPANIES}/new`,
      method: "POST",
      data,
    });
  };

 

  const createNewCompany = (e) => {
    console.log("Creating new company..");
    const newCompany = {
      id: uuidv4(),
      companyName: e.target.companyname.value,
      orgNr: e.target.orgnumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      imageUrl: "/img/erik.jpeg",
      phone: e.target.telephonenumber.value,
      address: e.target.address.value,
      zipCode: e.target.zipcode.value,
      town: e.target.town.value,
      webpage: e.target.linktowebpage.value,
      otherLinks: [e.target.otherlinks.value],
      companyInfo: e.target.companyinfo.value
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
              
                {view === "person-view" ? 
                <div>
                <label>Other info:</label>  
                <br></br>
                <input
                  className="other-info-field"
                  type="text"
                  placeholder="Type other info here"
                  name="otherinfo"
                ></input>
                 <input
                  className="other-info-field"
                  type="text"
                  placeholder="Biography "
                  name="biography"
                ></input>
                </div>
                :
                <div>

                <label>Company info:</label> 
                <br></br>
                <input
                  className="other-info-field"
                  type="text"
                  placeholder="Type company info here"
                  name="companyinfo"
                ></input>
                </div>
                }
         
              
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
