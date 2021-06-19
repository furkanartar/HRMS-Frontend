import React, { Component } from 'react'
import JobPositionService from './../services/jobPositionService';

export default class JobPositionList extends Component {
  state = {
    jobPositions: []
  };

  componentDidMount() {
    this.getJobPositions();
  }

  getJobPositions = () => {
    let jobPositionService = new JobPositionService();

    jobPositionService
      .getJobPositions()
      .then((response) => this.setState({ jobPositions: response.data }));
  }

  changeClass(jobPosition) {

  }

  render() {
    return (
      <div>
        <ul>
          <li className="list-group-item list-group-item-dark" >Pozisyonlar</li>
          {this.state.jobPositions.map((jobPosition) => (
            <li
              className={this.props.currentJobPosition === jobPosition.name ? "list-group-item active" : "list-group-item list-group-item-secondary"}
              onClick={() => { this.props.changeJobPosition(jobPosition) }
              }
              key={jobPosition.id}>
              {jobPosition.name}
            </li>))}
        </ul>
      </div>
    )
  }
}



