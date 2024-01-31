const licenses = ["063rMxhYuDwErhVP", "xSXV43PF57fXE1tQ", "PqdZfAfkZ9blkdpE", "AMiC8QBrp0XyOP9B", "1ROJq5OzS9oppPvD", "YahXNI6hVwYJtQfS", "qDr6WQendCQ9Gm6b", "yWZM3TM7wa1tqJI8", "oqGl3CaTaPVGQmWH", "5Xd8vpSyj8JFu1Ln"]

export const checkLicense = (license: string) => {
    return licenses.includes(license);
}

export const getCookie = (cname: string) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }