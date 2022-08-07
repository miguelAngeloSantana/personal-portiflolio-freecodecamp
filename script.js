const imf = window.document.getElementById("github-img");
const iml = window.document.getElementById("linkedin-img");
const hamburge = window.document.getElementById("hamburge");
const mmain = window.document.getElementById("menu-main");


imf.addEventListener('mouseenter', () => {
    imf.src = "images/github-logo-footer.png";
});

imf.addEventListener('mouseout', () => {
    imf.src = "images/github-logo-2.png";
});

iml.addEventListener('mouseenter', () => {
    iml.src = "images/linkedin-logo-131.png";
});

iml.addEventListener('mouseout', () => {
    iml.src = "images/linkedin-footer-3.png";
});


hamburge.addEventListener('click', () => {
    hamburge.classList.toggle('show');
    mmain.classList.toggle('show');
})