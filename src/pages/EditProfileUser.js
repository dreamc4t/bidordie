import { useState } from "react";
import InputField from "../components/InputField";
import { LoginContext } from "../App";



const API_URL_USERS = "http://localhost:8080/api/users";
const API_URL_FILES = "http://localhost:8080/api/files";


const EditProfileUser = () => {

    const [view, setView] = useState("person-view");
    const [cvFile, setCvFile] = useState("no file");
    const [imgFile, setImgFile] = useState("no file");

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

  const personLinks = [
    { key: 1, label: "Link to github" },
    { key: 2, label: "Link to linkedin" },
    { key: 3, label: "Other link" },
  ];

  const personAttachedItems = [
    { key: 1, label: "CV" },
    { key: 2, label: "Profile Picture" },
    { key: 3, label: "Other files to attach" },
  ];

  const personCompetences = [
    { key: 1, label: "Java" },
    { key: 2, label: "C#" },
    { key: 3, label: "REACT" },
    { key: 4, label: "Javascript" },
    { key: 5, label: "Python" },
  ];

  const request = ({ endpoint, method, data }) => {
    fetch(endpoint, {
      body: JSON.stringify(data),
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const editUser = (e) => {
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

    console.log("Editing user..");
    const editUser = {
      id: LoginContext.idOfLoggedInUser,
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
    };

    updateUser(editUser);
  };

  const updateUser = (data) => {
    request({
      endpoint: `${API_URL_USERS}/editUserById/${LoginContext.idOfLoggedInUser}`,
      mode: "no-cors",
      method: "PUT",
      data,
    });
  };


  return (
    <div>
        <div className="info-wrapper">
            <div className="basic-info-div column-div">
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
            </div>
        </div>
        
        <button type="submit" className="submit-button">
              Update information
        </button>

    </div>
  )
}

export default EditProfileUser