import React from 'react';
import Select from 'react-select';
import './App.css';

//Define an array of database options with the value and label properties
const options = [
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'SQL', label: 'SQL' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MariaDB', label: 'MariaDB' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'Oracle', label: 'Oracle' },
  { value: 'Prisma', label: 'Prisma' },
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'DynamoDB', label: 'DynamoDB' },
];

// Define a React Component that renders a heading and a dropdown
// list of databases
function App() {
  return (
    <div className="App">
      <h1>
        Welcome to SQL-Buddy. A tool for helping you query a multitude
        of databases using the power of AI.
      </h1>
      <div className="app-inner">
        <Select
          //set the placeholder text for the dropdown list
          placeholder="Select a database..."
          //set the options for the dropdown list
          options={options}
          //set the className for the dropdown list
          className="react-select"
        />

        <textarea
          rows={10}
          className="query-input"
          placeholder="Enter your query here..."
        />
      </div>
    </div>
  );
}
