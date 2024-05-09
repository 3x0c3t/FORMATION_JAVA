const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

themeToggle.addEventListener('click', function() {
    body.classList.toggle('Theme1');
    body.classList.toggle('Theme2');

    header.classList.toggle('HeaderTheme1');
    header.classList.toggle('HeaderTheme2');

    main.classList.toggle('BodyTheme1');
    main.classList.toggle('BodyTheme2');

    footer.classList.toggle('FooterTheme1');
    footer.classList.toggle('FooterTheme2');
});
