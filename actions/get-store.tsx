import { post } from "@/lib/httpUtility";

const URL = `store/isStore`;

const storeCheck = async (store: string): Promise<any> => {
  try {
    const res: any = await post<Response>(`${URL}`, { store: store });
    return res.data;
  } catch (error) {
    console.error("Error fetching Store:", error);
    throw error;
  }
};

export default storeCheck;
