/* eslint-disable import/no-anonymous-default-export */
import type { AxiosResponse } from "axios";
import type { IRoutesModel } from "../models/routes";
import type { ApiResponseModel } from "./api";
import httpService from "./http-service";

const endPointBaseURL = `user-management`;

const getAllUsers = async (
    pageNo: number,
    limit: number,
    sortKey: string,
    sortOrder: string,
    needCount: boolean,
    searchTerm: string,
    warehouse: string,
    skip: number
): Promise<AxiosResponse<ApiResponseModel<Array<IRoutesModel>>>> =>
    httpService.get<ApiResponseModel<Array<IRoutesModel>>>(`${endPointBaseURL}?pageNo=${pageNo}&limit=${limit}&sortKey=${sortKey}&sortOrder=${sortOrder}&needCount=${needCount}&searchTerm=${searchTerm}&warehouse=${warehouse}&skip=${skip}`);


export default {
    getAllUsers,
};
