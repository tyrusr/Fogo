import { type } from '@testing-library/user-event/dist/type';
import Cookies from 'js-cookie';

export async function loginUser(email, password) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

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

    if (res.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("isLoggedIn", "true");
    }

    return data;
}

export async function logoutUser(){
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,            
        },
        credentials: 'include'
    })

    if(!res.ok) {
        throw new Error("Failed to Logout user");
    }

    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
}


export async function getCSRFToken() {

    const res = await fetch('http://localhost:5000/api/security/csrf-token', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    });

    if (!res.ok) {
        throw new Error("Failed to fetch CSRF token");
    }

    const data = await res.json();

    return data;
}


export async function registerUser(username, email, password, password2) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
    
        body: JSON.stringify({username, email, password, password2})
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Register failed")
    }

    if (res.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("isLoggedIn", "true");
    }

    return data;
}

export async function createListing(name, price, description, image) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch("http://localhost:5000/api/listings/createlisting", {
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
    const csrfToken = Cookies.get('XSRF-TOKEN');

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
    const csrfToken = Cookies.get('XSRF-TOKEN');

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
    const csrfToken = Cookies.get('XSRF-TOKEN');

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
    const csrfToken = Cookies.get('XSRF-TOKEN');

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
    const csrfToken = Cookies.get('XSRF-TOKEN');

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