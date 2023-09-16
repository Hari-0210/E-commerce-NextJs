// httpUtility.ts


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
};

const fetchWithHeaders = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const fetchOptions = {
    ...options,
    headers: {
      ...HEADERS,
      ...options.headers,
    },
  };
  console.log("fetchOptions",fetchOptions);
  
  const res = await fetch(url, fetchOptions);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return res;
};

export const get = async <T>(url: string, options?: RequestInit): Promise<T> => {  
  const apiUrl = `${BASE_URL}/${url}`;
  const res = await fetchWithHeaders(apiUrl, options);
  return res.json();
};

export const post = async <T>(url: string, data: any, options?: RequestInit): Promise<T> => {  
  const apiUrl = `${BASE_URL}/${url}`;
  const fetchOptions = {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  };
  const res = await fetchWithHeaders(apiUrl, fetchOptions);
  return res.json();
};

export const put = async <T>(url: string, data: any, options?: RequestInit): Promise<T> => {
  const apiUrl = `${BASE_URL}/${url}`;
  const fetchOptions = {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  };
  const res = await fetchWithHeaders(apiUrl, fetchOptions);
  return res.json();
};

export const remove = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const apiUrl = `${BASE_URL}/${url}`;
  const fetchOptions = {
    ...options,
    method: 'DELETE',
  };
  const res = await fetchWithHeaders(apiUrl, fetchOptions);
  return res.json();
};
