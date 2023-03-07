import BaseApi from "@/base/baseapi/baseApi";
class CategoryReview extends BaseApi {
  constructor() {
    super();
  }
  controllerName = "v1/categoryreview";

  /**
   * service lấy về danh sách danh mục
   * @returns 
   */
  async getCategoryReview(param) {
    return await this.post(`${this.getApiUrl()}/paging`,param);
  }

  /**
   * Service xử lý lưu danh mục
   */
  handleSaveCategory(param){
    return this.post(`${this.getApiUrl()}`,param);
  }

  /**
   * Service lấy về chi tiết
   * @param {*} param 
   * @returns 
   */
  async handleGetDetail(param){
    return await this.get(`${this.getApiUrl()}/${param}`);
  }

  handleDeleteCateory(param){
    return this.post(`${this.getApiUrl()}/${param}`);
  }

}

export default new CategoryReview();
