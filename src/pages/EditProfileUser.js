
import InputField from "../components/InputField";
import UserService from "../services/UserService";

import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../App";
import {companyInputs, companyLinks} from "../constants/companyConstants";
import { API_URL_USERS } from "../constants/urlConstants"; 
import { useNavigate } from "react-router-dom";




const EditProfileUser = () => {

  const loginContext = useContext(LoginContext)

  const [user, setUser] = useState()


  useEffect(() => {
    UserService.getUserById(loginContext.idOfLoggedInUser)
      .then(response => {
        setUser(response.data)
        console.log(response)
      })
      .catch(response => {
        console.error(response)
      })
  }, [])

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
      ];

  const personLinks = [
    { key: 1, label: "Link to github" },
    { key: 2, label: "Link to linkedin" },
    { key: 3, label: "Other link" },
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
      endpoint: `${API_URL_USERS}/editUserById/${loginContext.idOfLoggedInUser}`,
      mode: "no-cors",
      method: "PUT",
      data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(e)
  }

  const handleImgChange = (e) => {
    e.preventDefault();
    setImgFile(e.target.files[0]);
  };

  const handleCvChange = (e) => {
    e.preventDefault();
    setCvFile(e.target.files[0]);
  };

  const navigate = useNavigate()

  const deleteUser = () => {
    request({
      endpoint: `${API_URL_USERS}/deleteUserById/${loginContext.idOfLoggedInUser}`,
      mode: "no-cors",
      method: "DELETE"
    })
    console.log("User deleted!");
    alert("Your account has been deleted.");
    navigate('/',true)
  }


  return (

    user ? 
    <div id="become-a-member-div">
      <div>
        Edit your fucking info
        {loginContext.idOfLoggedInUser}
        <form onSubmit={handleSubmit}>
        <div className="info-wrapper">
            <div className="basic-info-div column-div">
              {user.roles[0].name === "ROLE_USER" ? (
                <>
                  <InputField inpt={personInputs} type="text"/>
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
                  <InputField inpt={companyInputs} type="text"/>
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
        </div>
        <div className="links-attached-div column-div">
                <>
                  {/* <InputField inpt={personAttachedItems} type="file" /> */}
                  <label htmlFor="profilepicture">Profile picture</label>
                  <input
                    type="file"
                    name="profilepicture"
                    onChange={handleImgChange}
                  ></input>
                  <br></br>
                  <label htmlFor="cv">CV</label>
                  <input
                    type="file"
                    name="cv"
                    onChange={handleCvChange}
                  ></input>
                </>
                <InputField inpt={personLinks} type="text" />
        </div>
        <div className="competences-div column-div">
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
                    </div>
                  ))}
                </div>
                <div>
                  <label>Description:</label>
                  <br></br>
                  <input
                    className="other-info-field"
                    type="text"
                    placeholder="Short description"
                    name="otherinfo"
                  ></input>
                  <input
                    className="other-info-field"
                    type="text"
                    placeholder="Biography "
                    name="biography"
                  ></input>
                </div>
        </div>
        
        <button type="submit" className="submit-button">
          Update information
        </button>
        </form>
        
        
        <button onClick={deleteUser} type="submit" className="submit-button">
          Delete user
        </button>
        
      </div>               
    </div>

    :

    <div>
      Loading edit page...
    </div>
  )
}

export default EditProfileUser