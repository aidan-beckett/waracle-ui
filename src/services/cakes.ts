import Axios, { AxiosResponse } from "axios";
import BaseService from "./base";

export type CreateCakeRequest = {
  name: string,
  comment: string,
  imageUrl: string,
  yumFactor: number 
}

export type UpdateCakeRequest = Partial<CreateCakeRequest>

export type CakeResponse = {
  id: number,
  name: string,
  comment: string,
  imageUrl: string,
  yumFactor: number
}

export default class CakeService extends BaseService {
  constructor(){
    super(`${process.env.REACT_APP_CAKES_HOST}`);
  }

  getCakes = async (): Promise<AxiosResponse<CakeResponse[]>> => {
    return await Axios.request({
      method: "GET",
      url: `${this.host}/cakes`,
      ...this.defaultConfig
    });
  }

  createCake = async (body: CreateCakeRequest): Promise<AxiosResponse<CakeResponse>> => {
    return await Axios.request({
      method: "POST",
      url: `${this.host}/cakes`,
      data: body,
      ...this.defaultConfig
    });
  }

  getCake = async (id: string): Promise<AxiosResponse<CakeResponse>> => {
    return await Axios.request({
      method: "GET",
      url: `${this.host}/cakes/${id}`,
      ...this.defaultConfig
    });
  }

  patchCake = async (id: string, body: UpdateCakeRequest): Promise<AxiosResponse<CakeResponse>> => {
    return await Axios.request({
      method: "PATCH",
      url: `${this.host}/cakes/${id}`,
      data: body,
      ...this.defaultConfig
    });
  }

  deleteCake = async (id: string) => {
    return await Axios.request({
      method: "DELETE",
      url: `${this.host}/cakes/${id}`,
      ...this.defaultConfig
    })
  }
}