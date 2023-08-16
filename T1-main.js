const tickAnswers = {
    1: 'د',2: 'ب',3: 'أ',4: 'ب',5: 'أ',6: 'أ',7: 'ب',8: 'ب',9: 'ب',10: 'ب',11: 'ب',12: 'ب',13: 'د',14: 'أ',15: 'ب',16: 'د',17: 'ب',18: 'أ',19: 'ج',20: 'ب',21: 'أ',22: 'ب',23: 'ب',24: 'ب',25: 'أ',26: 'أ',27: 'ب',28: 'أ',29: 'د',30: 'ب',31: 'أ',32: 'ب',33: 'أ',34: 'ب',35: 'أ',36: 'ب',37: 'أ',38: 'أ',39: 'د',40: 'ب',41: 'أ',42: 'ب',43: 'أ',44: 'ب',45: 'أ',46: 'أ',47: 'أ',48: 'ب',49: 'أ',50: 'ب',51: 'ج',52: 'د',53: 'أ',54: 'د',55: 'ج',56: 'أ',57: 'د',58: 'ب',59: 'د',60: 'أ',61: 'ب',62: 'د',63: 'ج',64: 'أ',65: 'أ',66: 'ج',67: 'أ',68: 'أ',69: 'أ',70: 'أ',71: 'ج',72: 'أ',73: 'أ',74: 'أ',75: 'أ',76: 'ب',77: 'أ',78: 'أ',79: 'ج',80: 'ب',81: 'ب',82: 'ج',83: 'ج',84: 'د',85: 'أ',86: 'أ',87: 'أ',88: 'أ',89: 'ج',90: 'أ',91: 'أ',92: 'د',93: 'أ',94: 'أ',95: 'أ',96: 'أ',97: 'أ',98: 'أ',99: 'أ',100: 'أ',101: 'أ',102: 'ج',103: 'ب',104: 'أ',105: 'أ',106: 'أ',107: 'ب',108: 'أ',109: 'أ',110: 'ب',111: 'ب',112: 'أ',113: 'أ',114: 'أ',115: 'د',116: 'أ',117: 'أ',118: 'أ',119: 'د',120: 'أ',121: 'أ',122: 'ج',123: 'د',124: 'د',125: 'ب',126: 'ج',127: 'أ',128: 'أ',129: 'أ',130: 'أ',131: 'أ',132: 'أ',133: 'أ',134: 'أ',135: 'أ',136: 'ج',137: 'أ',138: 'ج',139: 'أ',140: 'ب',141: 'ب',142: 'ب',143: 'د',144: 'ب',145: 'أ',146: 'أ',147: 'ب',148: 'أ',149: 'أ',150: 'ب',151: 'ب',152: 'أ',153: 'أ',154: 'أ',155: 'ب',156: 'ب',157: 'أ',158: 'ب',159: 'د',160: 'ب',161: 'ج',162: 'د',163: 'أ',164: 'أ',165: 'أ',166: 'أ',167: 'أ',168: 'ب',169: 'د',170: 'أ',171: 'أ',172: 'أ',173: 'أ',174: 'أ',175: 'ب',176: 'أ',177: 'أ',178: 'ب',179: 'أ',180: 'ج',181: 'أ',182: 'أ',183: 'د',184: 'ب',185: 'ب',186: 'ب',187: 'أ',188: 'ج',189: 'د',190: 'د',191: 'ج',192: 'ب',193: 'أ',194: 'أ',195: 'ب',196: 'أ',197: 'ب',198: 'أ',199: 'أ',200: 'أ',201: 'أ',202: 'أ',203: 'أ',204: 'ب',205: 'أ',206: 'أ',207: 'أ',208: 'أ',209: 'ج',210: 'أ',211: 'أ',212: 'د',213: 'أ',214: 'أ',215: 'ب',216: 'أ',217: 'أ',218: 'أ',219: 'ب',220: 'ب',221: 'ب',222: 'ج',223: 'ج',224: 'أ',225: 'أ',226: 'ب',227: 'أ',228: 'د',229: 'ب',230: 'أ',231: 'د',232: 'أ',233: 'أ',234: 'أ',235: 'أ',236: 'أ',237: 'ج',238: 'ب',239: 'أ',240: 'د',241: 'أ',242: 'د',243: 'د',244: 'أ',245: 'أ',246: 'أ',247: 'أ',248: 'أ',249: 'ب',250: 'أ',251: 'ب',252: 'أ',253: 'ج',254: 'أ',255: 'ب',256: 'أ',257: 'أ',258: 'ب',259: 'ج',260: 'أ',261: 'ب',262: 'ب',263: 'أ',264: 'أ',265: 'ب',266: 'أ',267: 'أ',268: 'ب',269: 'أ',270: 'أ',271: 'ج',272: 'ج',273: 'أ',274: 'أ',275: 'أ',276: 'أ',277: 'د',278: 'أ',279: 'أ',280: 'د',281: 'د',282: 'ج',283: 'ج',284: 'د',285: 'أ',286: 'أ',287: 'ب',288: 'ج',289: 'أ',290: 'أ',291: 'ب',292: 'أ',293: 'أ',294: 'أ',295: 'أ',296: 'أ',297: 'ج',298: 'ب',299: 'أ',300: 'ب',
}
let tickAnswer

