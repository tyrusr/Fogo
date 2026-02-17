//import react
import { useState } from "react"
// import from services

//hook function
export default function useGetProfile() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProfile() {
        setLoading(true);
        try {
            //variable = services call(user id or something)
            //setdata with variable
        } catch(err) {
            //seterror
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getProfile};
}