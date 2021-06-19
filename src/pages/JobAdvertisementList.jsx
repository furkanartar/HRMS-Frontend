import React, { Component } from "react";
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

export default class JobAdvertisementList extends Component {

  render() {
    return (
      <div>

        <Table className="table-secondary text-center">
          <thead className="table-dark ">
            <tr>
              <th>Şirket Adı</th>
              <th>Pozisyonu</th>
              <th>Şehir</th>
              <th>Maaş aralığı</th>
              <th>Başvur</th>
            </tr>
          </thead>
          <tbody>
            {this.props.jobAdvertisements.map((jobAdvertisement) => (
              <tr key={jobAdvertisement.id}>
                <td>{jobAdvertisement.employer.companyName}</td>
                <td>{jobAdvertisement.jobPosition.name}</td>
                <td>{jobAdvertisement.city.name}</td>
                <td>{jobAdvertisement.minimumSalary + " - " + jobAdvertisement.maximumSalary}</td>
                <td><Button color="secondary">Başvur</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}