const fakethin1 = '<div class="fake-hr-thin1"></div>';
const h1Tags = document.getElementsByTagName('h1');
for (let i = 0; i < h1Tags.length; i++) {
     h1Tags[i].innerHTML = h1Tags[i].textContent + fakethin1;
}

const h2Tags = document.getElementsByTagName('h2');
for (let i = 0; i < h2Tags.length; i++) {
     h2Tags[i].innerHTML = h2Tags[i].textContent + fakethin1;
}

const aTags = document.getElementsByTagName('a');
for (let i = 8; i < aTags.length; i++) {
     aTags[i].target = '_blank';
}  

// Window Button Stuff

const navTag = document.getElementsByTagName('nav')[0];
const showTag = document.getElementsByClassName('menu_show')[0];
window.onscroll = function() {showMenu(), showTop()};

const max1 = 100;
function showMenu() {
     if (document.body.scrollTop > max1 || document.documentElement.scrollTop > max1) {
          navTag.style.top = '-100px';
          showTag.innerHTML = '&#xf0d7;';
          showTag.style.border = 'grey solid 1px';
     } else {
          navTag.style.top = '0px';
          showTag.innerHTML = '&#xf0d8;';
          showTag.style.border = 'red solid 1px';
     }
}

const max2 = 2000;
const topTag = document.getElementsByClassName('menu_top')[0];
function showTop() {
     if (document.body.scrollTop > max2 || document.documentElement.scrollTop > max2) {
          topTag.style.border = 'grey solid 1px'
     } else {
          topTag.style.border = 'red solid 1px' 
     }
}

document.getElementsByClassName('menu_show')[0].onclick = function() {showRed()}
document.getElementsByClassName('menu_top')[0].onclick = function() {goTop()}
function showRed() {
     navTag.style.top = '0px';
     showTag.innerHTML = '&#xf0d8;';
     showTag.style.border = 'red solid 1px';
}

function goTop() {
     if (document.body.scrollTop > max2 || document.documentElement.scrollTop > max2) {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;  
     }
}

// Setting the current state

const bodyTag = document.getElementsByTagName('body');
const metaTag = document.getElementsByTagName('meta');
const codeTag = document.getElementsByTagName('code');

const menuShow = document.getElementsByClassName('menu_show');
const menuTop = document.getElementsByClassName('menu_top');

const thin1Class = document.getElementsByClassName('fake-hr-thin1');
const thin2Class = document.getElementsByClassName('fake-hr-thin2');
const thickClass = document.getElementsByClassName('fake-hr-thick');

const ParseThemeContent = JSON.parse(localStorage.getItem('ThemeContent'))
if (ParseThemeContent.bodyColor == 'white') {
     bodyTag[0].style.backgroundColor = 'white'
     metaTag[2].content = 'light'

     menuShow[0].style.backgroundColor = '#e0e0e0'
     menuTop[0].style.backgroundColor = '#e0e0e0'

     for (let i = 0; i < codeTag.length; i++) {
          codeTag[i].style.backgroundColor = '#c1cfe6'
          codeTag[i].style.border = '#c1cfe6 solid 10px'
          codeTag[i].style.borderWidth = 'thin 3px'
     }

     thin2Class[0].style.backgroundColor = 'black'
     for (let i = 0; i < thin1Class.length; i++) {
          thin1Class[i].style.backgroundColor = 'black'
     }
     for (let i = 0; i < thickClass.length; i++) {
          thickClass[i].style.backgroundColor = 'black'
     }
} else {
     bodyTag[0].style.backgroundColor = 'black'
     metaTag[2].content = 'dark'

     menuShow[0].style.backgroundColor = 'black'
     menuTop[0].style.backgroundColor = 'black'

     for (let i = 0; i < codeTag.length; i++) {
          codeTag[i].style.backgroundColor = '#464b53'
          codeTag[i].style.border = '#464b53 solid 10px'
          codeTag[i].style.borderWidth = 'thin 3px'
     }
}