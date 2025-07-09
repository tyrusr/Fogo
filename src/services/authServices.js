export async function loginUser(email, password) {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({email, password})
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }
    return data;
}

//make a logout

export async function registerUser(username, email, password) {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, email, password})
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Register failed")
    }
    return data;
}

export async function createListing(name, price, description, image) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        },
        body: JSON.stringify({name, price, description, image})
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Create listing failed")
    }
    return data;
}

export async function getUserProfile(/* profile params */) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        }
        //send params in body
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Profile failed");
    }
    return data;
}

export async function getListings(params) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        }
        //send params in body
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Listings failed");
    }
    return data;
}

export async function getUsersBids(params) {
     const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        }
        //send params in body
     });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Users Bids failed");
    }
    return data;
}

export async function getListingDetails(params) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        }
        //send params in body
    })
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Listing Details failed");
    }
    return data;
}

export async function getListing(params) {
    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //csrf goes here
        }
        //send params in body
    })
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get listing failed");
    }
    return data;
}