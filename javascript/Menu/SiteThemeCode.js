import SiteThemeValue from '../json/SiteThemeValue.json' assert { type: "json" } // goofy ahh json file

const classCut = (tag) => { return document.getElementsByClassName(tag) }
const tagsCut = (tag) => { return document.getElementsByTagName(tag) }
const idsCut = (tag) => { return document.getElementById(tag) }

const displayIDs = ['displayHead', 'displayHeadDesc', 'displayHeadLine', 'displayH1', 'displayH1Line', 'displayThickLine']
const displayClasses = [classCut('displayH3').length, classCut('displayDesc').length]
const optionsClasses = [classCut('optionBG').length, classCut('optionIconBG').length]

const displayMax = displayClasses.reduce((a, b) => Math.max(a, b), -Infinity);
const optionsBGMax = optionsClasses.reduce((a, b) => Math.max(a, b), -Infinity);

tagsCut('button')[1].addEventListener('click', changeLightTheme)
tagsCut('button')[2].addEventListener('click', changeDarkTheme)
tagsCut('button')[3].addEventListener('click', changeDimmedTheme)

function changeSiteValue(JSONtype) { // better to be honest
     tagsCut('body')[0].style.backgroundColor = JSONtype.GlobalLighty[0];
     tagsCut('meta')[2].content = JSONtype.metaTheme;

     classCut('optionIconBG')[0].style.border = JSONtype.optionBordVal[0]
     classCut('optionIconBG')[1].style.border = JSONtype.optionBordVal[1]

     idsCut('icon-bgBack').style.backgroundColor = JSONtype.GlobalLighty[0]

     for (let i = 0; i < optionsBGMax; i++) {
          classCut('optionBG')[i].style.backgroundColor = JSONtype.GlobalLighty[0];
          classCut('optionIconBG')[i].style.backgroundColor = JSONtype.GlobalLighty[0];
     }
     for (let i = 0; i < classCut('icon-bg').length; i++) {
          classCut('icon-bg')[i].style.backgroundColor = JSONtype.GlobalLighty[0];
     }
     for (let i = 0; i < classCut('setting').length; i++) {
          classCut('setting')[i].style.backgroundColor = JSONtype.settingBG;
     }

     idsCut('displayBG').style.backgroundColor = JSONtype.GlobalLighty[0];
     for (let i of displayIDs) {
          idsCut(i).style.backgroundColor = JSONtype.GlobalLighty[1];
     }
     for (let i = 0; i < displayMax; i++) {
          classCut('displayH3')[i].style.backgroundColor = JSONtype.GlobalLighty[1];
          classCut('displayDesc')[i].style.backgroundColor = JSONtype.GlobalLighty[1];
     }
}

function changeLightTheme() { // Disgusting
     SiteThemeValue.optionBordVal[0] = 'green solid 1.5px'
     SiteThemeValue.optionBordVal[1] = 'grey solid 1px'
     SiteThemeValue.GlobalLighty[0] = 'white'
     SiteThemeValue.GlobalLighty[1] = 'black'
     SiteThemeValue.settingBG = 'rgb(222, 222, 222)'
     SiteThemeValue.metaTheme = 'light'

     changeSiteValue(SiteThemeValue)
     localStorage.setItem('SiteValue', JSON.stringify(SiteThemeValue))
}

function changeDarkTheme() { // Amazing
     SiteThemeValue.optionBordVal[0] = 'grey solid 1px'
     SiteThemeValue.optionBordVal[1] = 'green solid 1.5px'
     SiteThemeValue.GlobalLighty[0] = 'black'
     SiteThemeValue.GlobalLighty[1] = 'white'
     SiteThemeValue.settingBG = 'rgb(36, 36, 36)'
     SiteThemeValue.metaTheme = 'dark'

     changeSiteValue(SiteThemeValue)
     localStorage.setItem('SiteValue', JSON.stringify(SiteThemeValue))
}

function changeDimmedTheme() { // Meh
     alert('WORK IN PROGRESS (hes that lazy to make a dimmed theme)')
}

let ParseSiteJSON = JSON.parse(localStorage.getItem('SiteValue'))
if (ParseSiteJSON !== null || ParseSiteJSON !== undefined) { // DO NOT DELETE OR ELSE
     changeSiteValue(ParseSiteJSON)
}