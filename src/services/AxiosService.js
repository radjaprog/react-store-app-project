import axios from "axios";

class AxiosService {
  constructor() {
    this.axiosInstanceFromLibrary = axios.create({
      baseURL: "http://jsonplaceholder.typicode.com",
    });
  }
}

export const axiosInstance = new AxiosService().axiosInstanceFromLibrary;
