import axios from "axios";
import Common from "../../config/config";

export default class 
BaseApi {
  baseUrl = "";
  controllerName = "";
  apiName = "";

  initAPI() {
    this.baseUrl = Common._apis.api + this.controllerName;
  }

  getApiUrl() {
    this.initAPI();
    return this.baseUrl;
  }

  get(api, data) {
    return new Promise((resolve,reject) => {
      axios.get(api, { params: data })
        .then(res => {
          resolve(res.data);
        })
        .catch(error=>{
          reject(error)
        })
    });
  }

  post(api, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: api,
        data: param
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
