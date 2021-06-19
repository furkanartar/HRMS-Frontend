import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }

    getJobAdvertisementByActiveAndJobPositionId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByActiveAndJobPositionId?id=" + id);
    }
}
