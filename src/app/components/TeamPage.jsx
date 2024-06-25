"use client";

import React, { useEffect, useState } from "react";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data.results.slice(0, 6))); // Limit to 3 members
  }, []);

  return (
    <section className="text-black" id="teams">
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Drivers</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  src={member.picture.large}
                  alt={member.name.first}
                />
                <h2 className="text-xl font-semibold text-center">
                  {member.name.first} {member.name.last}
                </h2>
                <p className="text-gray-600 text-center">{member.email}</p>
                <p className="text-gray-600 text-center">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
