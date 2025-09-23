import { useState } from "react";
import { getListings } from "../services/authServices";

//export function
export function useGetListings(){

    async function handleGetListings(){
        try {
            const data = await getListings();
            return data;
        } catch(err) {
            console.log(err)
            return [];
        }
        //try
            //await call get listings from services
            //return true
        //catch
            //error then say error/log error
    }

    return { handleGetListings }
}