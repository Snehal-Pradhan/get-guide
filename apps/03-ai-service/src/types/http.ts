import type { Request, Response } from "express";

export type ApiRequest<TBody = any, TParams = any, TQuery = any> =
  Request<TParams, any, TBody, TQuery>;

export type ApiResponse<T = any> = Response<T>;