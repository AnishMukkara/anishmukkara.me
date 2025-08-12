// Using CountAPI to track visits globally
fetch('https://api.countapi.xyz/hit/anishmukkara-me/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visit-count').innerText =
      `Total Visits: ${data.value}`;
  });// Using CountAPI to track visits globally
fetch('https://api.countapi.xyz/hit/anishmukkara-me/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visit-count').innerText =
      `Total Visits: ${data.value}`;
  });