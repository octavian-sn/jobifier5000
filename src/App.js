import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem('applications')) || []
  );

  const updateApplications = (newApp) => {
    setApplications((prevApplications) => {
      return [newApp, ...prevApplications];
    });
    // localStorage.setItem('applications', JSON.stringify(applications));
  };

  return (
    <div>
      <Form updateApplications={updateApplications} />
      <List applications={applications} />
    </div>
  );
}

export default App;
