export async function loginUser(email, password) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
        
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }
    return data;
}

export async function getCSRFToken() {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch('http://localhost:5000/api/security/csrf-token', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error("Failed to fetch CSRF token");
    }

    return await res.json();
}

//export async function refreshJWT() {
 //   const res = await fetch(""), {

   // }
    
//}

export async function refreshJWT() {
    const csrfToken = localStorage.getItem('csrfToken');
    
    const res = await fetch(/* refresh route */, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error("Failed to update JWT");
    }

    return await res.json();

}

//make a logout!

export async function registerUser(username, email, password) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
    
        body: JSON.stringify({username, email, password})
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Register failed")
    }
    return data;
}

export async function createListing(name, price, description, image) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({name, price, description, image})
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Create listing failed")
    }
    return data;
}

export async function getUserProfile(/* profile params */) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        //send params in body
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Profile failed");
    }
    return data;
}

export async function getListings(params) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        //send params in body
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Listings failed");
    }
    return data;
}

export async function getUsersBids(params) {
    const csrfToken = localStorage.getItem('csrfToken');

     const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        //send params in body
     });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Users Bids failed");
    }
    return data;
}

export async function getListingDetails(params) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        //send params in body
    })
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get Listing Details failed");
    }
    return data;
}

export async function getListing(params) {
    const csrfToken = localStorage.getItem('csrfToken');

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        //send params in body
    })
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Get listing failed");
    }
    return data;
}