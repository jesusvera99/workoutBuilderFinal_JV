(function () {
  var html = document.documentElement;
  html.className = html.className.replace('no-js', 'js');

  if ('querySelector' in document && 'addEventListener' in window) {
    html.className += ' modern-browser';
  } else {
    html.className += ' older-browser';
  }
})();
