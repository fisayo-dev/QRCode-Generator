import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";

const Faqs = () => {
  const [openFaqs, setOpenFaqs] = useState([false, false, false, false, false]);

  const toggleFaq = (index) => {
    const updatedFaqs = openFaqs.map((isOpen, i) =>
      i === index ? !isOpen : isOpen
    );
    setOpenFaqs(updatedFaqs);
  };

  const faqs = [
    {
      question: "Who is the developer of Intrix ?",
      answer: "Intrix was developed by Fisayo Obadina.",
    },
    {
      question: "What does Intrix do ?",
      answer: "Intrix helps you create qrcode for any link very fast.",
    },
    {
      question: "Do you need to have an account to get started ?",
      answer:
        "No, intrix has no authentication and available to all users everywhere.",
    },
    {
      question: "Can i download a Qr code ?",
      answer: "Of course. Intrix provided unlimited download per qr code.",
    },
    {
      question: "How many QR codes can I genereate ?",
      answer: "You can generate as many qr codes as you want",
    },
  ];

  return (
    <div className="py-5">
      <div className="app-container">
        <div className="grid gap-7">
          <h2 className="text-center text-3xl">FAQS</h2>
          <div className="grid gap-5 mx-auto md:w-3/4 lg:3/5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="grid gap-2  p-4 bg-slate-800 rounded-lg "
              >
                <div
                  className={`flex py-2 cursor-pointer ${
                    openFaqs[index] && " border-b-2 border-slate-500"
                  } gap-5 items-center`}
                  onClick={() => toggleFaq(index)}
                >
                  <p className="w-full">{faq.question}</p>
                  <div className="cursor-pointer">
                    <FaCaretDown />
                  </div>
                </div>
                {openFaqs[index] && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
