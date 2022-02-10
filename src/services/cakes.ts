import Axios, { AxiosResponse } from "axios";
import BaseService from "./base";
import {CakeResponse, CreateCakeRequest, UpdateCakeRequest} from "shared/types/cakes";
import { toast } from 'react-toastify';
import { handleAxiosError } from "../utils/validators";

export default class CakeService extends BaseService {
  constructor(){
    super(`${process.env.REACT_APP_CAKES_HOST}`);
  }

  getCakes = async (): Promise<AxiosResponse<CakeResponse[]> | null> => {
    return await Axios.request({
      method: "GET",
      url: `${this.host}/cakes`,
      ...this.defaultConfig
    }).catch((err) => {
      return handleAxiosError(err, "Unable to fetch Cakes");
    });;
  }

  createCake = async (body: CreateCakeRequest): Promise<AxiosResponse<CakeResponse> | null> => {
    return await Axios.request({
      method: "POST",
      url: `${this.host}/cakes`,
      data: body,
      ...this.defaultConfig
    }).catch((err) => {
      return handleAxiosError(err, "Unable to create Cake");
    });;
  }

  getCake = async (id: string): Promise<AxiosResponse<CakeResponse> | null> => {
    return await Axios.request({
      method: "GET",
      url: `${this.host}/cakes/${id}`,
      ...this.defaultConfig
    }).catch((err) => {
      return handleAxiosError(err, "Unable to fetch Cake");
    });
  }

  patchCake = async (id: string, body: UpdateCakeRequest): Promise<AxiosResponse<CakeResponse> | null> => {
    return await Axios.request({
      method: "PATCH",
      url: `${this.host}/cakes/${id}`,
      data: body,
      ...this.defaultConfig
    }).catch((err) => {
      return handleAxiosError(err, "Unable to update Cake");
    });;
  }

  deleteCake = async (id: string): Promise<AxiosResponse<any> | null> => {
    return await Axios.request({
      method: "DELETE",
      url: `${this.host}/cakes/${id}`,
      ...this.defaultConfig
    }).catch((err) => {
      return handleAxiosError(err, "Unable to delete Cake");
    });
  }
}