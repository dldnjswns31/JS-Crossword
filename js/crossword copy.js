import {RENDERING, quizQ} from './fruit_vegetable.js';

// DOM
const crossword = document.querySelector('.crossword > ul');

const GAME_ROWS = 8;
const GAME_COLS = 8;
const GAME_END = 2;
let time = false;
let time_interval;

const description_title = document.querySelector('#description__title');
const description_text = document.querySelectorAll('.description__text');
const hori_keybox = document.querySelector('.hori__keybox');
const verti_keybox = document.querySelector('.verti__keybox');
const hori_key = document.querySelector('.hori__key');
const verti_key = document.querySelector('.verti__key');
const horikey_num = document.querySelector('.horikey__num');
const vertikey_num = document.querySelector('.vertikey__num');
const answer_input = document.querySelectorAll('.answer__input');
const answer_btn = document.querySelectorAll('.answer__btn');
const popup = document.querySelector('.popup');
const popup_text = document.querySelector('.popup__text');
const popup_btn = document.querySelector('.popup__btn');
const hint_Btn = document.querySelectorAll('.hint__Btn')
const timer = document.querySelector('#timer');

function init() {
    for(let i = 0; i<GAME_ROWS; i++){
        prependNewLine();
    }
}

function prependNewLine(){
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    for(let j = 0; j <GAME_COLS; j++){
        const matrix = document.createElement('li');
        matrix.setAttribute('class', 'blank');
        ul.prepend(matrix);
    }
    li.prepend(ul);
    crossword.prepend(li);
}

init();


// 빈 칸 렌더링
const matrix = document.querySelectorAll('.blank');

function RenderBlock() {
    for (let i=0; i<matrix.length; i++){
        if (RENDERING[i] == 'x') {
            matrix[i].setAttribute('class','blackbox');
        } else {
            matrix[i].innerText = '?'
            matrix[i].setAttribute('data-num', RENDERING[i]);
        }
    }
}

const blanks = document.querySelectorAll('.blank');
blanks.forEach(element => element.addEventListener('click', HandleBlankClick));

// 빈 칸 클릭 시 문제 내용 띄우기
function HandleBlankClick(e) {
    if (e.target.className == 'blackbox') {
        return;
    }

    if (time == false) {
        CheckTime();
        time = true;
    }

    let loc = e.target.getAttribute('data-num');
    let quiz_list;

    loc = loc.split(' ');

    if(loc.length==2){
        quiz_list = 1;
    } else {
        quiz_list = 0;
    } 

    answer_input.forEach(e => e.value = '');
    description_title.classList.add('hidden');
    description_text.forEach(element => element.classList.add('hidden'));
    hori_keybox.classList.add('hidden');
    verti_keybox.classList.add('hidden');


    for(let i=0; i<=quiz_list; i++){
        const location = loc[i];
        const quiz_num = 'quizQ.'+location+'.num';
        const quiz_text = 'quizQ.'+location+'.quiz';
        if(location.indexOf('r') != -1) {
            description_text[0].classList.remove('hidden');
            horikey_num.textContent = eval(quiz_num);
            horikey_num.parentNode.setAttribute('data-num', location);
            hori_keybox.classList.remove('hidden');
            hori_keybox.setAttribute('data-num', location);
            hori_key.textContent = eval(quiz_text);
        }
        if(location.indexOf('c') != -1) {
            description_text[1].classList.remove('hidden');
            vertikey_num.textContent = eval(quiz_num);
            vertikey_num.parentNode.setAttribute('data-num', location);
            verti_keybox.classList.remove('hidden');
            verti_keybox.setAttribute('data-num', location);
            verti_key.textContent = eval(quiz_text);
        }
    }
    answer_btn.forEach(element => element.addEventListener('click', AnswerBtnClick));
}

