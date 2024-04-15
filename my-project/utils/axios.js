import axios from "axios"
export const localRequest = axios.create({
  baseURL: "https://api.p2.lc2s6.foxhub.space",
  
});