let answerRecord = {
    'correct': {},
    'wrong': {}
}

const questionsAmount = document.querySelector('.questions-amount')
const timerDuration = document.querySelector('.timer-set')
const testOptionsContainer = document.querySelector('.test-options-container')
function startTest() {
    testOptionsContainer.style.display = 'none'
    generateRandomQuestion()

}


const totalPages = 22
let questionCounter = 1
let questionImageDir
let answerImageDir1
let answerImageDir2

const questionImageElmnt = document.querySelector('.question-q-img')
const answerImageElmnt1 = document.querySelector('.question-a-1-img')
const answerImageElmnt2 = document.querySelector('.question-a-2-img')
function generateRandomQuestion() {
    let randomPage = Math.floor(Math.random() * totalPages)
    let questionLimit
    if(randomPage == 0){
        questionLimit = 12
    }else if (randomPage == 1){
        questionLimit = 14
    }else{
        questionLimit = 13
    }
    let randomQuestion = Math.floor(Math.random() * (questionLimit - 1) + 1)
    let dir = `pages/page_${randomPage}`
    questionImageDir = `${dir}/q/page_${randomPage}_q_${randomQuestion}.png`
    answerImageDir1 = `${dir}/a/page_${randomPage}_a_${randomQuestion}_1.png`
    answerImageDir2 = `${dir}/a/page_${randomPage}_a_${randomQuestion}_0.png`
    if (randomPage == 0){
        tickAnswer = tickAnswers[randomQuestion]
    }else if (randomPage == 1){
        tickAnswer = tickAnswers[randomQuestion + 12]
    }else{
        tickAnswer = tickAnswers[(randomPage - 2) * 13 + 12 + 14 + randomQuestion]
    }
    startTimer(timerDuration.value)
    injectNewQuestion(questionImageDir, answerImageDir1, answerImageDir2)
}
const timerElmnt = document.querySelector('.timer-container > h2')
let timer, time, positiveTimer
function startTimer(duration){
    time = duration
    positiveTimer = 0
    timerElmnt.textContent = time
    timer = setInterval(()=>{
        time--
        positiveTimer++
        timerElmnt.textContent = time
    }, 1000)
}
function injectNewQuestion(questionDir, answerDir1, answerDir2){
    questionImageElmnt.src = questionDir
    answerImageElmnt1.src = answerDir1
    answerImageElmnt2.src = answerDir2
}

