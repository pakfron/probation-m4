import axios from "axios";
import { DataPlaceHolder } from "../type/jsonPlaceHolder.type";

export interface ResponseList<T> {
  data: T;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
}

export const getPlaceHolderPost = async (): Promise<DataPlaceHolder[]> => {
  const result = await axios.get<DataPlaceHolder[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return result.data;
};
