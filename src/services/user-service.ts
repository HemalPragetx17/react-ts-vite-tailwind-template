/* eslint-disable import/no-anonymous-default-export */
import type { AxiosResponse } from "axios";
import type { IRoutesModel } from "../models/routes";
import type { ApiResponseModel } from "./api";
import httpService from "./http-service";
import { buildQueryParams } from "../utils/commonFunctions";

const endPointBaseURL = `user-management`;

const getAllUsers = async (params: Record<string, any>): Promise<AxiosResponse<ApiResponseModel<Array<IRoutesModel>>>> =>
    httpService.get<ApiResponseModel<Array<IRoutesModel>>>(`${endPointBaseURL}${buildQueryParams(params)}`);

export default {
    getAllUsers,
};
