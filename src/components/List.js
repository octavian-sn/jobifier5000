import React, { useState, useEffect } from 'react';

function List({ applications, deleteApplication }) {
  const list = () =>
    applications.map((application) => {
      return (
        <tr key={application.id}>
          <td
            onClick={() => deleteApplication(application.id)}
            className="index"
          >
            {applications.indexOf(application) + 1}
          </td>
          <td>{application.employer}</td>
          <td>{application.title}</td>
          <td>{application.location}</td>
          <td>{application.salary}</td>
          <td>{application.date}</td>
          <td>
            <a href={application.link}>Link</a>
          </td>
        </tr>
      );
    });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Employer</th>
          <th>Title</th>
          <th>Location</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>{list()}</tbody>
    </table>
  );
}

export default List;
