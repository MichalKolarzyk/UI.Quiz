import axios, { AxiosInstance } from "axios";

export class ApiQuizInstance{
    instance: AxiosInstance;
    constructor(baseUrl: string){
        this.instance = axios.create(
            {
                baseURL: baseUrl,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }
}

export default new ApiQuizInstance("http://localhost:5000").instance;;