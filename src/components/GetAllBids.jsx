import { useEffect } from "react";
import { useGetUserBids } from "../hooks/useGetUserBids";

export default function UserBids() {
    const {data, error, loading, getBids} = useGetUserBids();

    useEffect(() => {
        getBids();
    }, [])

    return (
        <div>wip</div>
    );
}

//function

//use effect to call the hook

//return 