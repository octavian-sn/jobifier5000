import React, { useState, useEffect } from 'react';
import List from './components/List';
import uniqid from 'uniqid';

function App() {
  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem('applications')) || [
      {
        employer: 'BearingPoint',
        title: 'Frontend Developer - Internship',
        location: 'Sibiu',
        salary: '-',
        date: '22-Feb-2023',
        id: uniqid(),
      },
      {
        employer: 'BearingPoint',
        title: 'Frontend Developer - Internship',
        location: 'Sibiu',
        salary: '-',
        date: '22-Feb-2023',
        id: uniqid(),
      },
    ]
  );

  const updateApplications = (newApp) => {
    setApplications((prevApplications) => {
      return [newApp, ...prevApplications];
    });
    // localStorage.setItem('applications', JSON.stringify(applications))
  };

  return (
    <div>
      <List applications={applications} />
    </div>
  );
}

export default App;
