const bodyTag = document.getElementsByTagName('body')[0];
const metaClass = document.getElementsByTagName('meta')[2];

const optionBGClass = document.getElementsByClassName('optionIconBG');
const settClass = document.getElementsByClassName('setting')[0];
const DisBGClass = document.getElementsByClassName('displayBG')[0];
const IconBGClass = document.getElementsByClassName('icon-bg')[0];
const IconBackBgClass = document.getElementsByClassName('icon-bgBack')[0];

const disH3Tags = document.getElementsByClassName('displayH3');
const disDescTags = document.getElementsByClassName('displayDesc');
const optBG = document.getElementsByClassName('optionBG');
const optIconBG = document.getElementsByClassName('optionIconBG');

const HeadDisplays = ['displayHead', 'displayHeadDesc', 'displayHeadLine', 'displayH1', 'displayH1Line', 'displayThickLine']
let SiteThemeValue = {
     GlobalLighty: ["black", "white"],
     metaTheme: "dark",
     settingBG: "rgb(36, 36, 36)",
     optionBordVal: ["grey solid 1px", "green solid 1.5px", "grey solid 1px"]
}

function changeLightTheme() {
     bodyTag.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"
     metaClass.content = SiteThemeValue.metaTheme = 'light'

     optionBGClass[0].style.border = SiteThemeValue.optionBordVal[0] = 'green solid 1.5px'
     optionBGClass[1].style.border = SiteThemeValue.optionBordVal[1] = 'grey solid 1px'

     settClass.style.backgroundColor = SiteThemeValue.settingBG = '#e0e0e0'
     DisBGClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"
     IconBGClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"
     IconBackBgClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = "black"
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = "black"
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = "black"
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = SiteThemeValue.GlobalLighty[0] = "white"
     }

     localStorage.setItem('SiteThemeValue', JSON.stringify(SiteThemeValue))
}

function changeDarkTheme() {
     bodyTag.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'
     metaClass.content = SiteThemeValue.metaTheme = 'dark'

     optionBGClass[0].style.border = SiteThemeValue.optionBordVal[0] = 'grey solid 1px'
     optionBGClass[1].style.border = SiteThemeValue.optionBordVal[1] = 'green solid 1.5px'

     settClass.style.backgroundColor = SiteThemeValue.settingBG = 'rgb(36, 36, 36)'
     DisBGClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'
     IconBGClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'
     IconBackBgClass.style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = 'white'
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = 'white'
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = SiteThemeValue.GlobalLighty[1] = 'white'
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = SiteThemeValue.GlobalLighty[0] = 'black'
     }

     localStorage.setItem('SiteThemeValue', JSON.stringify(SiteThemeValue))
}

function changeDimmedTheme() {
     alert('WORK IN PROGRESS (hes that lazy to make a dimmed theme)')
}

const ParseSiteTheme = JSON.parse(localStorage.getItem('SiteThemeValue'))
if (ParseSiteTheme !== null || ParseSiteTheme !== undefined) {
     bodyTag.style.backgroundColor = ParseSiteTheme.GlobalLighty[0]
     metaClass.content = ParseSiteTheme.metaTheme

     optionBGClass[0].style.border = ParseSiteTheme.optionBordVal[0]
     optionBGClass[1].style.border = ParseSiteTheme.optionBordVal[1]

     settClass.style.backgroundColor = ParseSiteTheme.settingBG
     DisBGClass.style.backgroundColor = ParseSiteTheme.GlobalLighty[0]
     IconBGClass.style.backgroundColor = ParseSiteTheme.GlobalLighty[0]
     IconBackBgClass.style.backgroundColor = ParseSiteTheme.GlobalLighty[0]

     for (let i of HeadDisplays) {
          document.getElementsByClassName(i)[0].style.backgroundColor = ParseSiteTheme.GlobalLighty[1]
     }
     for (let i = 0; i < disH3Tags.length; i++) {
          disH3Tags[i].style.backgroundColor = ParseSiteTheme.GlobalLighty[1]
     }
     for (let i = 0; i < disDescTags.length; i++) {
          disDescTags[i].style.backgroundColor = ParseSiteTheme.GlobalLighty[1]
     }
     for (let i = 0; i < optBG.length; i++) {
          optBG[i].style.backgroundColor = ParseSiteTheme.GlobalLighty[0]
     }
     for (let i = 0; i < optIconBG.length; i++) {
          optIconBG[i].style.backgroundColor = ParseSiteTheme.GlobalLighty[0]
     }
}