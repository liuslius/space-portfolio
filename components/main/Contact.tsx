import React from "react";
import ContactForm from "../sub/ContactForm";

const Contact = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center">
      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-cl border border-white">
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]/">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
