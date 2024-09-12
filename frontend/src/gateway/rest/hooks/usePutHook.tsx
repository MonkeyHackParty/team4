import { useState, useEffect } from "react";
import { putFetch } from "../fetch";

export const usePutHook = (url: string, body: unknown) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const putData = await putFetch(url, body);
        setData(putData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, body]);

  return { data, loading, error };
};
