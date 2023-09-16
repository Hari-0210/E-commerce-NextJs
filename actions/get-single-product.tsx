import { get } from "@/lib/httpUtility";

const URL = `product/fetch`;

const getSingleProduct = async (store: any): Promise<any> => {
  try {    
    const res: any = await get<Response>(`${URL}`, {
      headers: {
        tenant: store,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; 
  }
};

export default getSingleProduct;
