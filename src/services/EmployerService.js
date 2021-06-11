import axios from "axios";

export default class EmployerService{
    getEmployers(){
        let qq = axios.get("http://localhost:8080/api/employers/getall");
        // console.log(qq);
        return qq;
    }
}
