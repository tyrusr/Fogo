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
        throw new Error(data.error || data.message || "Login failed");
    }

    if (res.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("isLoggedIn", "true");
    }

    return data;
}

export async function nologout(){
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch("http://localhost:5000/api/auth/nologout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,    
        },
        credentials: 'include'
    })
    console.log("ysssses");
    console.log(res);
    return res;
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
    //move to hooks later
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
        throw new Error(data.error || data.message || "Register failed")
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
        throw new Error(data.error || data.message || "Create listing failed")
    }
    return data;
}


export async function getListing(id) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch("http://localhost:5000/api/listings/getlisting", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({id})
    })
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Get listing failed");
    }

    return data;
}


export async function getListings(params) {
    const res = await fetch("http://localhost:5000/api/listings/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Get Listings failed");
    }

    return data;
}

export async function placeBid(targetlisting, bidAmount) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch(`http://localhost:5000/api/listings/${targetlisting}/bid`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',

        body: JSON.stringify({bidAmount})
    });

    const data = await res.json();

    if (!res.ok) {
        console.log(res);
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return data;
}


export async function userBids() {

    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch('http://localhost:5000/api/listings/userbids', {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
    });

    const data = await res.json()

    if (!res.ok) {
        console.log("wip");
    }

    return data;
}

export async function getAllUserListings() {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch('http://localhost:5000/api/listings/userlistings', {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
    });

    const data = await res.json()

    if (!res.ok) {
        console.log("wip");
    }

    return data;
}


export async function getLoggedInUser() {
    
    const res = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Get Profile failed");
    }
    return data;
}

export async function endListing(targetlisting) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch(`http://localhost:5000/api/listings/${targetlisting}/endlisting`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',

    });

    const data = await res.json();

    if (!res.ok) {
        console.log(res);
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return data;
}

export async function collectListing(targetlisting) {
    const csrfToken = Cookies.get('XSRF-TOKEN');

    const res = await fetch(`http://localhost:5000/api/listings/${targetlisting}/collectlisting`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
        },
        credentials: 'include',

    });

    const data = await res.json();

    if (!res.ok) {
        console.log(res);
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return data;
}