"use client";
import { useState } from "react";
import styles from "./contact.module.css";

function Contact_us() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // prettier-ignore
    setFormData(
      {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <p className={styles.post_title}>
          Welcome to Delly&apos;s Blog! We&apos;re here to support you on your
          health journey. If you have questions, need assistance, or just want
          to share your story, feel free to reach out. Your well-being is our
          top priority, and your privacy is important to us we keep all your
          information confidential.
        </p>
      </div>

      <div className={styles.Form_container}>
        <form className={styles.form}>
          <input
            placeholder="Fullname"
            type="text"
            value={formData.fullname}
            name="fullname"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            placeholder="Phone Number"
            type="text"
            value={formData.phone}
            name="phone"
            optional="true"
            onChange={handleChange}
          />
          <textarea
            rows={4}
            cols={3}
            placeholder="Message...."
            className={styles.textarea}
            value={formData.message}
            name="message"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className={styles.form_button}
            onClick={handleSubmit}
          >
            Contact us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact_us;
