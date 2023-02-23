import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import CoverLetter from './components/CoverLetter';

function App() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem('applications')) || []
  );

  const [letter, setLetter] = useState(false);

  const toggleLetter = () => setLetter((prevLetter) => !prevLetter);

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const deleteApplication = (id) => {
    setApplications((prevApplications) =>
      prevApplications.filter((app) => app.id !== id)
    );
  };

  const updateApplications = (newApp) => {
    setApplications((prevApplications) => {
      return [newApp, ...prevApplications];
    });
  };

  return (
    <div className="app">
      {letter && (
        <CoverLetter
          employer={applications[0].employer}
          title={applications[0].title}
          close={toggleLetter}
        />
      )}
      <Form
        updateApplications={updateApplications}
        toggleLetter={toggleLetter}
      />
      <List applications={applications} deleteApplication={deleteApplication} />
    </div>
  );
}

export default App;
