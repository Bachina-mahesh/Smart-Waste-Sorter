import React from "react";

function Team() {
  const team = [
  {
    name: "Charan Teja",
    role: "Full Stack Developer",
    photo: "/images/charan_photo.jpg",
    roll_no: "2203031240205",
    Ph_NO: "+91 6303 640 379"
  },
  {
    name: "Mahesh Babu",
    role: "AI/ML Engineer",
    photo: "/images/mahesh.jpg",
    roll_no: "2203031240094",
    Ph_NO: "+91 6302 322 053"
  },
  {
    name: "Manogna",
    role: "UI/UX Designer",
    photo: "/images/manogna.jpg",
    roll_no: "2203031240193",
    Ph_NO: "+91 80744 02063"
  },
  {
    name: "Bhargavi",
    role: "Data Scientist",
    photo: "/images/bhargavi.jpg",
    roll_no: "2203031240161",
    Ph_NO: "+91 6300 315051"
  }
];
;

  return (
    <div className="page-container">
      <h1 className="page-title">👨‍💻 Meet Our Team</h1>
      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <h3>{member.roll_no}</h3>
            <h3>{member.Ph_NO}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
