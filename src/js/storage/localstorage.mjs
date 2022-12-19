export function save (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function load (key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        console.error('Failed to load localstorage');
        return null
    }
}

export function getUser () {
    try {
        const user = localStorage.getItem("user");
        return JSON.parse(user);
    } catch {
        return null
    }
}

export function remove (key) {
    localStorage.removeItem("accessToken");
}

export function SignOut () {
    localStorage.removeItem("accessToken");
    window.location.replace("/index.html");
}