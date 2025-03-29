// utils.js
document.addEventListener('DOMContentLoaded', function() {
  // Load the header
  fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      
      // Re-execute scripts in the template after it's injected
      // This is necessary because script tags inserted via innerHTML don't execute automatically
      const scriptTags = document.getElementById('header-placeholder').getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        const script = document.createElement('script');
        script.textContent = scriptTags[i].textContent;
        scriptTags[i].parentNode.replaceChild(script, scriptTags[i]);
      }
    })
    .catch(error => console.error('Error loading header template:', error));
});

// Add a utility function to load any template into any element
window.loadTemplate = function(templatePath, targetElementId) {
  return fetch(templatePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetElementId).innerHTML = data;
      
      // Re-execute scripts in the template
      const scriptTags = document.getElementById(targetElementId).getElementsByTagName('script');
      for (let i = 0; i < scriptTags.length; i++) {
        const script = document.createElement('script');
        script.textContent = scriptTags[i].textContent;
        scriptTags[i].parentNode.replaceChild(script, scriptTags[i]);
      }
    })
    .catch(error => console.error('Error loading template:', error));
}