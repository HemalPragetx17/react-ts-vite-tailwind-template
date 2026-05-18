/* eslint-disable import/no-anonymous-default-export */
import type { AxiosResponse } from "axios";
import type { IUserModal } from "../models/user";
import { buildQueryParams } from "../utils/commonFunctions";
import type { ApiResponseModel } from "./api";
import httpService from "./http-service";

const endPointBaseURL = `admin`;

const getAllUsers = async (params: Record<string, any>): Promise<AxiosResponse<ApiResponseModel<Array<IUserModal>>>> =>
    httpService.get<ApiResponseModel<Array<IUserModal>>>(`${endPointBaseURL}/hcp/list${buildQueryParams(params)}`);

const addUser = async (requestBody: IUserModal): Promise<AxiosResponse<ApiResponseModel<boolean>>> =>
    httpService.post<ApiResponseModel<boolean>>(`${endPointBaseURL}/addHcp`, requestBody);

export default {
    getAllUsers,
    addUser,
};
