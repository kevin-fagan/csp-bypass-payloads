# Context

The lab uses CSP to mitigate XSS. But the following domain is allowed to execute scrips on the labs site: `cdn.jsdeliver.net*`. This means we can inject JS onto the page as long as the script is stored on that domain
