import { useEffect, useState } from "react";

interface Props {
  url: string;
  filter?: Function;
  options?: RequestInit;
}

interface ResponseProps {
  data?: any;
  error?: String | Error;
  loading: boolean;
  callFetch: Function;
}

let controller = new AbortController();
// eslint-disable-next-line prefer-destructuring
let signal = controller.signal;

export const useFetch: (props: Props) => ResponseProps = ({
  url,
  filter,
  options,
}) => {

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const callFetch = () => {
    
    if (data) setData(null);

    if (error) {
      controller.abort();
      setError(null);
    }

    if (loading) {
      controller.abort();
      controller = new AbortController();
      signal = controller.signal;
    }

    if (!loading) setLoading(true);

    fetch(url, { signal, ...options })
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error("Response not ok");
        }

        return res.json();
      })
      .then((d) => {
        setData(filter ? d?.filter(filter) : d);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (url) {
      callFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error, callFetch };
};
