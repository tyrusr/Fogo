
export default function useGetUserListings() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getUserListings() {
        setLoading(true);
        try {
            const response = await getUserListings();
            setData(response);
        } catch(err) {
            //seterror
        } finally {
            setLoading(false);
        }
    }

    return {data, error, loading, getUserListings};
}