//imports/headers

export default function CollectListing({targetlisting}){
    const {data, error, loading, sendReq} = useCollectListing(targetlisting);

    return(
        <div>
            {loading ? (
                <button disabled>Loading</button>
            ) : (
                <button onClick={sendReq}>Collect Listing</button>
            )}
        </div>
    )
}