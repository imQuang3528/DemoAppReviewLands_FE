import BaseApi from "@/base/baseapi/baseApi";

class ListLand extends BaseApi {
  constructor() {
    super();
  }
  controllerName = "v1/listlands";

  async getListLand() {
    let url = this.getApiUrl();
    return await this.get(url);
  }
}

export default new ListLand();
