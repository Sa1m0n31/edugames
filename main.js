const views = Array.from(document.querySelectorAll('.view'));
const ex1StartBtn = document.querySelector('.btn--start1');
const ex1AnimationImg = document.querySelector('.ex1ContentAnimation>.img');
const ex1AnimationContent = document.querySelector('.ex1ContentAnimation');
const ex1TableImage = document.querySelector('.img--exContent1Table');
const ex1Table = document.querySelector('.table--1');
const table1Inputs = Array.from(document.querySelectorAll('.table__input')).slice(0, 4);
const table2Inputs = Array.from(document.querySelectorAll('.table__input')).slice(4, 6);

const questionBoxes = Array.from(document.querySelectorAll('.question'));
const questionOptions = Array.from(document.querySelectorAll('.question__options'));
const questionRightFeedbacks = Array.from(document.querySelectorAll('.question__rightFeedback'));
const questionWrongFeedbacks = Array.from(document.querySelectorAll('.question__wrongFeedback'));

const questionOptionsExtra = Array.from(document.querySelectorAll('.question__options--extra'));
const questionRightFeedbacksExtra = Array.from(document.querySelectorAll('.question__rightFeedback--extra'));
const questionWrongFeedbacksExtra = Array.from(document.querySelectorAll('.question__wrongFeedback--extra'));

const ex2StartBtn = document.querySelector('.btn--start2');
const ex2AnimationImg = document.querySelector('.ex2ContentAnimation>.img');
const ex2AnimationContent = document.querySelector('.ex2ContentAnimation');
const ex2TableImage = document.querySelector('.img--exContent2Table');
const ex2Table = document.querySelector('.table--2');

const ex3Image = document.querySelector('.ex3Image');
const ex3StartBtn = document.querySelector('.btn--start3');

const ex5Image = document.querySelector('.ex5Image');
const ex5StartBtn = document.querySelector('.btn--start5');

const ex6Image = document.querySelector('.ex6Image');
const ex6StartBtn = document.querySelector('.btn--start6');

const ex7Image = document.querySelector('.ex7Image');
const ex7StartBtn = document.querySelector('.btn--start7');

const ex8Image = document.querySelector('.ex8Image');
const ex8StartBtn = document.querySelector('.btn--start8');

const ex9StartBtn = document.querySelector('.btn--start9');
const ex9AnimationImg = document.querySelector('.ex9ContentAnimation>.img');
const ex9AnimationContent = document.querySelector('.ex9ContentAnimation');
const ex9TableImage = document.querySelector('.img--exContent9Table');

const modals = Array.from(document.querySelectorAll('.modal'));

const machinesTooltips = [
    'Analizator krzemionki',
    'Analizator spalin',
    'Analizator wody',
    'Miernik drgań',
    'Miernik poziomu hałasu',
    'Przepływomierz',
    'Pyłomierz'
];

const machinesAudios = [
    'analizator-krzemionki.mp3',
    'analizator-spalin.mp3',
    'analizator-wody.mp3',
    'miernik-drgan.mp3',
    'miernik-halasu.mp3',
    'przeplywomierz.mp3',
    'pylomierz.mp3'
];

let currentView = 0;
let audio;
let audioPlaying = false;

const showElement = (el) => {
    el.style.opacity = '1';
    el.style.zIndex = '1000';
}

const showModal = (el) => {
    el.style.opacity = '1';
    el.style.zIndex = '1001';
}

const hideElement = (el) => {
    el.style.opacity = '0';
    el.style.zIndex = '-1000';
}

const switchView = (n) => {
    hideElement(views[currentView]);
    showElement(views[n]);

    currentView = n;

    if(n === 3) {
        showEx1Animation();
    }
    else if(n === 4) {
        showEx2Animation();
    }
}

const backToStart = () => {
    switchView(0);

    back(0, true);
    back(1, true);
    back(2, true);
    // back(3, true);
    back(4, true);
    back(5, true);
    back(6, true);
    back(7, true);
    back(8, true);
}

machinesTooltips.forEach((item, index) => {
    tippy(`#machines${index}`, {
        content: item,
        followCursor: true
    });
});

tippy(`#powerhouse0`, {
    content: 'Elektrociepłownia z turbiną parową i kotłem opalanym paliwem stałym',
    followCursor: true
});

