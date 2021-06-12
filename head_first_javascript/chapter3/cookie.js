function readCookie(name) {
    let searchName = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length)
        }
        if (c.indexOf(searchName) === 0) {
            return c.substring(searchName.length, c.length);
        }
    }
}

function writeCookie(name, value, days) {
    let expries = "";
    if (days) {
        let date = new Date()
        // date.setDate(date.getTime() + (days*24*60*60*1000))
        expries = ";expires=" + date.toLocaleDateString()
    }
    let cookie = name + "=" + value + expries + "; path=/";
    alert(cookie)
    document.cookie = cookie
}