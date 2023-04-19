const nav = {
    home: document.getElementById('nav-home'),
    about: document.getElementById('nav-about'),
    contact: document.getElementById('nav-contact')
};
const sdText = {
    visible: document.getElementById('sd-text-visible'),
    hidden: document.getElementById('sd-text-hidden')
};

const sdString = [
    'softwaredeveloper',
    'SOFTWAREDEVELOPER',
    'softwareDeveloper',
    'SoftwareDeveloper',
    'software_developer',
    'SOFTWARE_DEVELOPER',
    'software_Developer',
    'software-developer',
    'SOFTWARE-DEVELOPER',
    'Software-Developer',
    'Software Developer'
];

document.body.onload = () => init();

nav.home.onclick = () => window.scroll({
    top: 0,
    behavior: 'smooth'
})
nav.about.onclick = () => window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
})
nav.contact.onclick = () => window.scrollBy({
    top: window.innerHeight * 2,
    behavior: 'smooth'
})

function init() {
    textRotation();
}

function textRotation() {

    setInterval( () => {

        const rotNum = Math.floor(Math.random() * 11)

        sdText.hidden.textContent = sdString[rotNum];
        moveSDText();
        setTimeout(() => {

            sdText.visible.textContent = sdString[rotNum];
            sdText.visible.style.opacity = '1';
            sdText.visible.classList.remove('sd-text-moving');
            sdText.visible.style.transform = 'translateX(0vw)';
            sdText.hidden.classList.remove('sd-text-moving');
            sdText.hidden.style.transform = 'translateX(0vw)';

            }, 1100)
        sdText.visible.classList.add('sd-text-moving');
        sdText.hidden.classList.add('sd-text-moving');

    }, 5000)

}

function moveSDText() {

    sdText.visible.style.opacity = '0';
    sdText.hidden.style.transform = 'translateX(100vw)';
    sdText.visible.style.transform = 'translateX(100vw)';

}