document.getElementById('check').onclick = function() {showCropMenu()}
window.matchMedia("(max-width: 900px)").addListener(resizeCropMenu) 

function showCropMenu() {
     if (document.getElementsByClassName('menuCrop_lists')[0].style.display == 'block') {
          document.getElementsByClassName('menuCrop_lists')[0].style.display = 'none'
     } else {
          document.getElementsByClassName('menuCrop_lists')[0].style.display = 'block'
     }
}        

function resizeCropMenu(x) {
     if (! x.matches) { // If media query matches
          document.getElementsByClassName('menuCrop_lists')[0].style.display = 'none'
     }
}