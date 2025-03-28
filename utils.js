// utils.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the header
    fetch('templates/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });
  });