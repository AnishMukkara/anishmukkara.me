fetch('counter.php')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visit-count').innerText =
      `Total Visits: ${data.visits}`;
  });