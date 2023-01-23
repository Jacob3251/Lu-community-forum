import { useState, useEffect } from "react";
import axios from "axios";

export default function useAllStats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9000/showstats")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [data.length]);

  return [loading, data];
}
