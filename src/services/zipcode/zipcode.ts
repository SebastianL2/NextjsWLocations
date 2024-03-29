import { ResponseZipCode } from "@uptc/types/types";
import { API_URL } from "../../../utils/constans";

export const getZipcode = async (
  zipcode: string
): Promise<ResponseZipCode | any> => {
  try {
    const res = await fetch(`${API_URL}/zipcode/${zipcode}`);
    const data: ResponseZipCode = await res.json();
    return data;
  } catch (error: Error | any) {
    return error.message;
  }
};

export const getZipcodeByFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API_URL}/upload_file`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (error: Error | any) {
    return error.message;
  }
};
