import React, { Component } from 'react';
import { Col, Table, Button } from 'react-bootstrap';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Question</h1>
        <Col xs={12} className="filter-wrap p-none">
          <Col xs={12} className="p-none">
            <Button className="btn pull-right add-new-btn">
              Add New
            </Button>
          </Col>
        </Col>
        <Col xs={12} className="p-none">
          <div className="questions-table-wrap">
            <Table responsive className="questions-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Teaming Stages</th>
                  <th>Appears</th>
                  <th>Frequency</th>
                  <th>Type</th>
                  <th>Role</th>
                  <th>Required</th>
                  <th>Condition</th>
                  <th>Mapping</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>How would you rate the team's collaboration?</td>
                  <td>Norming</td>
                  <td>1</td>
                  <td>60</td>
                  <td>Rating scale</td>
                  <td>Admin</td>
                  <td>Yes</td>
                  <td>Always</td>
                  <td>Collaboration</td>
                  <td>
                    <a
                      className="edit-icon"
                      href="http://www.google.com"
                    >
                      <img
                        src={require('../assets/images/edit-icon.png')}
                        alt=""
                      />
                    </a>
                    <a
                      className="delete-icon"
                      href="http://www.google.com"
                    >
                      <img
                        src={require('../assets/images/delete-icon.png')}
                        alt=""
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </div>
    )
  }
}