const checkElmnt = document.querySelector('.check-pick')
const crossElmnt = document.querySelector('.cross-pick')
let queue = false
function choicePick(pick) {
    
    // Show and hide Tick and Cross
    if(!queue){
        queue = true
        clearInterval(timer)
        if(pick == tickAnswer){
            checkElmnt.classList.toggle('hide')
            checkElmnt.classList.toggle('hide-animation')
            setTimeout(()=>{
                checkElmnt.classList.toggle('hide')
                checkElmnt.classList.toggle('hide-animation')
            }, 500)
            answerRecord['correct'][questionCounter] = {
                "q_src": questionImageElmnt.src,
                "a-1_src": answerImageElmnt1.src,
                "a-0_src": answerImageElmnt2.src,
                'pick': pick,
                'time': positiveTimer,
            }
        }else{
            answerRecord['wrong'][questionCounter] = {
                "q_src": questionImageElmnt.src,
                "a-1_src": answerImageElmnt1.src,
                "a-0_src": answerImageElmnt2.src,
                'pick': pick,
                'correctPick': tickAnswer,
                'time': positiveTimer,
            }
            crossElmnt.classList.toggle('hide')
            crossElmnt.classList.toggle('hide-animation')
            setTimeout(()=>{
                crossElmnt.classList.toggle('hide')
                crossElmnt.classList.toggle('hide-animation')
            }, 500)
        }

        // Hide question, bring A new one
        questionImageElmnt.classList.toggle('hide-animation')
        answerImageElmnt1.classList.toggle('hide-animation')
        answerImageElmnt2.classList.toggle('hide-animation')
    
        setTimeout(()=>{
            if(questionCounter <= parseInt(questionsAmount.value)){
                generateRandomQuestion()
                queue = false
            }else{
                end()
            }
        }, 450)
        setTimeout(()=>{
            
            questionImageElmnt.classList.toggle('hide-animation')
            answerImageElmnt1.classList.toggle('hide-animation')
            answerImageElmnt2.classList.toggle('hide-animation')
        }, 500)
        questionCounter++
    }
    
}

const checkFilterHeaderContainer = document.querySelector('.check-filter-header-container')
const crossFilterHeaderContainer = document.querySelector('.cross-filter-header-container')
const checkBodyElmnt = document.querySelector('.check-filter-body')
const crossBodyElmnt = document.querySelector('.cross-filter-body')
function showFilterBody(filter) {
    if(filter == 'cross'){
        checkBodyElmnt.classList.add('filter-body-hide')
        crossBodyElmnt.classList.remove('filter-body-hide')
        checkFilterHeaderContainer.classList.add('filter-header-container-disabled')
        crossFilterHeaderContainer.classList.remove('filter-header-container-disabled')
    }else if (filter == 'check'){
        checkBodyElmnt.classList.remove('filter-body-hide')
        crossBodyElmnt.classList.add('filter-body-hide')
        checkFilterHeaderContainer.classList.remove('filter-header-container-disabled')
        crossFilterHeaderContainer.classList.add('filter-header-container-disabled')
    }
}

