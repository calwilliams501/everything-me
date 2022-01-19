class EverythingMe {

    _setTextNum = 0;

    set textNum(value) {
        if (this._setTextNum === value) this._setTextNum = 0;
        this._setTextNum = value;
    }

    get textNum() {
        return this._setTextNum;
    }
}

const everythingMe = new EverythingMe();
const sdText = {
    visible: document.getElementById('sd-text-visible'),
    hidden: document.getElementById('sd-text-hidden')
}

document.body.onload = () => init();

function init() {
    textRotation();
}

function textRotation() {

    setInterval( () => {

        everythingMe.textNum = Math.floor(Math.random() * 11);

        setCase(sdText.hidden, everythingMe.textNum);
        moveSDText();
        setTimeout(() => {
            
            setCase(sdText.visible, everythingMe.textNum);
            sdText.visible.classList = '';
            sdText.visible.style.transform = 'translateX(0vw)';
            sdText.hidden.classList = '';
            sdText.hidden.style.transform = 'translateX(0vw)';

        }, 1100)
        sdText.visible.classList = 'sd-text-moving';
        sdText.hidden.classList = 'sd-text-moving';


    }, 5000)

}

function moveSDText() {

    sdText.hidden.style.transform = 'translateX(100vw)';
    sdText.visible.style.transform = 'translateX(100vw)';
    // sdText.visible.style.opacity = 0;

}

function setCase(textToChange, caseNum) {

    switch(caseNum) {

        case 1:
            textToChange.textContent = 'softwaredeveloper'
            break;

        case 2:
            textToChange.textContent = 'SOFTWAREDEVELOPER'
            break;

        case 3:
            textToChange.textContent = 'softwareDeveloper'
            break;

        case 4:
            textToChange.textContent = 'SoftwareDeveloper'
            break;

        case 5:
            textToChange.textContent = 'software_developer'
            break;

        case 6:
            textToChange.textContent = 'SOFTWARE_DEVELOPER'
            break;

        case 7:
            textToChange.textContent = 'software_Developer'
            break;

        case 8:
            textToChange.textContent = 'Software_Developer'
            break;

        case 9:
            textToChange.textContent = 'software-developer'
            break;

        case 10:
            textToChange.textContent = 'SOFTWARE-DEVELOPER'
            break;

        case 11:
            textToChange.textContent = 'Software-Developer'
            break;
    
        case 0:
            textToChange.textContent = 'Software Developer'
            break;
    }

}