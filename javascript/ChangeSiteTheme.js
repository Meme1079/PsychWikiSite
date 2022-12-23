const bodyTag = document.getElementsByTagName('body')[0];
const metaTag = document.getElementsByTagName('meta')[2];
const codeTag = document.getElementsByTagName('code');

const menuShow = document.getElementsByClassName('menu_show');
const menuTop = document.getElementsByClassName('menu_top');

const thin1Class = document.getElementsByClassName('fake-hr-thin1');
const thin2Class = document.getElementsByClassName('fake-hr-thin2');
const thickClass = document.getElementsByClassName('fake-hr-thick');

const ParseSiteTheme = JSON.parse(localStorage.getItem('SiteThemeValue'))
if (ParseSiteTheme.GlobalLighty[0] == 'white') {
     bodyTag.style.backgroundColor = 'white'
     metaTag.content = 'light'

     menuShow[0].style.backgroundColor = '#e0e0e0'
     menuTop[0].style.backgroundColor = '#e0e0e0'

     for (let i of window.location.href.split('/')) {
          if (i !== 'index.html' || i !== 'Settings.html') {
               for (let i = 0; i < codeTag.length; i++) {
                    codeTag[i].style.backgroundColor = '#c1cfe6'
                    codeTag[i].style.border = '#c1cfe6 solid 10px'
                    codeTag[i].style.borderWidth = 'thin 3px'
               }

               if (thin2Class.length > 0) {
                    thin2Class[0].style.backgroundColor = 'black' 
               }
               for (let i = 0; i < thin1Class.length; i++) { 
                    thin1Class[i].style.backgroundColor = 'black' 
               }
               for (let i = 0; i < thickClass.length; i++) { 
                    thickClass[i].style.backgroundColor = 'black' 
               } 
               break
          }
     }
}