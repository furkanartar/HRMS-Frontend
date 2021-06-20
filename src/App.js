import { Container, Row, Col } from "reactstrap";
import Navi from "./components/Navi";
import JobAdvertisementList from "./pages/JobAdvertisementList.jsx";
import ResumeAdd from "./pages/JobAdvertisementAdd.jsx"
import JobPositionList from './pages/JobPositionList';
import JobAdvertisementService from "./services/jobAdvertisementService.js";
import React, { Component } from 'react'
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';

export default class App extends Component {

  state = {
    currentJobPosition: "",
    jobAdvertisements: []
  }

  componentDidMount() {
    this.getJobAdvertisements();
  }

  changeJobPosition = jobPosition => {
    this.setState({ currentJobPosition: jobPosition.name });
    this.getJobAdvertisements(jobPosition.id)
  }

  getJobAdvertisements(jobPositionId) {
    let jobAdvertisementService = new JobAdvertisementService();

    if (jobPositionId) {
      jobAdvertisementService
        .getJobAdvertisementByActiveAndJobPositionId(jobPositionId)
        .then(response => this.setState({
          jobAdvertisements: response.data
        }))
    } else {
      jobAdvertisementService
        .getAllByActive()
        .then(response => this.setState({
          jobAdvertisements: response.data
        }))
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <JobPositionList
                currentJobPosition={this.state.currentJobPosition}
                changeJobPosition={this.changeJobPosition} />
            </Col>

            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <JobAdvertisementList
                    {...props}
                    jobAdvertisements={this.state.jobAdvertisements}
                    currentJobPosition={this.state.currentJobPosition} />
                )} />
                <Route exact path="/1" component={ResumeAdd} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
