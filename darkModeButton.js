document.querySelector('.checkbox').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
    var themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === '/lighCode.css') {
        themeLink.setAttribute('href', '/darkCode.css');
    } else {
        themeLink.setAttribute('href', '/lighCode.css');
    }
});