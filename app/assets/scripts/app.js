this.document.querySelector('.nav-side .nav-toggle')
  .addEventListener('click', function(event) {
    event.preventDefault();
    this.parentNode.classList.toggle('nav-open');
}, false);
