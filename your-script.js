document.addEventListener('DOMContentLoaded', function() {
  var iframe = document.getElementById('myFrame');
  if (iframe) {
    iframe.removeAttribute('sandbox');
  }
});
