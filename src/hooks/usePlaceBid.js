import { useState, useEffect } from "react";
import placeBid from "../services/authServices";

export function usePlaceBid() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendBid(targetlisting) {
    setLoading(true)
    try {
      const response = await placeBid(targetlisting);
      setData(response);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {data, error, loading, sendBid}
}