import {useEffect, useState} from "react";
import {Icon, Menu, Table} from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertismentsList(){
    const [jobAdvertisement, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data))
    }, [])

    return(
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>İnternet Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>

                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Maaş aralığı</Table.HeaderCell>
                        <Table.HeaderCell>Alınacak Kişi Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>İlanın yayından kalkacağı tarih</Table.HeaderCell>
                        <Table.HeaderCell>İlanın oluşturulduğu tarih</Table.HeaderCell>
                        <Table.HeaderCell>İlanın son düzenlendiği tarih</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisement.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.employer.webSite}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.employer.phoneNumber}</Table.Cell>

                            <Table.Cell>{jobAdvertisement.jobPosition.name}</Table.Cell>

                            <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>

                            <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.minimumSalary + " - " + jobAdvertisement.maximumSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.numberOfPeopleToBeHired}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.createdAt}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.lastModifiedAt}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
