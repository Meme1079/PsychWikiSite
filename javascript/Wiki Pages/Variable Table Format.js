import TableData_Variable from "../json/TableData Variable.json" assert { type: "json" }
import { tagsCut } from "./Wiki Format.js"

for (let [a, b] = [0, 0]; a < tagsCut('td').length, b < tagsCut('fake-hr-tab').length; a++, b++) {
     tagsCut('td')[a].style.paddingTop = '0.1cm'
     tagsCut('fake-hr-tab')[b].style.width = '24cm'
}

const queryTHeadButt = document.querySelectorAll('thead button')
let [checkIfActiveButt1, checkIfActiveButt2] = [true, false]
let colorButtons = ['rgb(55, 55, 55)', 'rgb(120, 120, 120)', 'rgb(25, 25, 25)']
for (let [descButt1, descButt2] = [0, 1]; descButt1 < queryTHeadButt.length, descButt2 < queryTHeadButt.length; descButt1 += 2, descButt2 += 2) {
     queryTHeadButt[descButt1].addEventListener('click', () => {
          for (let sectTab = 1; sectTab < document.querySelectorAll('section').length; sectTab++) {
               const queryTableNameDescAll = document.querySelectorAll('section')[sectTab].querySelectorAll('tbody .tab-nameL')
               const queryTableNameSyntAll = document.querySelectorAll('section')[sectTab].querySelectorAll('tbody .tab-syntL')
               for (let [dataDesc, dataSynt] = [0, 0]; dataDesc < queryTableNameDescAll.length, dataSynt < queryTableNameSyntAll.length; dataDesc++, dataSynt++) {
                    queryTableNameDescAll[dataDesc].style.display = 'block'
                    queryTableNameSyntAll[dataSynt].style.display = 'none'
               }
          }

          for (let [descButt1, descButt2] = [0, 1]; descButt1 < queryTHeadButt.length, descButt2 < queryTHeadButt.length; descButt1 += 2, descButt2 += 2) {
               checkIfActiveButt1 = true, checkIfActiveButt2 = false

               queryTHeadButt[descButt1].style.backgroundColor = colorButtons[0]
               queryTHeadButt[descButt1].style.outline = colorButtons[1] + ' solid 1px'

               queryTHeadButt[descButt2].style.backgroundColor = colorButtons[2]
               queryTHeadButt[descButt2].style.outline = 'none'
          }
     });

     queryTHeadButt[descButt2].addEventListener('click', () => {
          for (let sectTab = 1; sectTab < document.querySelectorAll('section').length; sectTab++) {
               const queryTableNameDescAll = document.querySelectorAll('section')[sectTab].querySelectorAll('tbody .tab-nameL')
               const queryTableNameSyntAll = document.querySelectorAll('section')[sectTab].querySelectorAll('tbody .tab-syntL')
               for (let [dataDesc, dataSynt] = [0, 0]; dataDesc < queryTableNameDescAll.length, dataSynt < queryTableNameSyntAll.length; dataDesc++, dataSynt++) {
                    queryTableNameDescAll[dataDesc].style.display = 'none'
                    queryTableNameSyntAll[dataSynt].style.display = 'block'
               }
          }

          for (let [descButt1, descButt2] = [0, 1]; descButt1 < queryTHeadButt.length, descButt2 < queryTHeadButt.length; descButt1 += 2, descButt2 += 2) {
               checkIfActiveButt1 = false, checkIfActiveButt2 = true

               queryTHeadButt[descButt1].style.backgroundColor = colorButtons[2]
               queryTHeadButt[descButt1].style.outline = 'none'

               queryTHeadButt[descButt2].style.backgroundColor = colorButtons[0]
               queryTHeadButt[descButt2].style.outline = colorButtons[1] + ' solid 1px'
          }
     });

     // Mouse hover on button

     queryTHeadButt[descButt1].addEventListener('mouseover', () => {
          for (let descButt1 = 0; descButt1 < queryTHeadButt.length; descButt1 += 2) {
               queryTHeadButt[descButt1].style.backgroundColor = colorButtons[0]
          }
     })

     queryTHeadButt[descButt2].addEventListener('mouseover', () => {
          for (let descButt2 = 1; descButt2 < queryTHeadButt.length; descButt2 += 2) {
               queryTHeadButt[descButt2].style.backgroundColor = colorButtons[0]
          }
     })

     // Mouse out of the button

     queryTHeadButt[descButt1].addEventListener('mouseout', () => {
          if (checkIfActiveButt1 == false || (checkIfActiveButt1 == null && checkIfActiveButt2 == null)) {
               for (let descButt1 = 0; descButt1 < queryTHeadButt.length; descButt1 += 2) {
                    queryTHeadButt[descButt1].style.backgroundColor = colorButtons[2]
               }  
          } 
     })

     queryTHeadButt[descButt2].addEventListener('mouseout', () => {
          if (checkIfActiveButt2 == false || (checkIfActiveButt1 == null && checkIfActiveButt2 == null)) {
               for (let descButt2 = 1; descButt2 < queryTHeadButt.length; descButt2 += 2) {
                    queryTHeadButt[descButt2].style.backgroundColor = colorButtons[2]
               }  
          } 
     })
}