const testResultsContainer = document.querySelector('.test-results-container')
function end() {
    testResultsContainer.style.display = 'flex'
    let timerResultColor
    let resultChoicesElmntsObj
    let possibleResultChoices = ["أ", "ب", "ج", "د"]

    for(let record in answerRecord['correct']){
        if (answerRecord['correct'][record]['time'] > timerDuration.value){
            timerResultColor = `<span class="result-end-time" style="color:red">${answerRecord['correct'][record]['time']}s</span>`
        }else{
            timerResultColor = `<span class="result-end-time" style="color:green">${answerRecord['correct'][record]['time']}s</span>`
        }
        resultChoicesElmntsObj = {
            0: '<div class="result-choice">أ</div>',
            1: '<div class="result-choice">ب</div>',
            2: '<div class="result-choice">ج</div>',
            3: '<div class="result-choice">د</div>',
        }
        for (let i = 0; i < possibleResultChoices.length; i++) {
            if (answerRecord['correct'][record]['pick'] == possibleResultChoices[i]){resultChoicesElmntsObj[i] = `<div class="result-choice correct-result-choice">${possibleResultChoices[i]}</div>`}
        }
        checkBodyElmnt.innerHTML += `
            <div class="result-answer-container">
                <div class="result-header-container" onclick="toggleAnswer(${record})">
                    <p>${record}</p>${timerResultColor}
                </div>
                <div class="result-body-container" id="answer-${record}">
                    <div class="result-body-question-container">
                        <img src="${answerRecord['correct'][record]['q_src']}" class="result-question-img">
                        <img src="${answerRecord['correct'][record]['a-1_src']}" class="result-question-img">
                        <img src="${answerRecord['correct'][record]['a-0_src']}" class="result-question-img">
                    </div>
                    <div class="result-choice-container">
                        ${resultChoicesElmntsObj[0]}
                        ${resultChoicesElmntsObj[1]}
                        ${resultChoicesElmntsObj[2]}
                        ${resultChoicesElmntsObj[3]}
                    </div>
                </div>
            </div>
        `
    }
    for(let record in answerRecord['wrong']){
        if (answerRecord['wrong'][record]['time'] > timerDuration.value){
            timerResultColor = `<span class="result-end-time" style="color:red">${answerRecord['wrong'][record]['time']}s</span>`
        }else{
            timerResultColor = `<span class="result-end-time" style="color:green">${answerRecord['wrong'][record]['time']}s</span>`
        }
        resultChoicesElmntsObj = {
            0: '<div class="result-choice">أ</div>',
            1: '<div class="result-choice">ب</div>',
            2: '<div class="result-choice">ج</div>',
            3: '<div class="result-choice">د</div>',
        }
        for (let i = 0; i < possibleResultChoices.length; i++) {
            if (answerRecord['wrong'][record]['correctPick'] == possibleResultChoices[i]){resultChoicesElmntsObj[i] = `<div class="result-choice correct-result-choice">${possibleResultChoices[i]}</div>`}
            if (answerRecord['wrong'][record]['pick'] == possibleResultChoices[i]){resultChoicesElmntsObj[i] = `<div class="result-choice wrong-result-choice">${possibleResultChoices[i]}</div>`}
        }
        crossBodyElmnt.innerHTML += `
            <div class="result-answer-container">
                <div class="result-header-container" onclick="toggleAnswer(${record})">
                    <p>${record}</p>${timerResultColor}
                </div>
                <div class="result-body-container" id="answer-${record}">
                    <div class="result-body-question-container">
                        <img src="${answerRecord['wrong'][record]['q_src']}" class="result-question-img">
                        <img src="${answerRecord['wrong'][record]['a-1_src']}" class="result-question-img">
                        <img src="${answerRecord['wrong'][record]['a-0_src']}" class="result-question-img">
                    </div>
                    <div class="result-choice-container">
                        ${resultChoicesElmntsObj[0]}
                        ${resultChoicesElmntsObj[1]}
                        ${resultChoicesElmntsObj[2]}
                        ${resultChoicesElmntsObj[3]}
                    </div>
                </div>
            </div>
        `
    }
    let reloadButtonElmnt = `
        <div class="result-retry-button-container">
            <div class="result-retry-button" onclick="reloadPage()">
                <img src="./imgs/reload.png"><p>retry?</p>
            </div>
        </div>
    `
    checkBodyElmnt.innerHTML += reloadButtonElmnt
    crossBodyElmnt.innerHTML += reloadButtonElmnt
}

document.querySelectorAll('.result-body-container').forEach(elmnt =>{
    elmnt.onclick = toggleAnswer(elmnt)
})
function toggleAnswer(id) {
    let answerBodyElmnt = document.querySelector(`#answer-${id}`)
    if(!answerBodyElmnt.classList.contains('result-answer-container-open')){
        answerBodyElmnt.classList.toggle('result-answer-container-show')
        setTimeout(()=>{answerBodyElmnt.classList.toggle('result-answer-container-open')}, 50)
    }else{
        answerBodyElmnt.classList.toggle('result-answer-container-open')
        
        setTimeout(()=>{answerBodyElmnt.classList.toggle('result-answer-container-show')}, 200)
    }
}
function reloadPage(){
    location.reload()
}