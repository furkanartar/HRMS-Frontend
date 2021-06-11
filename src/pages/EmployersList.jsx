import EmployerService from "../services/EmployerService";
import {Icon, Menu, Table} from "semantic-ui-react";
import {useEffect, useState} from "react";

export default function EmployersList(){
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data))
    }, [])

    return(
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Parola</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>İnternet Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {employers.map((employer) => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>{employer.email}</Table.Cell>
                            <Table.Cell>{employer.password}</Table.Cell>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.webSite}</Table.Cell>
                            <Table.Cell>{employer.phoneNumber}</Table.Cell>
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
