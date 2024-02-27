import { ResponseZipCode } from "@uptc/types/types";
import { API_URL } from "../../../utils/constans";

export const getZipcode = async (
  zipcode: string
): Promise<string  | any> => {
  
  try {
    const res = await fetch(`${API_URL}/zipcode/${zipcode}`);
    const data= await res.json();
    return data;
  } catch (error: Error | any) {
    return error.message;
  }
};

export const getZipcodeByFile = async (file: File): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API_URL}/upload_file`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error(`Error al enviar el archivo: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error}`);
  }
};