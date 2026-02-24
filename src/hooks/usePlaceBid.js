import { useState, useEffect } from "react"

export function usePlaceBid() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function sendBid(/*user id and bid id*/) {
    setLoading(true)
    try {
      //services call and store in var
      //set data with var
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {data, error, loading, sendBid}

}