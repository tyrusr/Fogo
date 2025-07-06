export async function loginUser(email, password) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        }
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }
    return data;
}

export async function registerUser(username, email, password) {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Register failed")
    }
    return data;
}

//async function to grab the users info
    //fetch request
    //return data if no errors

//async function to grab all the current listings
    //fetch request
    //return data if no errors

//async function to grab the users bids
    //fetch request
    //return data if no errors

//async function to submit a new listing form
    //fetch request
    //return data if no errors

//async function to grab listing details for editing
    //fetch request
    //return data if no errors

//async function to grab a single listing
    //fetch request
    //return data if no errors
