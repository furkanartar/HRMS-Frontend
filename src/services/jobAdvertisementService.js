import axios from "axios";

export default class JobAdvertisementService {
    getAllByActive() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByActive");
    }

    getJobAdvertisementByActiveAndJobPositionId(id) {
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByActiveAndJobPositionId?id=" + id);
    }

    add(values) {
        console.log(values)
        return axios.post("http://localhost:8080/api/jobadvertisements/add", values);
    }
}
