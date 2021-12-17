import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import http from "../services/httpService";

export const UrlFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(async () => {
    try {
      if (loading) {
        const { data } = await http.get(env.process.DOMAIN);
        setData(data);
        setLoading(false);
      }
    } catch (ex) {
      setError(ex);
      setLoading(false);
      toast.error("Data not Found.");
    }
  }, []);
};
