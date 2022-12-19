const disH3Tags = document.getElementsByClassName('displayH3');
const disDescTags = document.getElementsByClassName('displayDesc');

const optBG = document.getElementsByClassName('optionBG');
const optIconBG = document.getElementsByClassName('optionIconBG');

const HeadDisplays = ['displayHead', 'displayHeadDesc', 'displayHeadLine', 'displayH1', 'displayH1Line', 'displayThickLine']
const ThemeContent = {
     bodyColor: "black",
     metaColor: "dark",
     setColor: "rgb(36, 36, 36)",
     disBGColor: "black",
     iconBGColor: "black",
     iconBGBackColor: "black",
     HeDisplays: "white",
     disH3Tags: "white",
     disDescTags: "white",
     optBG: "black",
     optIconBG: "black"
}

function changeLightTheme() {
     document.getElementsByTagName('body')[0].style.backgroundColor = ThemeContent.bodyColor = 'white'
     document.getElementsByTagName('meta')[2].content = ThemeContent.metaColor = 'light'

     document.getElementsByClassName('setting')[0].style.backgroundColor = ThemeContent.setColor = '#e0e0e0'
     document.getElementsByClassName('displayBG')[0].style.backgroundColor = ThemeContent.disBGColor = 'white'
     document.getElementsByClassName('icon-bg')[0].style.backgroundColor = ThemeContent.iconBGColor = 'white'
     document.getElementsByClassName('icon-bgBack')[0].style.backgroundColor = ThemeContent.iconBGBackColor = 'white'

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = ThemeContent.HeDisplays = 'black'
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = ThemeContent.disH3Tags = 'black'
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = ThemeContent.disDescTags = 'black'
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = ThemeContent.optBG = 'white'
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = ThemeContent.optIconBG = 'white'
     }

     localStorage.setItem('ThemeContent', JSON.stringify(ThemeContent))
}

function changeDarkTheme() {
     document.getElementsByTagName('body')[0].style.backgroundColor = ThemeContent.bodyColor = 'black'
     document.getElementsByTagName('meta')[2].content = ThemeContent.metaColor = 'dark'

     document.getElementsByClassName('setting')[0].style.backgroundColor = ThemeContent.setColor = 'rgb(36, 36, 36)'
     document.getElementsByClassName('displayBG')[0].style.backgroundColor = ThemeContent.disBGColor = 'black'
     document.getElementsByClassName('icon-bg')[0].style.backgroundColor = ThemeContent.iconBGColor = 'black'
     document.getElementsByClassName('icon-bgBack')[0].style.backgroundColor = ThemeContent.iconBGBackColor = 'black'

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = ThemeContent.HeDisplays = 'white'
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = ThemeContent.disH3Tags = 'white'
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = ThemeContent.disDescTags = 'white'
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = ThemeContent.optBG = 'black'
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = ThemeContent.optIconBG = 'black'
     }

     localStorage.setItem('ThemeContent', JSON.stringify(ThemeContent))
}

function changeDimmedTheme() {
     alert('WORK IN PROGRESS (hes that lazy to make a dimmed theme)')
}

const ParseThemeContent = JSON.parse(localStorage.getItem('ThemeContent'))
if (ParseThemeContent !== null || ParseThemeContent !== undefined) {
     document.getElementsByTagName('body')[0].style.backgroundColor = ParseThemeContent.bodyColor 
     document.getElementsByTagName('meta')[2].content = ParseThemeContent.metaColor

     document.getElementsByClassName('setting')[0].style.backgroundColor = ParseThemeContent.setColor
     document.getElementsByClassName('displayBG')[0].style.backgroundColor = ParseThemeContent.disBGColor
     document.getElementsByClassName('icon-bg')[0].style.backgroundColor = ParseThemeContent.iconBGColor
     document.getElementsByClassName('icon-bgBack')[0].style.backgroundColor = ParseThemeContent.iconBGBackColor

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = ParseThemeContent.HeDisplays
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = ParseThemeContent.disH3Tags
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = ParseThemeContent.disDescTags
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = ParseThemeContent.optBG
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = ParseThemeContent.optIconBG
     }
}