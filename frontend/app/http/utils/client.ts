import { Http } from "./Http";

export const client = new Http(process.env.API_URL ?? "");
