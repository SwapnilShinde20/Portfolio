import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_9mb4pwh
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_9mb4pwh",
        "template_m7a9wnd",
        {
          name: form.name,
          to_name: "Swapnil",
          from_email: form.email,
          to_email: "shindeswapnil2005@gmail.com",
          message: form.message,
        },
        "EBwpfbKM_mH87FgP9",
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>
      <div className="relative min-h-screeen flex items-center justify-center flex-col">

        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 h-full "
        />
        <div className="contact-container pb-10">
          <h3 className="head-text">Let'Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether your're looking to build a new website, improve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7 "
          >
            <label className="space-y-3" htmlFor="">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3" htmlFor="">
              <span className="field-label">Email</span>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3" htmlFor="">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
