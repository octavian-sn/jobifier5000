import React, { useState, useEffect } from 'react';

function List({ applications }) {
  const list = () =>
    applications.map((application) => {
      return (
        <tr key={application.id}>
          <td>{applications.indexOf(application)}</td>
          <td>{application.employer}</td>
          <td>{application.title}</td>
          <td>{application.location}</td>
          <td>{application.salary}</td>
          <td>{application.date}</td>
          <td>{application.link}</td>
        </tr>
      );
    });

  return (
    <table>
      <tr>
        <th></th>
        <th>Employer</th>
        <th>Title</th>
        <th>Location</th>
        <th>Salary</th>
        <th>Date</th>
        <th>Link</th>
      </tr>
      {list()}
    </table>
  );
}

export default List;
