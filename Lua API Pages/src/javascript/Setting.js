document.getElementsByClassName('icon-bg')[0].onclick = function() {changeTheme()};
document.getElementsByClassName('icon-bg')[1].onclick = function() {changeCodeTheme()};

const bodyTag = document.getElementsByTagName('body');
const scroTag = document.getElementsByTagName('meta');

const setClass = document.getElementsByClassName('setting');
const subClass = document.getElementsByClassName('sub-desc');
const iconBgClass = document.getElementsByClassName('icon-bg');
const iconBGBackClass = document.getElementsByClassName('icon-bgBack');
const codeTClass = document.getElementsByClassName('code-title');

function changeTheme() {
     //#222426
     if (bodyTag[0].style.backgroundColor === 'black') {
          localStorage.setItem('bodyBG', bodyTag[0].style.backgroundColor = 'white')
          localStorage.setItem('metaTheme', scroTag[2].content = 'light')
          localStorage.setItem('backBG', iconBGBackClass[0].style.backgroundColor = 'rgb(214, 214, 214)')

          for (let i = 0; i < setClass.length || subClass.length || iconBgClass.length; i++) {
               localStorage.setItem('settingBG', setClass[i].style.backgroundColor = 'rgb(214, 214, 214)')
               localStorage.setItem('iconBG', iconBgClass[i].style.backgroundColor = 'white')
               localStorage.setItem('subDescBG', subClass[i].style.color = 'rgb(88, 88, 88)')
          }
     } else {    
          localStorage.setItem('bodyBG', bodyTag[0].style.backgroundColor = 'black')
          localStorage.setItem('metaTheme', scroTag[2].content = 'dark')
          localStorage.setItem('backBG', iconBGBackClass[0].style.backgroundColor = 'rgb(36, 36, 36)')

          for (let i = 0; i < setClass.length || subClass.length || iconBgClass.length; i++) {
               localStorage.setItem('settingBG', setClass[i].style.backgroundColor = 'rgb(36, 36, 36)')
               localStorage.setItem('subDescBG', subClass[i].style.color = 'rgb(163, 163, 163)')
               localStorage.setItem('iconBG', iconBgClass[i].style.backgroundColor = 'black')
          }
     }
}

function changeCodeTheme() {
     if (codeTClass[0].textContent === 'Github Dark High Contrast') {
          localStorage.setItem('codeTitle', codeTClass[0].innerHTML = 'Dark High Contrast')
     } else {
          localStorage.setItem('codeTitle', codeTClass[0].innerHTML = 'Github Dark High Contrast')          
     }     
}

bodyTag[0].style.backgroundColor = localStorage.getItem('bodyBG')
scroTag[2].content = localStorage.getItem('metaTheme')
  
if (localStorage.getItem('bodyBG') != null) {
     bodyTag[0].style.backgroundColor = localStorage.getItem('bodyBG')
     scroTag[2].content = localStorage.getItem('metaTheme')
     iconBGBackClass[0].style.backgroundColor = localStorage.getItem('backBG')
     
     for (let i = 0; i < setClass.length || subClass.length || iconBgClass.length; i++) {
          setClass[i].style.backgroundColor = localStorage.getItem('settingBG')
          subClass[i].style.color = localStorage.getItem('subDescBG')
          iconBgClass[i].style.backgroundColor = localStorage.getItem('iconBG')
     }
} else {
     bodyTag[0].style.backgroundColor = 'black'
     scroTag[2].content = 'dark'
     iconBGBackClass[0].style.backgroundColor = 'rgb(36, 36, 36)'
     
     for (let i = 0; i < setClass.length || subClass.length || iconBgClass.length; i++) {
          setClass[i].style.backgroundColor = 'rgb(36, 36, 36)'
          subClass[i].style.color = 'rgb(163, 163, 163)'
          iconBgClass[i].style.backgroundColor = 'black'
     }
}