// 입력받은 값과 정답 비교
function AnswerBtnClick(e) {
    const location = e.target.parentNode.getAttribute('data-num');
    const keybox_name = e.target.parentNode.className;    
    let hori_verti_divide;
    const ConfirmBtnClick = () => {
        HandleConfirmBtnClick(hori_verti_divide.value, keybox_name)
        popup_btn.removeEventListener('click',ConfirmBtnClick);
    }
    
    if (keybox_name == 'hori__keybox') {
        hori_verti_divide = document.querySelectorAll('.answer__input')
        hori_verti_divide = hori_verti_divide[0];
    } else {
        hori_verti_divide = document.querySelectorAll('.answer__input')
        hori_verti_divide = hori_verti_divide[1];
    }
    
    if (hori_verti_divide.value == eval('quizQ.'+location+'.answer')) {
        popup.classList.remove('invisible');
        popup_text.innerText = '정답이에요!'
        popup_btn.addEventListener('click', ConfirmBtnClick);
    } else {
        popup.classList.remove('invisible');
        popup_text.innerText = '오답이에요 ㅠㅠ'
        popup_btn.addEventListener('click', () => popup.classList.add('invisible'));
    }
}

// 확인 버튼 클릭 시 빈칸에 단어 입력
function HandleConfirmBtnClick(val, name) {
    let keyL = 0;
    let GAME_SCORE = 0;
    
    const hori_data = hori_keybox.getAttribute('data-num');
    const verti_data = verti_keybox.getAttribute('data-num');

    popup.classList.add('invisible');
    
    if (name == 'hori__keybox'){
        for(let i=0; i<blanks.length; i++){
            const blank_location = blanks[i].getAttribute('data-num');
            if(blank_location == null) {
                continue;
            }
            if(blank_location.indexOf(hori_data) != -1) {
                blanks[i].classList.add('correct');
                blanks[i].innerHTML = '<span class="blank__span" onclick="event.stopPropagation()">'+val.substr(keyL,1)+'</span>';
                keyL++;
            }
        description_text[0].classList.add('hidden');
        hori_keybox.classList.add('hidden');
        }
    } else {
        for(let i=0; i<blanks.length; i++){
            let blank_location = blanks[i].getAttribute('data-num');
    
            if(blank_location == null) {
                continue;
            }
            if(blank_location.indexOf(verti_data) != -1) {
                blanks[i].classList.add('correct');
                blanks[i].innerHTML = '<span class="blank__span" onclick="event.stopPropagation()">'+val.substr(keyL,1)+'</span>';        
                keyL++;
            }
        }
        description_text[1].classList.add('hidden');
        verti_keybox.classList.add('hidden');
    }
    for(let i=0; i<blanks.length; i++) {
        if (blanks[i].getAttribute('class').indexOf('correct') != -1) {
            GAME_SCORE++;
            if (GAME_SCORE == GAME_END) {
                popup.classList.remove('invisible');
                popup_text.innerText = '퀴즈를 다 푸셨어요. 축하드려요!'
                popup_btn.addEventListener('click', () => popup.classList.add('invisible'));
                clearInterval(time_interval);
            }
        }
    }
}

hint_Btn.forEach(element => element.addEventListener('click', HandleHintClick))

function HandleHintClick(e) {
    const popup_hint = document.querySelector('.popup__hint');
    const popup_hint_text = document.querySelector('.popup__hint__text');
    const popup_hint_btn = document.querySelector('.popup__hint__btn');
    const location = e.target.parentNode.getAttribute('data-num');

    popup_hint.classList.remove('invisible');
    popup_hint_text.innerText = eval('quizQ.'+location+'.hint');
    popup_hint_btn.addEventListener('click', () => popup_hint.classList.add('invisible'));
    
}

function CheckTime(e) {
    let sec = 1;
    let min = 0;
    const span = document.querySelectorAll('#timer span');
    const minSpan = span[0];
    const secSpan = span[1];
    
    time_interval = setInterval(function() {
        secSpan.innerText = sec;
        minSpan.innerText = min;
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
    },1000);
}

RenderBlock();