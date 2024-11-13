const ContactForm = () => {
  return (
    <section className="container contactform_container">
      <div className="form_title">
        <h1>
          <span className="title_style">GET</span> IN TOUCH
        </h1>
      </div>
      <form
        className="submit"
        action="https://formsubmit.co/anilgurung1715@gmail.com"
        method="POST"
      >
        <label htmlFor="fname">Full name</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="message">Your Message(optional)</label>
        <input type="text" id="message" name="message" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactForm;
