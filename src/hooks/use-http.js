import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfing, applyData) => {
    setIsLoading(true);
    setError(null);
    //"https://my-pos-application-api.onrender.com/api/products/get-all"
    try {
      const response = await fetch(requestConfing.url, {
        method: requestConfing.method ? requestConfing.method : "GET",
        body: requestConfing.body ? JSON.stringify(requestConfing.body) : null,
        headers: requestConfing.headers ? requestConfing.headers : {},
      });
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  return { sendRequest: sendRequest, isLoading: isLoading, error: error };
};

export default useHttp;