tippy(`#powerhouse1`, {
    content: 'Elektrownia parowo‑gazowa z dwuciśnieniowym kotłem odzysknicowym i turbiną parową z niezależnym generatorem',
    followCursor: true
});

const playMachinesSound = (n) => {
    if(!audioPlaying) {
        audio = new Audio(`./audio/${machinesAudios[n]}`);
        audio.play();
        audioPlaying = true;
    }
}

const stopMachinesSound = () => {
    audio.pause();
    audioPlaying = false;
}

const playIntro = (n) => {
    if(!audioPlaying) {
        audio = new Audio(`./audio/${n}.mp3`);
        audio.play();
        audioPlaying = true;
    }
}

const playModalIntro = (n) => {
    let file;

    if(n === 0) {
        file = './audio/3-extra.mp3';
    }
    else {
        file = './audio/4-extra.mp3';
    }

    audio = new Audio(file);
    audio.play();
    audioPlaying = true;
}

const ex1Start = () => {
    hideElement(ex1StartBtn);

    ex1AnimationImg.setAttribute('src', './img/komin5.png');

    setTimeout(() => {
        ex1TableImage.style.width = '0';
        ex1AnimationContent.style.width = '80%';

        showElement(ex1Table);
    }, 1000);
}

const ex2Start = () => {
    hideElement(ex2StartBtn);

    ex2AnimationImg.setAttribute('src', './img/pyl3.png');

    setTimeout(() => {
        ex2AnimationImg.setAttribute('src', './img/pyl2.png');
    }, 4000);

    setTimeout(() => {
        ex2TableImage.style.width = '0';
        ex2AnimationContent.style.width = '80%';

        showElement(ex2Table);
    }, 1000);
}

const showEx1Animation = () => {
    setTimeout(() => {
        ex1AnimationImg.setAttribute('src', './img/komin2.png');

        setTimeout(() => {
            ex1AnimationImg.setAttribute('src', './img/komin3.png');

            setTimeout(() => {
                ex1AnimationImg.setAttribute('src', './img/komin4.png');
                showElement(ex1StartBtn);
            }, 2000);
        }, 2000);
    }, 2000);
}

const showEx2Animation = () => {
    setTimeout(() => {
        ex2AnimationImg.setAttribute('src', './img/komin2.png');

        setTimeout(() => {
            ex2AnimationImg.setAttribute('src', './img/komin3.png');

            setTimeout(() => {
                ex2AnimationImg.setAttribute('src', './img/pyl1.png');
                showElement(ex2StartBtn);
            }, 2000);
        }, 2000);
    }, 2000);
}

const ex1TableChange = () => {
    if(table1Inputs[0].value.trim() === '20,98' &&
        table1Inputs[1].value.trim() === '2,0' &&
        table1Inputs[2].value.trim() === '0,0' &&
        table1Inputs[3].value.trim() === '0,7') {
        showElement(questionBoxes[0]);
    }
}

const ex2TableChange = () => {
    if(table2Inputs[0].value.trim() === '12,0' &&
        table2Inputs[1].value.trim() === '38,0') {
        showElement(questionBoxes[1]);
    }
}

const yes = (n) => {
    hideElement(questionOptions[n]);
    showElement(questionRightFeedbacks[n]);

    if(n === 2) {
        showModal(modals[0]);
    }
    else if(n === 3) {
        showModal(modals[1]);
    }
}

const no = (n) => {
    hideElement(questionOptions[n]);
    showElement(questionWrongFeedbacks[n]);
}

const modalYes = (n) => {
    hideElement(questionOptionsExtra[n]);
    showElement(questionRightFeedbacksExtra[n]);
}

const modalNo = (n) => {
    hideElement(questionOptionsExtra[n]);
    showElement(questionWrongFeedbacksExtra[n]);
}

const back = (n, fromStart = false) => {
    hideElement(questionBoxes[n]);
    hideElement(questionRightFeedbacks[n]);
    hideElement(questionWrongFeedbacks[n]);
    showElement(questionOptions[n]);

    switch(n) {
        case 0:
            backEx1(fromStart);
            break;
        case 1:
            backEx2(fromStart);
            break;
        case 2:
            backEx3(fromStart);
            break;
        case 3:
            break;
        case 4:
            backEx5(fromStart);
            break;
        case 5:
            backEx6(fromStart);
            break;
        case 6:
            backEx7(fromStart);
            break;
        case 7:
            backEx8(fromStart);
            break;
        case 8:
            backEx9(fromStart);
            break;
        default:
            break;
    }
}

