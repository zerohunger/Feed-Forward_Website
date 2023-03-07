import axios, { AxiosInstance, AxiosResponse } from "axios";
import { GetUserToken } from "./LocalstorageUtility";

class ApiHelper {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      headers: {
        authorization: GetUserToken(),
      },
    });
  }

  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiHelper();
