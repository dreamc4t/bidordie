import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import FAQfunctions from "../components/FAQfunctions";
import PopUp from "../components/PopUp";
import FaqMessageService from "../services/FaqMessageService";

function Faq () {

  const [isOpen, setIsOpen] = useState(false);
  const [allmessages, setAllmessages] = useState([]);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    getAllMessages();
  }, [])

  const getAllMessages = () => {
    FaqMessageService.getAllMessages().then((response) => {
      setAllmessages(response.data);
      console.log(response.data);
    })
  }

  useEffect(() => {
    createMessage();
  }, [])

  const createMessage = () => {
    FaqMessageService.createMessage().then((response) => {
      setMessages(response.data);
      console.log(response.data);
    })
  }
 
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
        <p>If you have any more questions, feel free to contact us on the link below!</p>
        <br></br>
        <input 
          type="button"
          value="Contact Us"
          onClick={togglePopup}
        />
        {isOpen && <PopUp
          content={<>
            <b>Put in your contact info and your question</b>
            <p>
              <input type="text" placeholder="Firstname and Lastname"/>
              <br></br>
              <input type="text" placeholder="Telephone number"/>
              <br></br>
              <input type="text" placeholder="Email"/>
              <br></br>
              <input type="text" placeholder="Write your question here!"/>
              <br></br>
              <button onClick={togglePopup}><FaEnvelope /> Submit</button>
            </p>
          </>}
          handleClose={togglePopup}
        />}
        <br></br>
        <p>Newly submitted questions</p>
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

{/* <button className="button-element"><FaEnvelope /> Contact Us</button> */}