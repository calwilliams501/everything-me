const heading = {
    home: {
        button: document.getElementById('nav-home'),
        section: document.getElementById('section-home'),
        coords: 0
    },
    about: {
        button: document.getElementById('nav-about'),
        section: document.getElementById('section-about'),
        coords: window.innerHeight
    },
    skills: {
        button: document.getElementById('nav-skills'),
        section: document.getElementById('section-skills'),
        coords: window.innerHeight * 2
    },
    work: {
        button: document.getElementById('nav-work'),
        section: document.getElementById('section-work'),
        coords: window.innerHeight * 3
    },
    edu: {
        button: document.getElementById('nav-edu'),
        section: document.getElementById('section-edu'),
        coords: window.innerHeight * 4
    },
    contact: {
        button: document.getElementById('nav-contact'),
        section: document.getElementById('section-contact'),
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

Object.values(heading).forEach(navElem => {

    navElem.button.onclick = () => {
        window.scroll({
            top: navElem.coords,
            behavior: 'smooth'
        });
        setActiveNavButton(navElem.button);
    };

})

document.getElementById('email').onclick = (e) => window.open("mailto:cal.a.williams@hotmail.com");
document.getElementById('linkedin').onclick = (e) => window.open("https://www.linkedin.com/in/cal-a-williams/");

function init() {
    setTextRotation();
    setSkillDates();
}

function setTextRotation() {

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

function setActiveNavButton(button) {

    if (button.classList.contains('active')) return scrollActiveSectionToTop();

    Object.values(heading).forEach(it => {
        it.button.classList.remove('active')
    })
    button.classList.add('active');

}

function scrollActiveSectionToTop() {

    Object.values(heading).find((o) => o.button.classList.contains('active')).section.scroll({
        top: 0,
        behavior: 'smooth'
    });

}

function setSkillDates() {

    const date = new Date();

    Object.values(document.getElementById('skills-container').querySelectorAll('h4')).forEach(it => {

        it.textContent += ` / ${(date.getFullYear() - Number(it.textContent)).toString()} years experience`;

    });

}