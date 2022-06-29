import { useEffect, useState } from "react";

function useLoadable<T>(fetchData: () => Promise<T>, dependencies = []): [T | undefined, boolean] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((v) => setData(v))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return [data, loading];
}

export default useLoadable;
