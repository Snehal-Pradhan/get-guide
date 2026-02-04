import type { ApiRequest, ApiResponse } from "../types/http.js";
import { ApiError } from "../utils/ApiError.js";
 
interface AnalysisBody {
  embedding_weaviate_address: string;
  number_of_job_roles: 5 | 10;
}


export const working = async (req:ApiRequest,res:ApiResponse): Promise<void> => {
  res.json({
    success: true,
    message: "AI Service is working",
  });
};

export const analysis = async (
  req: ApiRequest<AnalysisBody>,
  res: ApiResponse
): Promise<void> => {
  const { embedding_weaviate_address, number_of_job_roles } = req.body;

  if (!embedding_weaviate_address) {
    throw new ApiError(400, "Missing embedding_weaviate_address");
  }
  
  res.json({
    success: true,
    roles: number_of_job_roles,
    embedding_weaviate_address: embedding_weaviate_address,
  });
};
