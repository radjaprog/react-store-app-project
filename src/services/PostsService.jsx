import { axiosInstance } from "./AxiosService";
console.log(axiosInstance);

class PostsService {
  //   getAll() {
  //     const response = axios
  //       .get("http://jsonplaceholder.typicode.com/posts")
  //       .then((data) => data)
  //       .catch();
  //     return response;
  //   }
  // }

  async getAll() {
    const response = await axiosInstance.get("/posts");
    return response.data;
  }
}
export default new PostsService();
