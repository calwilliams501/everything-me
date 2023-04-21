const nav = {
    home: {
        button: document.getElementById('nav-home'),
        coords: 0
    },
    about: {
        button: document.getElementById('nav-about'),
        coords: window.innerHeight
    },
    skills: {
        button: document.getElementById('nav-skills'),
        coords: window.innerHeight * 2
    },
    work: {
        button: document.getElementById('nav-work'),
        coords: window.innerHeight * 3
    },
    edu: {
        button: document.getElementById('nav-edu'),
        coords: window.innerHeight * 4
    },
    contact: {
        button: document.getElementById('nav-contact'),
        coords: window.innerHeight * 5
    }
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
window.onbeforeunload = () => {
    window.scrollTo(0, 0)

    Object.values(document.getElementsByClassName('section')).forEach(section => {
        section.scrollTo(0, 0)
    })

};

Object.values(nav).forEach(navElem => {

    navElem.button.onclick = () => {
        window.scroll({
            top: navElem.coords,
            behavior: 'smooth'
        });
        setActiveButton(navElem.button);
    };

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

function setActiveButton(button) {

    Object.values(nav).forEach(it => {
        it.button.classList.remove('active')
    })
    button.classList.add('active');

}