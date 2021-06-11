import axios from "axios";

export default class SchoolInformationService{
    getSchoolInformations(){
        return axios.get("http://localhost:8080/api/schoolInformations/getall")
    }
}
