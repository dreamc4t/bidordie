import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import FAQfunctions from "../components/FAQfunctions";
import PopUp from "../components/PopUp";
import FaqMessageService from "../services/FaqMessageService";

function Faq () {

  const [isOpen, setIsOpen] = useState(false);
  const [allmessages, setAllmessages] = useState([]);
  const [messages, setMessages] = useState({
    nameOfSender: "",
    phone: "",
    emailOfSender: "",
    message: ""
  });
  
  // Original funktionerna
  useEffect(() => {
    getAllMessages();
  }, [])

  const getAllMessages = () => {
    FaqMessageService.getAllMessages().then((response) => {
      setAllmessages(response.data);
      console.log(response.data);
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    console.log(name, value)
    setMessages({...messages, [name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messages)
    if(messages.nameOfSender && messages.phone && messages.emailOfSender && messages.message){
      const newMessage = messages
      console.log(newMessage)
      FaqMessageService.createMessage(newMessage)
        .then(() => getAllMessages())
      setMessages({
        nameOfSender: "",
        phone: "",
        emailOfSender: "",
        message: ""
    })
    }
    togglePopup();
    alert("Message Sent!")
  }

  // C#/.Net Microservice
  /* useEffect(() => {
    GetAllMessages();
  }, [])

  const GetAllMessages = () => {
    FaqMessageService.GetAllMessages().then((response) => {
      setAllmessages(response.data);
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setMessages({...messages, [name]: value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(messages.nameOfSender && messages.phone && messages.emailOfSender && messages.message){
      const newMessage = messages
      FaqMessageService.AddMessage(newMessage)
        .then(() => GetAllMessages())
      setMessages({
        nameOfSender: "",
        phone: "",
        emailOfSender: "",
        message: ""
    })
    }
    togglePopup();
    alert("Message Sent!")
  } */

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const [faqs, setfaqs] = useState([
    {
      question: 'Is this site reliable?',
      answer: 'Yes, we are famous for bringing people out into businesses and got a lot of great reviews from the people whom have used our site',
      open: false
    },
    {
      question: 'Is there an option to Buy Now?',
      answer: 'Thats up to the individual seller if they want to give you that option or not',
      open: false
    },
    {
      question: 'What if Im not happy with my hire?',
      answer: 'Fire them and give them a bad review',
      open: false
    },
    {
      question: 'Can I regret a bid?',
      answer: 'Bids are bindning, so you cant undo them',
      open: false
    },
    {
      question: 'Are there any proof of competence?',
      answer: 'The sellers shall provide proper information on their seller page and on their auctions',
      open: false
    },
    {
      question: 'Is this site free to use?',
      answer: 'Currently its free to use as we get paid through advertisers',
      open: false
    },
    {
      question: 'What if Im not happy with my employeer?',
      answer: 'Thats between you and your employeer and the contract you both sign',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="FAQ">
        <h2>FAQ</h2>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQfunctions faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <pb>If you have any more questions, feel free to contact us on the link below!</pb>
        <br></br>
        <input 
          type="button"
          value="Contact Us"
          onClick={togglePopup}
        />
        {isOpen && <PopUp
          content={<>
            <b>Put in your contact info and your question</b>
            <div>
              <form>
                <input onChange={handleChange} name="nameOfSender" type="text" value={messages.nameOfSender} placeholder="Firstname and Lastname"/>
                <br></br>
                <input onChange={handleChange} name="phone" type="text" value={messages.phone} placeholder="Telephone number"/>
                <br></br>
                <input onChange={handleChange} name="emailOfSender" type="text" value={messages.emailOfSender} placeholder="Email"/>
                <br></br>
                <input onChange={handleChange} name="message" type="text" value={messages.message} placeholder="Write your question here!"/>
                <br></br>
                <button type="submit" onClick={handleSubmit} ><FaEnvelope /> Submit</button>
              </form>
            </div>
          </>}
          handleClose={togglePopup}
        />}
        <br></br>
        <pb>Newly submitted questions</pb>
            {allmessages.map((messages) => (
              <div className="mess" key={messages.id}>
                <p>{messages.nameOfSender}</p>
                <p>{messages.phone}</p>
                <p>{messages.emailOfSender}</p>
                <p>{messages.message}</p>
              </div>
            ))}
        <Link to="/">
          <FaArrowLeft size={30} />
        </Link>
    </div>
  )
}

export default Faq;
