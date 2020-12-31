import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any | undefined>(undefined);
  const [error, setError] = useState<any | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        const request = await fetch(url);
        const data = await request.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setData({
          error
        });
        setLoading(false);
      }
    }
    fetchApi();
  }, [])
  return { loading, data, error };
}