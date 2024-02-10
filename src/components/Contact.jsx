import React, {  useState } from "react";
import { contact } from "../data";
import emailjs from "@emailjs/browser";
// import axios from "axios";

const Contact = () => {
  // const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, messages);

    var data = {
      service_id: "portfolio_123",
      template_id: "portfolio_template",
      user_id: "UkwKpRUGAMOFTAZfF",
    };

    const template_params = {
      from_name: name,
      to_name: "Ashish Soni",
      from_email: email,
      from_subject: subject,
      message:messages
    };

    emailjs
      .send(
        data.service_id,
        data.template_id,
        template_params,
        data.user_id
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("mail sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("faild");
        }
      );
  };

  return (
    <section id="contact" className=" section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Please fill out the form below to discuss any work opportunities.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col  items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div key={index} className="flex flex-col lg:flex-row gap-x-4">
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className=" text-accent mb-1 font-normal">
                      <p>{description}</p>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* form */}
          <form
            // ref={form}
            onSubmit={handleSubmit}
            className=" space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                type="text"
                className="input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Your message"
              className="textarea"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-lg bg-accent hover:bg-accent-hover rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
