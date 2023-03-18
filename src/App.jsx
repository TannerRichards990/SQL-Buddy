import React, { useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';
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
  const [database, setDatabase] = useState('');
  const [query, setQuery] = useState('');
  const getDataBase = (selected) => {
    console.log(selected.value);
  };

  const getQuery = (e) => {
    console.log(e.target.value);
  };

  const generateQuery = () => {
    let finalQuery = '';

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
          //Gets the selected database and sets it to the state
          onChange={getDataBase}
        />

        <textarea
          rows={10}
          className="query-input"
          onChange={getQuery}
          placeholder="Enter your query here..."
        />
      </div>
    </div>
  );
}
