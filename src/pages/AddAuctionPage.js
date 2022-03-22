

const AddAuctionPage = () => {
  return (
    <div className="add-auction-page">
        <div className="add-auction-container">
            <form className="add-auction-form">
                <div className="form-left-side">
                    <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"  className="add-auction-image" alt=""></img>
                    <select className="competence-container">
                        <option value="">Competence</option>
                        <option value="java">Java</option>
                        <option value="c#">C#</option>
                        <option value="python">Python</option>
                        <option value="react">React</option>
                    </select>
                </div>
                <div className="form-mid-side">
                    <div className="add-input-container">
                        <label>Start price:</label>
                        <input></input>
                    </div>
                    <div className="add-input-container">
                        <label>Start date:</label>
                        <input></input>
                    </div>
                    <div className="add-input-container">
                        <label>Git:</label>
                        <input></input>
                    </div>
                    <div className="add-upload-container">
                        <label for="upload-cv">Upload CV:</label>
                        <input type="file" id="upload-cv" name="upload-cv" accept="image/png, image/jpeg"></input>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input></input>
                    </div>
                    <div className="add-input-container">
                        <label>End date:</label>
                        <input></input>
                    </div>
                    <div className="add-input-container">
                        <label>LinkedIn:</label>
                        <input></input>
                    </div>
                    <div className="add-upload-container">
                        <label for="upload-other">Upload picture:</label>
                        <input type="file" id="upload-other" name="upload-other" accept="image/png, image/jpeg"></input>
                    </div>
                    <div className="add-input-container" id="comment-window">
                        <input className="add-comments" placeholder="Comments.."></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddAuctionPage;
