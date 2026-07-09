import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FeedbackForm.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Thank you for your feedback!");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      rating: "5",
      feedback: "",
    });
  };

  return (
    <div className="feedback-container">

      <Link to="/">⬅ Back to Home</Link>

      <h1>SummerPep Feedback Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Participant Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Very Good</option>
          <option value="3">⭐⭐⭐ Good</option>
          <option value="2">⭐⭐ Fair</option>
          <option value="1">⭐ Poor</option>
        </select>

        <textarea
          name="feedback"
          placeholder="Write your feedback..."
          rows={6}
          value={formData.feedback}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

    </div>
  );
}

export default FeedbackForm;