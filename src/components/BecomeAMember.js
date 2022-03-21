const BecomeAMember = () => {
  return (
    <form action="">
      <div className="become-a-member-div">
        <h1>Create account</h1>
        <label htmlFor="firstName">First name: </label>
        <input type="text" placeholder="enter first name" />
        <label htmlFor="">Last name</label>
        <input type="text" placeholder="enter last name" />
        <label htmlFor="">Address</label>
        <input type="text" placeholder="enter address" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="enter email" />
        <label htmlFor="">Town</label>
        <input type="text" placeholder="enter town" />
        <label htmlFor="">Zip code: </label>
        <input type="text" placeholder="enter zip code" />
        <label htmlFor="">Telephone number: </label>
        <input type="text" placeholder="enter telephone number" />
        <label htmlFor="">Password: </label>
        <input type="text" placeholder="enter password" />
        <label htmlFor="">Enter password again: </label>
        <input type="text" placeholder="enter password " />
        <p> ------ </p>
        <label htmlFor="">CV: </label>
        <input type="file" />
        <label htmlFor="">Profile picture: </label>
        <input type="file" />
        <p> ------ </p>
        <form className="skills-I-have-form">
          <h3>Skills I master:</h3>
          <input type="checkbox" />
          <label>Python</label>
          <input type="checkbox" />
          <label>Java</label>
          <input type="checkbox" />
          <label>Javascript</label>
          <input type="checkbox" />
          <label>REACT</label>
          <br></br>
          <label htmlFor="">Other skills: </label>
          <input type="text" placeholder="enter link" />
        </form>
        <p> ------ </p>
        <label htmlFor="">Link to github: </label>
        <input type="text" placeholder="enter link" />
        <label htmlFor="">Link to LinkedIn: </label>
        <input type="text" placeholder="enter link" />
        <label htmlFor="">Other links: </label>
        <input type="text" placeholder="enter link" />
      </div>
    </form>
  );
};

export default BecomeAMember;
