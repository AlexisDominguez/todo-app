import dotenv from "dotenv";
dotenv.config();

const { env } = process;

export const APP_DEFAULT_PORT = env.APP_DEFAULT_PORT || 8080;
export const MONGO_URL = env.MONGO_URL || "";
