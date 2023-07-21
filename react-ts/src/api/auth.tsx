import { IUser } from "../types/user";
import instance from "./instance";

export const signUp = (user: IUser) => {
  return instance.post("/api/signup", user);
};
export const signIn = (user: IUser) => {
  return instance.post("/api/signin", user);
};
