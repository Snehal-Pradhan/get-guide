import weaviate from 'weaviate-client';
import { ApiKey, type WeaviateClient } from 'weaviate-client';
import "dotenv/config";
const weaviateUrl = process.env.WEAVIATE_URL!;
const weaviateApiKey = process.env.WEAVIATE_API_KEY!;

let client: WeaviateClient;

export async function initWeaviate(): Promise<WeaviateClient> {
  if (client) return client;

  if (!weaviateUrl || !weaviateApiKey) {
    throw new Error("Missing Weaviate Env variables");
  }
  client = await weaviate.connectToWeaviateCloud(
    weaviateUrl,
    {
      authCredentials: new ApiKey(weaviateApiKey)
    }
  );
  console.log("Weaviate connected successfully");
  return client;
}


export function getWeaviateClient(): WeaviateClient {
  if (!client) {
    throw new Error("Weaviate not initialized");
  }

  return client;
}