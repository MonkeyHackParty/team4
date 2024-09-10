import { useState, useEffect } from "react";
import { postFetch } from "../fetch";

export const usePostHook = (url: string, body: unknown) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postData = await postFetch(url, body);
        setData(postData);
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
