import { useState } from "react";
import FormInput from "./FormInput";
import styles from "./Contact.module.css";

function Contact() {
  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({}); // validation errors
  const [submitted, setSubmitted] = useState(false);

  // Update state for each input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Basic form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // submit form to Formspree
    e.target.submit();
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Me</h2>

      {submitted && <p style={{ color: "green" }}>Thank you! Your message has been sent.</p>}

      <form action="https://formspree.io/f/xdaweakp"
            method="POST"
            onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
        <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        />
        </div>
        <div className={styles.formGroup}>
        <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        />
        </div>
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;