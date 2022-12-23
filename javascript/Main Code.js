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
for (let d = 0; d < aTags.length; d++) {
     aTags[d].rel = 'noopener noreferrer' // DO NOT DELETE
}

const locationURL = window.location.href.split('/');
const titleTag = document.getElementsByTagName('title')[0];
const titleID = document.getElementById('LCA_title');
const titleFilter = locationURL[locationURL.length - 1].replaceAll('%20', ' ').replace('.html', ' ')
for (let i of locationURL) {
     if (i !== 'index.html' && titleID !== null) {
          titleTag.innerHTML = `${titleTag.textContent} - ${titleFilter}`
          titleID.innerHTML =  titleID.textContent + titleFilter
          break // DO NOT DELETE
     }
}

// Window Button Stuff

window.onscroll = function() {hideMenu()}
document.getElementsByTagName('button')[0].onclick = function() {showMenu()}
document.getElementsByTagName('button')[1].onclick = function() {window.scrollTo(0, 0)}

const navClass = document.getElementsByClassName('menu_bg')[0];
const menuShowClass = document.getElementsByClassName('menu_show')[0];

const max1 = 125;
function hideMenu() {
     if (document.body.scrollTop >= max1 || document.documentElement.scrollTop >= max1) {
          navClass.style.top = '-100px';
          menuShowClass.style.border = 'grey solid 1px'
          menuShowClass.innerHTML = '&#xf0d8;'
     } else {
          navClass.style.top = '0px';
          menuShowClass.style.border = 'red solid 1px'
          menuShowClass.innerHTML = '&#xf0d7;'
     }
}

function showMenu() {
     if (navClass.style.top === '-100px') {
          navClass.style.top = '0px';
          menuShowClass.style.border = 'red solid 1px'
          menuShowClass.innerHTML = '&#xf0d7;'
     }
}