import { useState, useEffect } from "react";
import background from "../assets/background/library.jpg";

const eventsData = [
  {
    title: "University of Hawaii at Hilo",
    date: "2012-2016",
    description: ["Studied in Communication and Computer Science"],
  },
  {
    title: "Customer Service Representative",
    date: "2016-2019",
    description: ["Alola Moana Shopping Center"],
  },
  {
    title: "Shift Supervisor",
    date: "2018-2022",
    description: ["Tim Ho Wan at Wakiki, Hawaii"],
  },
  {
    title: "App Academy",
    date: "2022-2023",
    description: ["Software Engineer Program"],
  },
  {
    title: "Hackathon Event",
    date: "2023",
    description: ["Priyada Studio's Website"],
  },
  {
    title: "Volunteer Software Engineer",
    date: "2023",
    description: ["Democracy Lab"],
  },
];

const LifePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3);

    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 3s ease-in-out",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    color: "#fff",
    fontFamily: "Kalam",
    fontSize: "1vw",
  };

  const contentStyle = {
    position: "relative",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    marginBottom: "20px",
    width: "calc(28vw - 40px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  return (
    <>
      <div
        style={containerStyle}
      >
        <div>
          <h1 style={{ fontSize: "2vw", fontWeight: "bold", margin:"20px 0px" }}>My Live Event</h1>
        </div>
        {eventsData.map((event, index) => (
          <div key={index} style={contentStyle}>
            <h2>
              {event.title} &nbsp;&nbsp;&nbsp;{event.date}
            </h2>
            {event.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default LifePage;