loopTableDataJSON([1, 2, 4, 3], [ 
     TableData_Variable.Data_SongWeek,
     TableData_Variable.Data_Game,
     TableData_Variable.Data_Misc,
     TableData_Variable.Data_Pref
])

loopTableDataJSON([0, 5], [ 
     TableData_Variable.Data_LuaUnique,
     TableData_Variable.Data_Strums
], false)

function loopTableDataJSON(sectNumArry, objectArry, withSynt = true) {
     for (let [a, b] = [0, 0]; a < sectNumArry.length, b < objectArry.length; a++, b++) {
          if (withSynt == true) {
               importTableDataJSON(sectNumArry[a], objectArry[b])
          } else {
               importTableDataJSON(sectNumArry[a], objectArry[b], false)
          }
     }
}

function importTableDataJSON(numSect, JSONsendObject, withSynt = true) {
     let formatData = ''
     for (let i = 0; i < JSONsendObject.length; i++) {
          if (withSynt == true) {
               if (JSONsendObject[i][2] === "\"Shortcut doesn't exist!\"") {
                    formatData += `<tr>
                         <td class="tab-var"><code> ${JSONsendObject[i][0]} </code></td>
                         <td class="tab-nameL"> ${JSONsendObject[i][1]} </td>
                         <td class="tab-syntL"><i> ${JSONsendObject[i][2]} </i></td>
                    </tr>`
               } else {
                    formatData += `<tr>
                         <td class="tab-var"><code> ${JSONsendObject[i][0]} </code></td>
                         <td class="tab-nameL"> ${JSONsendObject[i][1]} </td>
                         <td class="tab-syntL"><code> ${JSONsendObject[i][2]} </code></td>
                    </tr>`
               }
          } else {
               formatData += `<tr>
                    <td class="tab-var"><code> ${JSONsendObject[i][0]} </code></td>
                    <td class="tab-nameL"> ${JSONsendObject[i][1]} </td>
               </tr>`
          }
          
          document.getElementsByTagName('section')[numSect].getElementsByTagName('tbody')[0].innerHTML = formatData
     } 
}

let ParseSiteJSON = JSON.parse(localStorage.getItem('SiteValue'))
if (ParseSiteJSON.GlobalLighty[0] === 'white' && (ParseSiteJSON !== null || ParseSiteJSON !== undefined)) {
     for (let [descButt1, descButt2] = [0, 1]; descButt1 < queryTHeadButt.length, descButt2 < queryTHeadButt.length; descButt1 += 2, descButt2 += 2) {
          queryTHeadButt[descButt1].style.backgroundColor = colorButtons[0] = 'rgb(230, 230, 230)'
          queryTHeadButt[descButt1].style.outline = 'rgb(0, 0, 0) solid 1px'
          queryTHeadButt[descButt1].style.outline = colorButtons[1] = 'rgb(0, 0, 0)'

          queryTHeadButt[descButt2].style.backgroundColor = colorButtons[2] = 'rgb(190, 190, 190)'
     }
}