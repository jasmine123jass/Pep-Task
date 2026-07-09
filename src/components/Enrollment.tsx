import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Enrollment.css";

function Enrollment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    year: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Enrollment Successful!");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      year: "",
    });
  };

  return (
    <div className="enrollment-container">
      <Link to="/">⬅ Back to Home</Link>

      <h1>SummerPep Enrollment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        <button type="submit">
          Submit Enrollment
        </button>
      </form>
    </div>
  );
}

export default Enrollment;