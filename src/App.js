import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem('applications')) || []
  );

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const updateApplications = (newApp) => {
    setApplications((prevApplications) => {
      return [newApp, ...prevApplications];
    });
  };

  return (
    <div>
      <Form updateApplications={updateApplications} />
      <List applications={applications} />
    </div>
  );
}

export default App;
