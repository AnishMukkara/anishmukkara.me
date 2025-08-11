let count = localStorage.getItem('visitCount');

// If no count yet, start at 1
if (count === null) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}

// Save the new count
localStorage.setItem('visitCount', count);

// Show it on the page
document.getElementById('visit-count').innerText =
  `Total Visits (on this browser): ${count}`;