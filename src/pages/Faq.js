import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import FAQfunctions from "../components/FAQfunctions";

function Faq () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Mjau?',
      answer: 'Voff',
      open: false
    },
    {
      question: 'Moo?',
      answer: 'Voff',
      open: false
    },
    {
      question: 'Eeaah?',
      answer: 'Voff',
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
        <a href="https://www.google.com" target="_blank">
          <button className="button-element"><FaEnvelope /> Contact Us</button>
        </a>
        <Link to="/">
            <FaArrowLeft size={30} />
        </Link>
    </div>
  )
}

export default Faq;