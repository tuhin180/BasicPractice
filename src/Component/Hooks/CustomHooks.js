import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(`err: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setData(data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [url],
  );
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [fetchData]);
  return { data, loading, error };
};
export { useFetch };
