import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1> SummerPep Camp</h1>
        <p>Manage enrollments, attendance and feedback easily.</p>

        <div className="card-container">
          <Card
            title="Enrollment"
            description="Register participants for the SummerPep Camp."
            buttonText="Open"
            onClick={() => navigate("/enrollment")}
          />

          <Card
            title="Attendance"
            description="Mark attendance and view live weather."
            buttonText="Open"
            onClick={() => navigate("/attendance")}
          />

          <Card
            title="Feedback"
            description="Collect feedback from all participants."
            buttonText="Open"
            onClick={() => navigate("/feedback")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;