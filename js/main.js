'use strict';

const navbar_loginout = document.querySelector('#navbar__loginout');
const login_btn = document.querySelector('#login__btn');
const close_btn = document.querySelector('#close__btn');
const popup = document.querySelector('#popup');
const username = document.querySelector('#navbar__username');
const form = document.querySelector('#form');
const USERNAME_KEY = "username";

function HandleCloseBtn() {
    popup.classList.add('hidden');
}

function HandleLoginBtn() {
    popup.classList.remove('hidden');
}

function HandleLogoutBtn() {
    localStorage.removeItem(USERNAME_KEY);
    navbar_loginout.innerText = '로그인'
    username.classList.add('hidden_no_transition');
}

function HandleSubmit(e) {
    e.preventDefault();

    const login_id = document.querySelector('#id');
    const login_password = document.querySelector('#password');
    const id = login_id.value;
    const password = login_password.value
    
    if (id == '' || password == '') {
        alert('아이디 혹은 비밀번호를 입력해주세요');
        return;
    }
    
    localStorage.setItem(USERNAME_KEY, id);
    username.classList.remove('hidden_no_transition');
    popup.classList.add('hidden');
    username.innerText = `반갑습니다 ${id}님!`;
    navbar_loginout.innerText = '로그아웃';
    
}

function CheckLogin () {
    if (localStorage.getItem(USERNAME_KEY) != null) {
        navbar_loginout.innerText = '로그아웃'
        username.innerText = `반갑습니다 ${localStorage.getItem(USERNAME_KEY)}님!`
        username.classList.remove('hidden');
    } else {
        navbar_loginout.innerText = '로그인';
    }
}

function Login_out () {
    if (navbar_loginout.innerText == '로그인') {
        HandleLoginBtn();
    } else {
        HandleLogoutBtn();
    }
}

CheckLogin();
navbar_loginout.addEventListener('click', Login_out);
close_btn.addEventListener('click', HandleCloseBtn);
form.addEventListener('submit', HandleSubmit);

