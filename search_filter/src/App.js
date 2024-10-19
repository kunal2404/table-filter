import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Container>
        {/* Search Input */}
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search by first name, last name, or phone'
            />
          </InputGroup>
        </Form>

        {/* Table */}
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                // Convert all search fields to lowercase and check
                const searchLower = search.toLowerCase();
                return (
                  searchLower === '' || 
                  item.first_name.toLowerCase().includes(searchLower) ||
                  item.last_name.toLowerCase().includes(searchLower) ||
                  item.phone.toLowerCase().includes(searchLower)
                );
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
