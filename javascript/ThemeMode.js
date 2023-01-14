import { tagsCut, classCut } from "./Wiki Pages/Wiki Format.js"

let ParseSiteJSON = JSON.parse(localStorage.getItem('SiteValue'))
if (ParseSiteJSON.GlobalLighty[0] === 'white' && (ParseSiteJSON !== null || ParseSiteJSON !== undefined)) {
     tagsCut('meta')[2].content = ParseSiteJSON.metaTheme
     tagsCut('body')[0].style.backgroundColor = ParseSiteJSON.GlobalLighty[0]

     if (classCut('fake-hr-thin2').length > 0) {
          classCut('fake-hr-thin2')[0].style.backgroundColor = ParseSiteJSON.GlobalLighty[1]
     }
     for (let i = 0; i < classCut('fake-hr-thin1').length; i++) {
          classCut('fake-hr-thin1')[i].style.backgroundColor = ParseSiteJSON.GlobalLighty[1]
     }
     for (let i = 0; i < classCut('fake-hr-thick').length; i++) {
          classCut('fake-hr-thick')[i].style.backgroundColor = ParseSiteJSON.GlobalLighty[1]
     }

     for (let i = 0; i < tagsCut('code').length; i++) {
          tagsCut('code')[i].style.backgroundColor = '#c1cfe6'
          tagsCut('code')[i].style.border = '#c1cfe6 solid 10px'
          tagsCut('code')[i].style.borderWidth = 'thin 3px'
     }
      
     for (let url of window.location.href.split('/')) {
          switch (url) {
               case 'basics_of_coding.html':
                    tagsCut('video')[0].style.outline = ParseSiteJSON.GlobalLighty[1] + ' solid 1.8px'
                    for (let i = 0; i < classCut('fake-hr-tab').length; i++) {
                         classCut('fake-hr-tab')[i].style.backgroundColor = ParseSiteJSON.GlobalLighty[1]
                    }
               case 'variables.html':
                    for (let i = 0; i < classCut('fake-hr-tabL').length; i++) {
                         classCut('fake-hr-tabL')[i].style.backgroundColor = ParseSiteJSON.GlobalLighty[1]
                    }

                    const queryTHeadButt = document.querySelectorAll('thead button')
                    for (let [descButt1, descButt2] = [0, 1]; descButt1 < queryTHeadButt.length, descButt2 < queryTHeadButt.length; descButt1 += 2, descButt2 += 2) {
                    }
          }
     }
}