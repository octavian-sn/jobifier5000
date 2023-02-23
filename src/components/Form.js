import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const getDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = Date().split(' ')[1];
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

function Form({ updateApplications, toggleLetter }) {
  const [data, setData] = useState({
    employer: '',
    title: '',
    location: '',
    salary: '',
    date: getDate(),
    link: '',
    id: uniqid(),
  });

  const updateData = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateApplications(data);
    setData({
      employer: '',
      title: '',
      location: '',
      salary: '',
      date: getDate(),
      link: '',
      id: uniqid(),
    });
    toggleLetter();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={updateData}
        name="employer"
        type="text"
        value={data.employer}
        placeholder="Employer"
      ></input>
      <input
        onChange={updateData}
        name="title"
        type="text"
        value={data.title}
        placeholder="Title"
      ></input>
      <input
        onChange={updateData}
        name="location"
        type="text"
        value={data.location}
        placeholder="Location"
      ></input>
      <input
        onChange={updateData}
        name="salary"
        type="text"
        value={data.salary}
        placeholder="Salary"
      ></input>
      <input
        onChange={updateData}
        name="link"
        type="url"
        value={data.link}
        placeholder="Link"
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
