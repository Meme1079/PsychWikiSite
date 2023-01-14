const classCut = (tag) => { return document.getElementsByClassName(tag) }
const tagsCut = (tag) => { return document.getElementsByTagName(tag) }

const fakethin1 = '<div class="fake-hr-thin1"></div>';
for (let i = 0; i < tagsCut('h1').length; i++) {
     tagsCut('h1')[i].setAttribute('id', tagsCut('h1')[i].textContent.trim())
     tagsCut('h1')[i].innerHTML = tagsCut('h1')[i].textContent + fakethin1;
}
for (let i = 0; i < tagsCut('h2').length; i++) {
     tagsCut('h2')[i].setAttribute('id', tagsCut('h2')[i].textContent.trim())
     tagsCut('h2')[i].innerHTML = tagsCut('h2')[i].textContent + fakethin1;
}
for (let i = 0; i < tagsCut('h3').length; i++) {
     tagsCut('h3')[i].setAttribute('id', tagsCut('h3')[i].textContent.split('(')[0].trim())
}

for (let i = 0; i < tagsCut('a').length; i++) {
     tagsCut('a').rel = 'noopener noreferrer' // DO NOT DELETE
}

////

/* const tbodyTags = document.getElementsByTagName('tbody')
for (let tb = 0; tb < tbodyTags.length; tb++) {
     const tabVarClasses = tbodyTags[tb].getElementsByClassName('tab-var')
     const tabSyntClasses = tbodyTags[tb].getElementsByClassName('tab-synt')
     const tabSyntLClasses = tbodyTags[tb].getElementsByClassName('tab-syntL')
     for (let varClass = 0; varClass < tabVarClasses.length; varClass++) {
          tabVarClasses[varClass].innerHTML = `<code>${tabVarClasses[varClass].textContent}</code>`
     }
     for (let var2Class = 0; var2Class < tabSyntLClasses.length; var2Class++) {
          tabSyntLClasses[var2Class].innerHTML = `<code>${tabSyntLClasses[var2Class].textContent}</code>`
     }
} */

export { tagsCut, classCut }