const modalBack = (n) => {
    hideElement(questionWrongFeedbacksExtra[n]);
    showElement(questionOptionsExtra[n]);
}

const clearInput = (input) => {
    input.value = '';
}

const backEx1 = (fromStart = false) => {
    hideElement(ex1Table);

    table1Inputs.forEach((item) => {
        clearInput(item);
    });

    ex1AnimationImg.setAttribute('src', './img/komin1.png');

    ex1TableImage.style.width = '45%';
    ex1AnimationContent.style.width = '52%';

    if(!fromStart) {
        showEx1Animation();
    }
}

const backEx2 = (fromStart = false) => {
    hideElement(ex2Table);

    table2Inputs.forEach((item) => {
        clearInput(item);
    });

    ex2AnimationImg.setAttribute('src', './img/komin1.png');

    ex2TableImage.style.width = '45%';
    ex2AnimationContent.style.width = '52%';

    if(!fromStart) {
        showEx2Animation();
    }
}

const backEx3 = (fromStart = false) => {
    showElement(ex3StartBtn);

    ex3Image.setAttribute('src', './img/miernik-halasu-1.png');

    hideElement(modals[0]);
    hideElement(questionRightFeedbacksExtra[0]);
    hideElement(questionWrongFeedbacksExtra[0]);
    showElement(questionOptionsExtra[0]);
}

const backEx5 = (fromStart = false) => {
    showElement(ex5StartBtn);

    ex5Image.setAttribute('src', './img/krzemionka1.png');
}

const backEx6 = (fromStart = false) => {
    showElement(ex6StartBtn);

    ex6Image.setAttribute('src', './img/kondensator-1.png');
}

const backEx7 = (fromStart = false) => {
    showElement(ex7StartBtn);

    ex7Image.setAttribute('src', './img/rura1.png');
}

const backEx8 = (fromStart = false) => {
    showElement(ex8StartBtn);

    ex8Image.setAttribute('src', './img/stacja1.png');
}

const backEx9 = (fromStart = false) => {
    ex9AnimationImg.setAttribute('src', './img/miernik-drgan-1.png');

    ex9TableImage.style.width = '45%';
    ex9AnimationContent.style.width = '52%';

    showElement(ex9StartBtn);
}

const startEx3 = () => {
    hideElement(ex3StartBtn);

    const audio = new Audio('./audio/dzwiek-3.mp3');
    audio.play();

    setTimeout(() => {
        audio.pause();
    }, 5000);

    ex3Image.setAttribute('src', './img/miernik-halasu-2.png');
    setTimeout(() => {
        showElement(questionBoxes[2]);
    }, 1000);
}

const startEx5 = () => {
    hideElement(ex5StartBtn);

    ex5Image.setAttribute('src', './img/krzemionka2.png');

    setTimeout(() => {
        ex5Image.setAttribute('src', './img/krzemionka3.png');

        showElement(questionBoxes[4]);
    }, 2000);
}

const startEx6 = () => {
    hideElement(ex6StartBtn);

    ex6Image.setAttribute('src', './img/kondensator-2.png');

    setTimeout(() => {
        showElement(questionBoxes[5]);
    }, 1000);
}

const startEx7 = () => {
    hideElement(ex7StartBtn);

    ex7Image.setAttribute('src', './img/rura2.png');

    setTimeout(() => {
        ex7Image.setAttribute('src', './img/rura3.png');

        showElement(questionBoxes[6]);
    }, 2000);
}

const startEx8 = () => {
    hideElement(ex8StartBtn);

    ex8Image.setAttribute('src', './img/stacja2.png');

    setTimeout(() => {
        ex8Image.setAttribute('src', './img/stacja3.png');

        showElement(questionBoxes[7]);
    }, 2000);
}

const startEx9 = () => {
    hideElement(ex9StartBtn);

    ex9AnimationImg.setAttribute('src', './img/miernik-drgan-2.png');

    const audio = new Audio('./audio/dzwiek-9.mp3');
    audio.play();

    setTimeout(() => {
        audio.pause();
    }, 5000);

    setTimeout(() => {
        ex9TableImage.style.width = '0';
        ex9AnimationContent.style.width = '80%';

        showElement(questionBoxes[8]);
    }, 1000);
}
