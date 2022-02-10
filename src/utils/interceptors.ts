import Axios from 'axios';

class Interceptors {
  static ResponseInterceptor() {
    return Axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
}

export default Interceptors;
