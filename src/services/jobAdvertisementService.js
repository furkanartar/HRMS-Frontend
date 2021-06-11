import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisement(){
        let result = axios.get("http://localhost:8080/api/jobadvertisements/getall");
        console.log(result);
        return result;
    }
}
