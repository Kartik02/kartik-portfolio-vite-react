import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopup({ show: true, message: "✅ Message sent successfully!", type: "success" });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setPopup({ show: true, message: "❌ Failed to send message. Please try again.", type: "error" });
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="from_name" hidden>Name</label>
          <input type="text" name="from_name" id="from_name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="from_email" hidden>Email</label>
          <input type="email" name="from_email" id="from_email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>

      {/* Popup Modal */}
      {popup.show && (
        <div className={`${styles.popup} ${popup.type === "success" ? styles.success : styles.error}`}>
          <p>{popup.message}</p>
          <button onClick={() => setPopup({ show: false, message: "", type: "" })}>OK</button>
        </div>
      )}
    </section>
  );
}

export default Contact;
