

const AddAuctionPage = () => {
  return (
    <div className="add-auction-page">
        <div className="add-auction-container">
            <form className="add-auction-form">
                <div className="form-left-side">
                    <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"  className="add-auction-image" alt=""></img>
                    <form className="competence-container">
                        <div className="competence">
                            <label for="java"> Java</label>
                            <input type="checkbox" id="competence-button" name="java"></input>
                        </div>
                        <div className="competence">
                            <label for="python"> Python</label>
                            <input type="checkbox" id="competence-button" name="python"></input>
                        </div>
                        <div className="competence">
                            <label for="c#"> C#</label>
                            <input type="checkbox" id="competence-button" name="c#"></input>
                        </div>
                        <div className="competence">
                            <label for="javascript"> Javascript</label>
                            <input type="checkbox" id="competence-button" name="javascript"></input>
                        </div>
                        <div className="competence">
                            <label for="html-css"> HTML/CSS</label>
                            <input type="checkbox" id="competence-button" name="html-css"></input>
                        </div>
                    </form>
                </div>
                <div className="form-mid-side">
                    <div className="add-input-container">
                        <label>Headline:</label>
                        <input type="headline"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Start price:</label>
                        <input type="price"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Start date:</label>
                        <input type="date"></input>
                    </div>
                    <div className="add-input-container">
                        <label>Git:</label>
                        <input type="url"></input>
                    </div>
                    <div className="add-upload-container">
                        <label for="upload-cv">Upload CV:</label>
                        <input type="file" id="upload-cv" name="upload-cv" accept="image/png, image/jpeg"></input>
                    </div>
                    <div className="comment-container">
                        <textarea className="comment" placeholder="Dennis Hasselnöt"></textarea>
                    </div>
                </div>
                <div className="form-right-side">
                    <div className="add-input-container">
                        <label>Hashtags:</label>
                        <input type="hashtags"></input>
                    </div>
                    <div className="add-input-container">
                        <label>End price:</label>
                        <input></input>
                    </div>
                    <div className="add-input-container">
                        <label>End date:</label>
                        <input type="date"></input>
                    </div>
                    <div className="add-input-container">
                        <label>LinkedIn:</label>
                        <input type="url"></input>
                    </div>
                    <div className="add-upload-container">
                        <label for="upload-other">Upload:</label>
                        <input type="file" id="upload-other" name="upload-other" accept="image/png, image/jpeg"></input>
                    </div>
                    <div className="add-button-container">
                        <button id="add-auction-button">Too late to apologize</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddAuctionPage;
