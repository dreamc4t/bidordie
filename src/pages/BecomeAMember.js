import InputField from "../components/InputField";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


import {personCompetences, personInputs,personLinks} from "../constants/userConstants";
import {companyInputs, companyLinks} from "../constants/companyConstants";
import { API_URL_COMPANIES, API_URL_FILES, API_URL_USERS } from "../constants/urlConstants"; 



const BecomeAMember = () => {
  const [view, setView] = useState("person-view");
  const [cvFile, setCvFile] = useState("no file");
  const [imgFile, setImgFile] = useState("no file");


  const request = ({ endpoint, method, data }) => {
    fetch(endpoint, {
      body: JSON.stringify(data),
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createNewUser = (e) => {
    e.preventDefault();

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

    let cvUrl = "noCvUploaded";
    if (e.target.cv.files[0]) {
      cvUrl = "/uploadedFiles/" + e.target.cv.files[0].name;
    }

    let imgUrl = "noImgUploaded";
    if (e.target.profilepicture.files[0]) {
      imgUrl = "/uploadedFiles/" + e.target.profilepicture.files[0].name;
    }

    console.log("Creating new user..");
    const newUser = {
      id: uuidv4(),
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      imageUrl: imgUrl,
      cvUrl: cvUrl,
      phone: e.target.telephonenumber.value,
      address: e.target.address.value,
      zipCode: e.target.zipcode.value,
      town: e.target.town.value,
      password: e.target.password.value,
      githubLink: e.target.linktogithub.value,
      linkedinLink: e.target.linktolinkedin.value,
      otherLink: [e.target.otherlink.value],
      otherInfo: e.target.otherinfo.value,
      biography: e.target.biography.value,
      competence: tempCompetence,
     // roles: ["ROLE_USER"]

    };

  
    addUser(newUser);
  };

  const createNewCompany = (e) => {
    e.preventDefault();
    console.log("Creating new company..");

    let imgUrl = "noImgUploaded";
    if (e.target.profilepicture.files[0]) {
      imgUrl = "/uploadedFiles/" + e.target.profilepicture.files[0].name;
    }
    const newCompany = {
      id: uuidv4(),
      companyName: e.target.companyname.value,
      orgNr: e.target.orgnumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
      imageUrl: imgUrl,
      phone: e.target.telephonenumber.value,
      address: e.target.address.value,
      zipCode: e.target.zipcode.value,
      town: e.target.town.value,
      webpage: e.target.linktowebpage.value,
      otherLink: [e.target.otherlink.value],
      companyInfo: e.target.companyinfo.value,
      //roles: ["ROLE_COMPANY"]
    };

    addCompany(newCompany);
  };


  const addUser = (data) => {
    request({
      endpoint: `${API_URL_USERS}/signup`,
      mode: "no-cors",
      method: "POST",
      data,
    });

    if (imgFile != "no file") {
      let imgFormData = new FormData();
      imgFormData.append("file", imgFile);
      axios.post(`${API_URL_FILES}/new`, imgFormData, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    } else {
      console.log("No image file uploaded")
    }


    if (cvFile != "no file") {
      let cvFormData = new FormData();
      cvFormData.append("file", cvFile);
      axios.post(`${API_URL_FILES}/new`, cvFormData, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
    else {
      console.log("No CV uploaded")
    }
    
  };

  const addCompany = (data) => {
    request({
      endpoint: `${API_URL_COMPANIES}/new`,
      mode: "no-cors",
      method: "POST",
      data,
    });

    if (imgFile != "no file") {
      let imgFormData = new FormData();
      imgFormData.append("file", imgFile);
      axios.post(`${API_URL_FILES}/new`, imgFormData, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
    
    } else {
      console.log("No image file uploaded")
    }

  };

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const handleImgChange = (e) => {
    e.preventDefault();
    setImgFile(e.target.files[0]);

  };

  const handleCvChange = (e) => {
    e.preventDefault();
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    view === "person-view" ? 
    createNewUser(e)
    : 
    createNewCompany(e);
    alert("New account created!");
    // window.location.replace("/my-page");
  };

  /* DATABAS EVENT/ADD/HANTERING SLUT */

  const showAllFiles = () => {
    console.log("HEJ")

    axios.get(`${API_URL_FILES}/all`).then(resp => {

    console.log(resp.data);
});
  }




  return (
    <div id="become-a-member-div">
      <form onSubmit={handleSubmit}>
        <div className="become-a-member-background">
          <h1>Create account</h1>
          <button onClick={showAllFiles}>TEST KNAPP</button>
          <div className="create-acc-with-other">
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
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Enter password*"
                  />
                </>
              ) : (
                <>
                  <InputField inpt={companyInputs} type="text" />
                  <label htmlFor="password">Password*</label>
                  <br></br>
                  <input
                    type="password"
                    required
                    name="password"
                    placeholder="Enter password*"
                  />
                </>
              )}
            </div>

            <div className="links-attached-div column-div">
              {view === "person-view" ? (
                <>
                  {/* <InputField inpt={personAttachedItems} type="file" /> */}
                  <label htmlFor="profilepicture">Profile picture</label>
                  <input
                    type="file"
                    name="profilepicture"
                    accept="image/*"
                    onChange={handleImgChange}
                  ></input>
                  <label htmlFor="cv">CV</label>
                  <input
                    type="file"
                    name="cv"
                    accept=".doc, .docx,.ppt, .pptx,.txt,.pdf, .pages"
                    onChange={handleCvChange}
                  ></input>
                </>
              ) : (
                <>
                  <label htmlFor="profilepicture">Company logo</label>
                  <input
                    type="file"
                    name="profilepicture"
                    accept="image/*"
                    onChange={handleImgChange}
                  ></input>
                </>

                // <InputField inpt={companypAttachedItems} type="file" />
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
                        name={
                          inpt.label
                            .replace(/\s/g, "")
                            .toLocaleLowerCase()
                            .replace(/[^a-z0-9]/gi, "") + "Comp"
                        }
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

              {view === "person-view" ? (
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
              ) : (
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
              )}
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
